# Vorstufe – Team Praxiseinsatz: von der Beschreibung zum eigenen Diagramm

## Euer Auftrag

Lest die Beschreibung unten. Erstellt daraus ein digitales UML-Klassendiagramm (zum Beispiel mit draw.io, PlantUML oder einem vergleichbaren Werkzeug), das **alle Elemente enthält, die in der Beschreibung vorkommen** – Klassen, Attribute, Methoden, ein Enum, ein Interface und die Beziehungen zwischen ihnen.

Niemand gibt euch Klassennamen, Attributtypen oder Sichtbarkeiten vor. Das entscheidet ihr selbst, anhand des Textes und der Konventionen in [UML-KONVENTIONEN.md](../UML-KONVENTIONEN.md). Wenn der Text nichts dazu sagt, entscheidet ihr im Team und könnt es begründen.

## Die Beschreibung

AzubiHub verwaltet drei Arten von Personen: Azubis, Ausbilder und BPU. Jede Person hat eine eindeutige Nummer, unter der sie im System geführt wird, sowie einen Vor- und einen Nachnamen. Diese drei Angaben werden beim Anlegen einer Person einmalig festgelegt; kein anderer Teil der Anwendung darf sie danach direkt verändern. Wer den vollständigen Namen einer Person braucht, bekommt ihn über eine eigene Abfrage, die Vor- und Nachname zusammensetzt.

Eine „Person ohne genauere Rolle" gibt es in AzubiHub nicht – es wird nie ein Personen-Objekt erzeugt, das nur eine Person und nichts Genaueres ist. Jede Person kann außerdem auf Nachfrage eine kurze Bezeichnung ihrer Rolle liefern, zum Beispiel „Azubi", „Ausbilder" oder „BPU". Wie genau diese Bezeichnung lautet, ist für jede der drei Rollen unterschiedlich – die Oberklasse kann dafür keine gemeinsame, sinnvolle Antwort vorgeben.

Ein Azubi hat zusätzlich zu den allgemeinen Personen-Angaben ein Ausbildungsjahr sowie eine Fachrichtung. Für die Fachrichtung gibt es bereits ein fertiges Enum namens `Fachrichtung` mit den Werten `ANWENDUNGSENTWICKLUNG`, `SYSTEMINTEGRATION` und `DATEN_UND_PROZESSANALYSE` – das müsst ihr nicht selbst modellieren, nur als vorhandenen Baustein einzeichnen. Ausbilder und BPU brauchen über die allgemeinen Personen-Angaben hinaus nichts Zusätzliches.

Jede Abteilung im Betrieb hat eine kurze, eindeutige Kennung, eine Beschreibung ihres Aufgabenbereichs und genau einen BPU, der für sie zuständig ist. Eine Abteilung kann mehrere Praxisangebote machen. Jedes Praxisangebot gehört zu genau einer Abteilung, hat eine Beschreibung dessen, was ein Azubi dort tun würde, und legt fest, ab welchem Ausbildungsjahr ein Azubi dafür überhaupt infrage kommt.

Für ein Praxisangebot können mehrere konkrete Praxisplätze eingerichtet werden. Jeder Praxisplatz gehört zu genau einem Praxisangebot, hat eine Kapazität – also wie viele Azubis dort gleichzeitig eingesetzt werden können – und kann optional einen fachlichen Schwerpunkt beschreiben.

Wenn ein Azubi konkret für einen Praxiseinsatz eingeteilt wird, entsteht daraus ein eigenes Objekt: Es gehört zu genau einem Azubi, bezieht sich auf ein bestimmtes Praxisangebot und wurde von einem bestimmten Ausbilder zugewiesen. Ein solcher Praxiseinsatz durchläuft im Laufe der Zeit verschiedene Zustände: Er ist zunächst GEPLANT, kann dann LAUFEND werden, am Ende entweder ABGESCHLOSSEN oder – falls es doch nicht klappt – ABGESAGT werden. Neu angelegte Praxiseinsätze starten immer im Zustand GEPLANT.

Zuletzt gibt es eine Anforderung, die nicht nur für Praxiseinsätze gilt, sondern für mehrere, inhaltlich völlig unterschiedliche Bereiche der Anwendung: Manche Objekte sollen unabhängig davon, worum es inhaltlich geht, auf dieselbe Art einen nachvollziehbaren Verlauf als Liste von Text-Zeilen ausgeben können. Praxiseinsätze gehören dazu. Das bedeutet, es muss einen gemeinsamen Vertrag geben, den Praxiseinsätze erfüllen, den aber auch völlig andere Klassen in anderen Teilen der Anwendung erfüllen können, ohne sonst etwas mit einem Praxiseinsatz zu tun zu haben.

## Worauf ihr besonders achten müsst

- Eure Domäne hat, anders als die von Team Berichtsheft, keine natürliche Vererbungskette außer bei den Personen. Sucht trotzdem sorgfältig – gibt es wirklich keine ist-a-Beziehung in eurem Bereich, oder übersieht ihr eine?
- Wo braucht ihr ein Interface? Warum passt hier kein `extends`?
- Welche Attribute sind privat, welche Methoden public? Was sagt der Text über Zugriff von außen?
- Welche Klassen „kennen" andere Klassen als Attribut (Assoziation)? Sucht im Text nach Formulierungen wie „gehört zu", „bezieht sich auf", „wurde zugewiesen von". Eine Klasse in eurem Modell kennt gleich drei andere Klassen gleichzeitig – welche ist das?
- Welche Datentypen passen zu den beschriebenen Werten (Zahl, Text, Wahrheitswert, ein anderes Objekt, ein Enum)?
- Wie viele Zustände hat der Lebenszyklus, den der Text beschreibt, und wie modelliert ihr das? Wie genau sind diese Zustände an manchen Stellen im Text geschrieben – fällt euch etwas auf?

## Bonus: Multiplizitäten (optional)

Dieser Abschnitt ist nur für Teams, die mit dem Kernauftrag oben fertig sind. Lest dazu [UML-KONVENTIONEN.md](../UML-KONVENTIONEN.md#bonus-multiplizitäten), falls ihr Multiplizitäten noch nicht kennt.

Für einige Beziehungen habt ihr die Multiplizität schon oben im Haupttext gelesen, zum Beispiel bei Abteilung und Praxisangebot oder bei Praxisangebot und Praxisplatz – schaut noch einmal genau hin. Für die übrigen Beziehungen fehlt noch eine Seite:

Ein einzelner BPU kann gleichzeitig für mehrere Abteilungen zuständig sein; es kann auch Abteilungen geben, die (noch) keinem BPU zugeordnet sind. Ein Azubi kann im Laufe seiner Ausbildung mehrere Praxiseinsätze haben, muss aber nicht sofort einen bekommen. Ein einzelnes Praxisangebot kann – über seine Praxisplätze hinweg – von mehreren Praxiseinsätzen gleichzeitig oder nacheinander genutzt werden. Ein Ausbilder kann ebenfalls für mehrere Praxiseinsätze gleichzeitig zuständig sein.

Ergänzt an allen Assoziationspfeilen eures Diagramms auf beiden Seiten die passende Multiplizität.

---

Druckt euer fertiges Diagramm auf A3 aus.
