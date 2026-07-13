# Vorstufe – Team Berichtsheft: von der Beschreibung zum eigenen Diagramm

## Euer Auftrag

Lest die Beschreibung unten. Erstellt daraus ein digitales UML-Klassendiagramm (zum Beispiel mit draw.io, PlantUML oder einem vergleichbaren Werkzeug), das **alle Elemente enthält, die in der Beschreibung vorkommen** – Klassen, Attribute, Methoden, Enums, ein Interface und die Beziehungen zwischen ihnen.

Niemand gibt euch Klassennamen, Attributtypen oder Sichtbarkeiten vor. Das entscheidet ihr selbst, anhand des Textes und der Konventionen in [UML-KONVENTIONEN.md](../UML-KONVENTIONEN.md). Wenn der Text nichts dazu sagt, entscheidet ihr im Team und könnt es begründen.

## Die Beschreibung

AzubiHub verwaltet drei Arten von Personen: Azubis, Ausbilder und BPU. Jede Person hat eine eindeutige Nummer, unter der sie im System geführt wird, sowie einen Vor- und einen Nachnamen. Diese drei Angaben werden beim Anlegen einer Person einmalig festgelegt; kein anderer Teil der Anwendung darf sie danach direkt verändern. Wer den vollständigen Namen einer Person braucht, bekommt ihn über eine eigene Abfrage, die Vor- und Nachname zusammensetzt.

Eine „Person ohne genauere Rolle" gibt es in AzubiHub nicht – es wird nie ein Personen-Objekt erzeugt, das nur eine Person und nichts Genaueres ist. Jede Person kann außerdem auf Nachfrage eine kurze Bezeichnung ihrer Rolle liefern, zum Beispiel „Azubi", „Ausbilder" oder „BPU". Wie genau diese Bezeichnung lautet, ist für jede der drei Rollen unterschiedlich – die Oberklasse kann dafür keine gemeinsame, sinnvolle Antwort vorgeben.

Ein Azubi hat zusätzlich zu den allgemeinen Personen-Angaben ein Ausbildungsjahr sowie eine Fachrichtung. Für die Fachrichtung gibt es bereits ein fertiges Enum namens `Fachrichtung` mit den Werten `ANWENDUNGSENTWICKLUNG`, `SYSTEMINTEGRATION` und `DATEN_UND_PROZESSANALYSE` – das müsst ihr nicht selbst modellieren, nur als vorhandenen Baustein einzeichnen. Ausbilder und BPU brauchen über die allgemeinen Personen-Angaben hinaus nichts Zusätzliches.

Azubis führen ein digitales Berichtsheft, und zwar wochenweise: Für jede Kalenderwoche entsteht ein eigener Berichtsheft-Eintrag. Es gibt drei Arten solcher Einträge – für Berufsschulwochen, für Praxiseinsatzwochen und für Seminar- oder Workshopwochen. Jede dieser drei Arten muss angeben können, um welche Art von Bericht es sich handelt (BERUFSSCHULE, PRAXISEINSATZ oder SEMINAR_WORKSHOP). Auch hier kann die gemeinsame Oberklasse aller drei Arten keine allgemeingültige Antwort geben – jede Art muss selbst sagen, welche sie ist.

Unabhängig von der Art hat jeder Berichtsheft-Eintrag eine fortlaufende Nummer, gehört zu genau einem bestimmten Azubi, bezieht sich auf ein bestimmtes Kalenderjahr und eine bestimmte Kalenderwoche und befindet sich in einem von mehreren möglichen Zuständen: ENTWURF, EINGEREICHT oder FREIGEGEBEN. Neu angelegte Berichtsheft-Einträge starten immer im Zustand ENTWURF. Diese Zustände sind für den Anfang bewusst auf drei reduziert; ein feinerer Ablauf kommt später dazu.

Es gibt einen wichtigen Unterschied zwischen den drei Arten: Nur bei Praxiseinsatzwochen muss der Bericht zusätzlich von einem BPU geprüft werden, bevor er beim Ausbilder landet. Bei Berufsschulwochen und bei Seminar-/Workshopwochen ist das nicht nötig. Jeder Berichtsheft-Eintrag muss deshalb auf Nachfrage sagen können, ob er eine solche zusätzliche Prüfung braucht – im Normalfall ist das nicht der Fall, nur die Praxiseinsatz-Variante weicht davon ab.

Zuletzt gibt es eine Anforderung, die nicht nur für Berichtshefte gilt, sondern für mehrere, inhaltlich völlig unterschiedliche Bereiche der Anwendung: Manche Objekte sollen unabhängig davon, worum es inhaltlich geht, auf dieselbe Art einen nachvollziehbaren Verlauf als Liste von Text-Zeilen ausgeben können. Berichtsheft-Einträge gehören dazu. Das bedeutet, es muss einen gemeinsamen Vertrag geben, den Berichtsheft-Einträge erfüllen, den aber auch völlig andere Klassen in anderen Teilen der Anwendung erfüllen können, ohne sonst etwas mit einem Berichtsheft zu tun zu haben.

## Worauf ihr besonders achten müsst

- Welche Klasse muss abstrakt sein? An welcher Formulierung im Text erkennt ihr das?
- Welche Methoden müssen abstrakt sein – und welche nicht, obwohl sie in mehreren Klassen unterschiedlich sein können?
- Wo braucht ihr ein Interface statt einer weiteren Vererbungsebene? Warum passt hier kein `extends`?
- Welche Attribute sind privat, welche Methoden public? Was sagt der Text über Zugriff von außen?
- Welche Klassen „kennen" andere Klassen als Attribut (Assoziation)? Sucht im Text nach Formulierungen wie „gehört zu", „bezieht sich auf", „wurde zugewiesen von".
- Welche Datentypen passen zu den beschriebenen Werten (Zahl, Text, Wahrheitswert, ein anderes Objekt, ein Enum)?
- Wo im Text gibt es eine feste, abgeschlossene Menge möglicher Werte statt eines freien Textes? Und wie genau ist dieser Wert an manchen Stellen im Text geschrieben – fällt euch etwas auf?

## Bonus: Multiplizitäten (optional)

Dieser Abschnitt ist nur für Teams, die mit dem Kernauftrag oben fertig sind. Lest dazu [UML-KONVENTIONEN.md](../UML-KONVENTIONEN.md#bonus-multiplizitäten), falls ihr Multiplizitäten noch nicht kennt.

Ein einzelner Berichtsheft-Eintrag gehört immer zu genau einem Azubi – zwei Azubis teilen sich nie denselben Eintrag. Umgekehrt hat ein neu angelegter Azubi zunächst noch keinen einzigen Berichtsheft-Eintrag, sammelt aber im Laufe seiner Ausbildung beliebig viele.

Ergänzt an eurem Assoziationspfeil zwischen `Berichtsheft` und `Azubi` auf beiden Seiten die passende Multiplizität.

---

Druckt euer fertiges Diagramm auf A3 aus.
