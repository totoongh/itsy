# Java Grundlagen

Eine kleine statische Lernplattform für angehende Anwendungsentwicklerinnen und Anwendungsentwickler.

Der Kurs nutzt als roten Faden die Modellierung einer Ausbildungsgruppe: Eine Ausbilderin verwaltet Azubis mit Vorname, Lehrjahr, Anwesenheit und den letzten drei Noten. Aus einzelnen Werten wächst schrittweise ein kleines Java-Modell.

## Inhalt dieses Prototyps

Beim Start erscheint eine Auswahlseite mit drei Lernbereichen:

- Java Grundlagen
- Exkurs: Enums
- Java OOP

Der aktuelle Stand deckt vierzehn aktive Themen aus dem Ausbildungsrahmen ab:

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
12. Enums
13. Enums mit Eigenschaften
14. RECAP: Klassen vs. Objekte

Das vorbereitete Test-Modul ist vorerst deaktiviert.

Jedes Thema enthält:

- kurze Konzept-Erklärung
- Java-nahe Beispiele
- Wissensquiz
- simulierte Code-Vervollständigung

Die Code-Vervollständigung führt keinen Java-Code aus. Sie prüft nur die eingegebenen Lücken gegen erwartete Antworten. Das ist bewusst so, damit die Plattform ohne Backend und ohne lokale Java-Ausführung funktioniert.

Zusätzlich gibt es ein eigenes Kapitel mit Implementierungsaufgaben. Diese Aufgaben sind nach Niveau gemischt und enthalten jeweils eine erwartete Konsolenausgabe zum Vergleichen.

## Lokal starten

Öffne einfach:

```text
index.html
```

im Browser.

## Transfer-Datei

Der aktuelle Projektstand kann als einzelne ausführbare Datei erzeugt werden. Für macOS/Linux:

```bash
./scripts/build-transfer-file.sh
```

Dadurch entstehen:

```text
java-learning-platform-transfer.sh
java-learning-platform-transfer.ps1
```

Die `.sh`-Datei kann auf macOS/Linux übertragen und dort ausgeführt werden:

```bash
./java-learning-platform-transfer.sh
```

Die `.ps1`-Datei kann auf Windows in PowerShell ausgeführt werden:

```powershell
.\java-learning-platform-transfer.ps1
```

Standardmäßig wird ein Ordner `java-learning-platform` erzeugt. Optional kann ein Zielordner angegeben werden:

```bash
./java-learning-platform-transfer.sh zielordner
```

```powershell
.\java-learning-platform-transfer.ps1 zielordner
```

Wenn im Zielordner direkt ein neues Git-Repository initialisiert werden soll:

```bash
./java-learning-platform-transfer.sh zielordner --init-git
```

```powershell
.\java-learning-platform-transfer.ps1 zielordner -InitGit
```

Unter Windows kann die PowerShell-Transfer-Datei auch direkt neu erzeugt werden:

```powershell
.\scripts\build-transfer-file.ps1
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
