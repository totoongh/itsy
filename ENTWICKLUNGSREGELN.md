# Entwicklungsregeln für die Java-Lernplattform

Dieses Dokument beschreibt verbindliche Regeln für die Weiterentwicklung der interaktiven Java-Lernplattform.

## Zielbild

Die Plattform soll Einsteigerinnen und Einsteiger nicht mit IDE-, Build- oder Framework-Komplexität überfordern. Sie soll Konzepte erklären, kleine Beispiele zeigen und interaktive Aufgaben anbieten.

Die Lernenden sollen lokal im Browser arbeiten können. Die Plattform soll ohne Backend, ohne Build-Schritt und ohne echte Java-Ausführung funktionieren.

Der fachliche rote Faden ist die Modellierung einer Ausbildungsgruppe von Azubis. Beispiele sollen auf Azubis, Lehrjahr, Anwesenheit, letzte drei Noten, Ausbilderin und Gruppendaten aufbauen. Kino-, Ticket-, Aufgabenboard- oder Berichtsheft-Szenarien gehören nicht zur Kurs-Story.

## Sprache und Schreibweise

- Sichtbare deutsche Texte verwenden echte Umlaute: `ä`, `ö`, `ü`, `Ä`, `Ö`, `Ü`, `ß`.
- Keine Umschreibungen wie `ae`, `oe`, `ue`, `ss`, wenn ein deutsches Wort gemeint ist.
- Fachbegriffe dürfen deutsch erklärt werden, auch wenn der Java-Begriff englisch bleibt.
- Erklärungen bleiben kurz, konkret und anschaulich.

## Layout

- Die Startseite mit der Auswahl der Lernbereiche bleibt erhalten.
- Die Kapitel-/Modulnavigation bleibt innerhalb des gewählten Lernbereichs erhalten.
- Der Inhaltsbereich eines Moduls ist strikt einspaltig.
- Abschnitte stehen untereinander:
  - Konzept
  - Beispiele
  - Wissensquiz
  - Code-Vervollständigung
- Keine zweite Inhaltsspalte für Quiz oder Aufgaben.
- Auf mobilen Viewports darf kein horizontaler Seiten-Overflow entstehen.

## Modulaufbau

Jedes Modul soll enthalten:

- Konzept-Erklärung
- anschauliche Beispiele
- Wissensquiz
- Code-Vervollständigung

Neue Konzepte sollen schrittweise eingeführt werden. Eine Aufgabe soll nicht zu viele neue Begriffe gleichzeitig einführen.

Recap-Module dürfen als reine Wiederholungsseiten angelegt werden. Sie können nur aus Wissensquiz und Code-Vervollständigung bzw. Ausfülllücken bestehen, wenn keine neuen Konzepte eingeführt werden.

Die ersten Module betrachten einzelne Werte eines Azubis. Arrays, Listen und Gruppen mit mehreren Azubis werden erst eingeführt, wenn das jeweilige Modul diese Konzepte erklärt. Frühe Beispiele vermeiden String-Vergleiche mit `.equals(...)`; Entscheidungen sollen zunächst über `boolean`, `int`, `double` und einfache Zahlenvergleiche laufen.

Das Test-Modul bleibt fachlich vorbereitet, ist aber vorerst in der Navigation deaktiviert.

Die Aufgaben-Seite ist ein eigenes hervorgehobenes Kapitel am Ende der Navigation im Bereich Java Grundlagen. Jede Implementierungsaufgabe enthält Anforderungen und eine erwartete Konsolenausgabe, damit Lernende ihre Lösung gegen ein konkretes Ergebnis vergleichen können.

## Code-Beispiele

- Code-Beispiele sind fake-runnable.
- Es wird kein echter Java-Code im Browser ausgeführt.
- Die Ausgabe wird als simulierte Konsolenausgabe angezeigt.
- Code-Beispiele dürfen am Anfang kurze Kommentarzeilen enthalten, wenn diese den fachlichen Kontext erklären.
- Bei normalen Beispielen gibt es eine kleine IDE-artige Gutter links am Codeblock.
- In dieser Gutter sitzt oben ein kleines Play-Symbol, das nicht nur über Farbe erkennbar sein darf.
- Es gibt keinen normalen Textbutton `Ausführen` unter dem Codeblock.
- Der Output erscheint beim Klick auf das Play-Symbol.
- Das Play-Symbol darf den Codeblock nicht optisch dominieren.

## Quiz-Code und Output

- Quizfragen dürfen Code enthalten.
- Quizblöcke zeigen keinen Konsolenoutput.
- Wissensquizfragen dürfen die Lösung nicht schon in der Aufgabenstellung oder in einem begleitenden Codebeispiel verraten.
- Nach einer falschen Antwort muss man weiter raten können.
- Falsche Antworten dürfen markiert/deaktiviert werden, aber die richtige Antwort muss weiter klickbar bleiben.
- Zwischen einer eingeblendeten Antwort/Rückmeldung und der nächsten Frage muss sichtbar Luft bleiben.
- In Quizfragen und Quizantworten gibt es keine Glossar-Markierungen.

## Code-Vervollständigung

- Code-Vervollständigung simuliert Code, führt ihn aber nicht aus.
- Nach korrekter Lösung wird eine simulierte Konsolenausgabe angezeigt.
- Bei falscher Lösung bleibt die Ausgabe verborgen.
- Rückmeldungen sollen konkret, freundlich und knapp sein.
- Es gibt keine Hinweise oder Tipptexte bei Code-Vervollständigungsblöcken.

## Glossar

- Es gibt ein festes Glossar. Dies hat eine eigene Seite, auf der es dargestellt wird, wo auch die echte "Wahrheit" steht, d.h. auf diesen Text wird referenziert.
- Das Glossar ist als eigener Menüpunkt oben auf Höhe der Modulüberschrift erreichbar.
- Die Glossarseite ist durchsuchbar und tabellarisch aufgebaut: links steht der Titel, rechts die Beschreibung mit deutlich mehr Platz.
- Bei der Suche erscheinen zuerst Treffer, bei denen der Suchbegriff im Titel vorkommt, danach Treffer, bei denen der Suchbegriff nur in der Beschreibung vorkommt.
- Glossarbegriffe werden beim ersten Vorkommen auf einer Modulseite markiert, immer nur in Konzepterklärungstexten.
- Pro Begriff wird auf einer Modulseite nur das erste Vorkommen markiert.
- Beim Hover oder Tastatur-Fokus erscheint ein kleines Fenster mit:
  - Begriff als Überschrift
  - kurzer, einfacher Erklärung aus dem Glossar.
- Innerhalb von Codeblöcken werden keine Glossarlinks oder Glossarfenster angezeigt.
- In Infoboxen sind Glossar-Markierungen erlaubt, falls sie fachlich helfen.
- Vor jeder Abnahme muss explizit geprüft werden, ob die markierte Stelle wirklich das erste Vorkommen des Begriffs auf der aktuellen Modulseite ist. Dazu werden alle markierten Wörter identifiziert und mit dem jeweiligen Vorkommen verglichen.

## Infoboxen

- Infoboxen dürfen für wichtige Nebenbegriffe genutzt werden. Das wird aber vom User erwähnt wenn das relevant ist oder eingebaut werden soll
- Orientierung: Die Info-Box für System.out.println beim Thema "Variablen" 

## Technische Regeln

- Das Teilprojekt bleibt statisch: `index.html`, `styles.css`, `app.js`.
- Keine externen Dependencies ohne ausdrückliche Entscheidung.
- Kein Build-Step, solange er nicht wirklich benötigt wird.

## Abnahme-Checkliste

Vor Abschluss einer Änderung:

- JavaScript-Syntaxcheck ausführen.
- Neue oder geänderte deutsche Texte auf Umlaut-Umschreibungen prüfen.
- Browser lokal starten und Seite laden.
- Desktop-Breite prüfen.
- Interaktion testen, wenn sich etwas an der jeweiligen Struktur geändert hat:
  - Modulwechsel (z. B. bei neuem oder geänderten Modulen)
  - Play-Symbol (z. B. bei Änderungen an der Darstellung o. ä.)
- Sicherstellen, dass keine Glossar-Markierungen in Codeblöcken erscheinen.
- Sicherstellen, dass keine Glossar-Markierungen in Quizblöcken erscheinen.
- Sicherstellen, dass Glossar-Markierungen bei der ERSTEN Verwendung eines Worts auftreten.
