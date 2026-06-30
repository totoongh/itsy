# Java Grundlagen

Eine kleine statische Lernplattform für angehende Anwendungsentwicklerinnen und Anwendungsentwickler.

Der Kurs nutzt als roten Faden die Modellierung einer Ausbildungsgruppe: Eine Ausbilderin verwaltet Azubis mit Vorname, Lehrjahr, Anwesenheit und den letzten drei Noten. Aus einzelnen Werten wächst schrittweise ein kleines Java-Modell.

## Inhalt dieses Prototyps

Der aktuelle Stand deckt zwölf Themen aus dem Ausbildungsrahmen ab:

1. Variablen
2. Einfache Datentypen
3. Kontrollstrukturen
4. Arrays
5. Schleifen
6. Listen
7. Methoden
8. Klassen
9. Objekte in Listen
10. Kapselung
11. Fehlerbehandlung
12. Tests

Jedes Thema enthält:

- kurze Konzept-Erklärung
- Java-nahe Beispiele
- Wissensquiz
- simulierte Code-Vervollständigung

Die Code-Vervollständigung führt keinen Java-Code aus. Sie prüft nur die eingegebenen Lücken gegen erwartete Antworten. Das ist bewusst so, damit die Plattform ohne Backend und ohne lokale Java-Ausführung funktioniert.

## Lokal starten

Öffne einfach:

```text
index.html
```

im Browser.

## Transfer-Datei

Der aktuelle Projektstand kann als einzelne ausführbare Datei erzeugt werden:

```bash
./scripts/build-transfer-file.sh
```

Dadurch entsteht:

```text
java-learning-platform-transfer.sh
```

Diese Datei kann auf ein Zielsystem übertragen und dort ausgeführt werden:

```bash
./java-learning-platform-transfer.sh
```

Standardmäßig wird ein Ordner `java-learning-platform` erzeugt. Optional kann ein Zielordner angegeben werden:

```bash
./java-learning-platform-transfer.sh zielordner
```

Wenn im Zielordner direkt ein neues Git-Repository initialisiert werden soll:

```bash
./java-learning-platform-transfer.sh zielordner --init-git
```

## GitHub-Nutzung

Dieses Teilprojekt kann als statische Website in ein GitHub-Repository gelegt werden.

Geeignete Struktur:

```text
java-learning-platform/
  index.html
  styles.css
  app.js
  README.md
```

Für GitHub Pages kann die Seite ohne Build-Schritt ausgeliefert werden.

## Nächste Ausbaustufen

Der aktuelle Prototyp bildet den geplanten Grundlagenpfad vollständig ab. Sinnvolle spätere Erweiterungen wären Vertiefungen zu JUnit, Projektstruktur, Paketen oder kleinen Konsolenprogrammen.
