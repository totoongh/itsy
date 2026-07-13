# UML-Konventionen für AzubiHub

Diese Notation gilt für alle Diagramme, die ihr selbst zeichnet. Haltet euch exakt daran – eure Diagramme sollen für andere Teams und für die Ausbilder ohne Nachfrage lesbar sein.

## Klassenkasten

Ein Klassenkasten hat immer drei Bereiche, getrennt durch eine Linie:

```
┌─────────────────────────┐
│        Klassenname       │   ← Name
├─────────────────────────┤
│ - attribut: Typ           │   ← Attribute
├─────────────────────────┤
│ + methode(param): Typ     │   ← Methoden
└─────────────────────────┘
```

## Sichtbarkeiten

| Symbol | Bedeutung | Wann |
|---|---|---|
| `-` | private | Standard für Attribute. Nur die eigene Klasse darf direkt darauf zugreifen. |
| `+` | public | Standard für Methoden, die von außen aufgerufen werden sollen (Getter, fachliche Methoden, Konstruktor). |
| `#` | protected | Nur nötig, wenn eine Methode ausschließlich von Unterklassen aufgerufen werden soll, nicht von außen. |

Jedes Attribut und jede Methode bekommt genau eines dieser Symbole. Kein Symbol vergessen.

> **Merksatz – private und Vererbung:** Ein privates Attribut der Oberklasse existiert trotzdem in jedem Objekt der Unterklasse – ein `Azubi` ist ja ein vollständiges `Person`-Objekt. Was die Unterklasse nicht bekommt, ist der *Zugriff*: Ihr Code darf das Attribut nirgends beim Namen nennen. Gesetzt wird es trotzdem, und zwar über `super(...)` im Konstruktor – das ruft den Konstruktor der Oberklasse auf, und der darf auf die eigenen privaten Attribute zugreifen. Deshalb bleibt ein Attribut in eurem Diagramm `-`, auch wenn ihr wisst, dass Unterklassen davon „betroffen" sind.

## Abstrakte Klassen und abstrakte Methoden

- Der Klassenname steht *kursiv*.
- Eine abstrakte Methode steht ebenfalls *kursiv* und bekommt zusätzlich das Präfix `{abstract}` vor der Sichtbarkeit.
- Eine abstrakte Methode hat **keinen Rumpf** – im Diagramm heißt das: nur die Signatur, keine Umsetzung.

```
┌───────────────────────────────────┐
│             Berichtsheft            │  ← kursiv = abstract
├───────────────────────────────────┤
│ - nummer: int                        │
├───────────────────────────────────┤
│ {abstract} + getArt(): Berichtsart   │  ← kursiv + {abstract}
└───────────────────────────────────┘
```

Eine Klasse muss dann abstrakt sein, wenn es **nie ein Objekt geben darf, das nur diese Klasse ist** – es gibt immer eine speziellere Unterklasse. Eine Methode muss dann abstrakt sein, wenn die Oberklasse keine sinnvolle, allgemeingültige Antwort geben kann und **jede** Unterklasse eine eigene liefern muss.

## Interfaces

- Stereotyp `«interface»` über dem Klassennamen.
- Keine Attribute.
- Methoden ohne `-`, immer `+` (Interface-Methoden sind in Java automatisch public).

```
┌───────────────────────────┐
│      «interface»            │
│      Protokollierbar         │
├───────────────────────────┤
│ + verlauf(): List<String>    │
└───────────────────────────┘
```

## Enums

- Stereotyp `«enum»` über dem Namen.
- Konstanten stehen ohne Sichtbarkeitszeichen, meist zentriert, in einem eigenen Bereich.
- Konstanten werden per Konvention in GROSSBUCHSTABEN geschrieben (z. B. `ENTWURF`, nicht `Entwurf`).

## Konstruktoren

Wie eine Methode, aber ohne Rückgabetyp: `+ Klassenname(param1, param2, ...)`.

## Beziehungspfeile

| Aussehen | Bedeutung | Wann |
|---|---|---|
| durchgezogene Linie, **hohles** Dreieck an der Oberklasse | Vererbung (`extends`) | Die Unterklasse ist eine spezialisierte Form der Oberklasse (ist-a-Beziehung) und erbt Attribute und Methoden. |
| **gestrichelte** Linie, hohles Dreieck am Interface | Interface-Umsetzung (`implements`) | Die Klasse verspricht, alle Methoden des Interfaces bereitzustellen. Sie erbt nichts. |
| durchgezogene Linie, offener Pfeil | Assoziation | Die Klasse hält eine Referenz auf eine andere Klasse als Attribut („kennt", „hat"). |

Verwechselt die ersten beiden nicht – beide haben ein hohles Dreieck, nur die Linienart unterscheidet sie.

## Bonus: Multiplizitäten

Dieser Abschnitt ist optional. Wer mag, ergänzt an den Assoziationspfeilen zusätzlich, **wie viele Objekte auf jeder Seite beteiligt sein können** – das nennt man Multiplizität. Sie steht als kleine Zahl oder Zahlenbereich an jedem Ende der Linie, direkt am jeweiligen Kasten.

| Notation | Bedeutung |
|---|---|
| `1` | genau eins |
| `0..1` | keins oder eins |
| `0..*` (auch nur `*`) | beliebig viele, auch keins |
| `1..*` | mindestens eins |

Ein Beispiel: Eine Abteilung kann mehrere Praxisangebote haben, jedes Praxisangebot gehört aber zu genau einer Abteilung.

```
┌────────────┐                    ┌────────────────┐
│  Abteilung   │  "1"        "0..*"  │  Praxisangebot    │
│              ├─────────────────┤                    │
└────────────┘                    └────────────────┘
```

Die `1` steht an dem Ende, das näher an `Abteilung` liegt, weil sie beschreibt, zu **wie vielen Abteilungen ein einzelnes Praxisangebot gehört** (genau einer). Die `0..*` steht am Ende bei `Praxisangebot`, weil sie beschreibt, **wie viele Praxisangebote eine einzelne Abteilung haben kann** (beliebig viele, auch keins).

In eurer Vorstufen-Beschreibung gibt es einen eigenen, klar markierten Bonus-Abschnitt, aus dessen Fließtext sich die Multiplizitäten für eure Assoziationen ableiten lassen. Ergänzt sie dort, wo ihr sie aus dem Text herauslesen könnt – der Kernauftrag funktioniert aber auch ohne.
