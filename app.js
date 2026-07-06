const modules = [
  {
    id: "variables",
    number: "01",
    title: "Variablen",
    subtitle: "Werte benennen und wiederverwenden",
    concepts: [
      "Eine Variable ist ein benannter Speicherplatz für einen Wert.",
      "Für eine Ausbildungsgruppe können Werte wie Vorname, Lehrjahr, Anwesenheit oder eine Note gespeichert werden.",
      "In Java hat jede Variable einen Datentyp, zum Beispiel int, double oder String.",
      "Mit dem Gleichheitszeichen wird ein Wert zugewiesen. Das ist keine mathematische Gleichung.",
      "Ein guter Variablenname beschreibt, was gespeichert wird."
    ],
    explanation: [
      {
        heading: "Java-Regel",
        text: "Java will beim Anlegen wissen, welche Art von Wert gespeichert wird. Deshalb schreiben wir zuerst den Typ und dann den Namen."
      }
    ],
    examples: [
      {
        title: "Vorname als Text",
        code: `// Frau Kaya notiert zuerst den Vornamen eines Azubis.\n// Der Name soll später wiederverwendet werden können.\nString firstName = "Maya";\nSystem.out.println(firstName);`,
        output: "Maya",
        info: {
          title: "Was macht System.out.println?",
          body: [
            "`System.out.println(...)` schreibt etwas in die Konsole.",
            "Alles, was zwischen den Klammern steht, wird ausgegeben. Das kann ein fester Text sein oder der Inhalt einer Variable.",
            "Warum heißt es nicht einfach `println`? Java organisiert Befehle in Klassen und Objekten. `System` ist eine eingebaute Java-Klasse, `out` ist der Ausgabekanal zur Konsole und `println` ist die Methode, die auf diesem Ausgabekanal Text ausgibt.",
            "`println` bedeutet: ausgeben und danach in die nächste Zeile springen."
          ]
        },
        infoBlocks: [
          {
            title: "Wofür stehen die Anführungszeichen?",
            body: [
              "Anführungszeichen markieren in Java einen festen Textwert. `\"Maya\"` bedeutet: Genau dieser Name soll gespeichert oder ausgegeben werden.",
              "Du brauchst Anführungszeichen, wenn du Text direkt in den Code schreibst: `String firstName = \"Maya\";`.",
              "Du brauchst keine Anführungszeichen, wenn du den Wert aus einer Variable verwendest: `System.out.println(firstName);`. Dann nimmt Java den Inhalt, der unter dem Namen `firstName` gespeichert ist.",
              "Zahlen und Wahrheitswerte stehen ohne Anführungszeichen: `int trainingYear = 1;` und `boolean presentToday = true;`."
            ]
          },
          {
            title: "Wie sind Anweisungen aufgebaut?",
            body: [
              "`String firstName = \"Maya\";` legt eine neue Variable an. `String` ist der Datentyp, `firstName` ist der Name und `\"Maya\"` ist der gespeicherte Wert.",
              "`System.out.println(firstName);` legt nichts Neues an. Diese Anweisung ruft eine Methode auf und übergibt ihr `firstName`, damit der gespeicherte Wert ausgegeben wird.",
              "Beide Zeilen sind Anweisungen und enden mit einem Semikolon. Die erste speichert Daten, die zweite benutzt Daten."
            ]
          }
        ]
      },
      {
        title: "Lehrjahr als ganze Zahl",
        code: `// Das Lehrjahr ist eine ganze Zahl.\n// Maya ist aktuell im ersten Lehrjahr.\nint trainingYear = 1;\nSystem.out.println(trainingYear);`,
        output: "1"
      },
      {
        title: "Wert später ändern",
        code: `// Eine Note kann sich ändern, wenn eine neue Bewertung vorliegt.\n// Die Variable bleibt gleich, nur der gespeicherte Wert wird ersetzt.\ndouble lastGrade = 2.3;\nlastGrade = 2.0;\nSystem.out.println(lastGrade);`,
        output: "2.0"
      }
    ],
    quiz: [
      {
        question: "Welche Aussage beschreibt eine Variable am besten?",
        options: [
          "Ein benannter Speicherplatz für einen Wert",
          "Ein Fehler im Programm",
          "Eine Datei im Projekt",
          "Ein Java-Installationsordner"
        ],
        correct: 0,
        explanation: "Eine Variable speichert einen Wert unter einem Namen."
      },
      {
        question: "Was beschreibt die Zeile `int trainingYear = 1;` fachlich am besten?",
        options: [
          "Eine Zahlvariable wird angelegt und bekommt den Wert 1",
          "Ein Text wird ausgegeben",
          "Ein neues Projekt wird erstellt",
          "Eine Schleife wird gestartet"
        ],
        correct: 0,
        explanation: "`int` ist der Datentyp für ganze Zahlen."
      }
    ],
    completion: {
      prompt: "Vervollständige den Code, sodass Vorname und Lehrjahr eines Azubis gespeichert werden.",
      parts: [
        { text: "" },
        { blank: "nameType", answers: ["String"] },
        { text: " firstName = \"Maya\";\n" },
        { blank: "yearType", answers: ["int"] },
        { text: " trainingYear = 1;\nSystem.out.println(firstName);\nSystem.out.println(trainingYear);" }
      ],
      output: "Maya\n1"
    }
  },
  {
    id: "data-types",
    number: "02",
    title: "Datentypen",
    subtitle: "Einfache Werte unterscheiden",
    concepts: [
      "Einfache Datentypen speichern einzelne Werte, zum Beispiel int, double oder boolean.",
      "String ist ein Texttyp und wird im Einsteigerkurs wie ein einfacher Wert benutzt.",
      "boolean ist ein Wahrheitswert (wahr/falsch).",
      "Der Datentyp hilft Java, Fehler früh zu erkennen."
    ],
    explanation: [
      {
        heading: "Einfache Datentypen",
        text: "Ein einfacher Datentyp steht für einen einzelnen Wert: einen Text, eine ganze Zahl, eine Kommazahl oder einen Wahrheitswert (wahr/falsch)."
      }
    ],
    examples: [
      {
        title: "Einfache Datentypen",
        code: `// Für einen Azubi gibt es unterschiedliche Arten von Informationen.\n// Jede Variable bekommt den Datentyp, der zu ihrem Wert passt.\nString firstName = "Maya";\nint trainingYear = 1;\ndouble lastGrade = 2.3;\nboolean presentToday = true;\n\nSystem.out.println(firstName);\nSystem.out.println(trainingYear);\nSystem.out.println(lastGrade);\nSystem.out.println(presentToday);`,
        output: "Maya\n1\n2.3\ntrue"
      },
      {
        title: "Wahrheitswert für Anwesenheit",
        code: `// Anwesenheit hat nur zwei sinnvolle Zustände: wahr oder falsch.\n// false bedeutet hier: Der Azubi ist heute nicht da.\nboolean presentToday = false;\nSystem.out.println(presentToday);`,
        output: "false"
      },
      {
        title: "Kommazahl für eine Note",
        code: `// Noten können Nachkommastellen haben.\n// Deshalb passt hier ein Datentyp für Kommazahlen.\ndouble lastGrade = 2.3;\nSystem.out.println(lastGrade);`,
        output: "2.3"
      }
    ],
    quiz: [
      {
        question: "Welche Art von Datentyp braucht man für eine Information mit nur zwei Zuständen?",
        options: ["boolean", "int", "String", "double"],
        correct: 0,
        explanation: "`boolean` speichert true oder false."
      },
      {
        question: "Welche Art von Datentyp passt zu einer Zahl mit Nachkommastelle?",
        options: ["double", "boolean", "String", "int"],
        correct: 0,
        explanation: "`double` speichert Kommazahlen."
      }
    ],
    completion: {
      prompt: "Wähle passende Datentypen für einen Azubi in der Ausbildungsgruppe.",
      parts: [
        { blank: "year", answers: ["int"] },
        { text: " trainingYear = 1;\n" },
        { blank: "present", answers: ["boolean"] },
        { text: " presentToday = true;\n" },
        { blank: "name", answers: ["String"] },
        { text: " firstName = \"Maya\";\n" },
        { blank: "grade", answers: ["double"] },
        { text: " lastGrade = 2.3;" }
      ],
      output: "1\ntrue\nMaya\n2.3"
    }
  },
  {
    id: "control-flow",
    number: "03",
    title: "Kontrollstrukturen",
    subtitle: "Bedingungen und Fallunterscheidung",
    concepts: [
      "Anweisungen werden normalerweise von oben nach unten ausgeführt.",
      "Mit if/else kann Code nur unter bestimmten Bedingungen laufen, zum Beispiel wenn ein Azubi heute anwesend ist.",
      "Mit Zahlenvergleichen kann die Ausbilderin einfache Regeln zu Noten prüfen.",
      "Mit switch kann man mehrere feste Fälle übersichtlich unterscheiden, zum Beispiel das Lehrjahr."
    ],
    explanation: [
      {
        heading: "Bedingung",
        text: "Eine Bedingung entscheidet, welcher Code ausgeführt wird. Beispiel: Wenn ein Azubi heute anwesend ist, kann die Ausbilderin ihn für die Tagesübung einplanen."
      },
      {
        heading: "Fallunterscheidung",
        text: "Eine Fallunterscheidung ist nützlich, wenn für Lehrjahr 1, 2 und 3 unterschiedliche Hinweise gelten."
      }
    ],
    examples: [
      {
        title: "if/else",
        code: `// Frau Kaya entscheidet anhand der Anwesenheit,\n// ob Maya heute für die Tagesübung eingeplant wird.\nboolean presentToday = true;\n\nif (presentToday) {\n    System.out.println("Für die Tagesübung einplanen");\n} else {\n    System.out.println("Abwesenheit notieren");\n}`,
        output: "Für die Tagesübung einplanen"
      },
      {
        title: "Zahlenvergleich",
        code: `// Frau Kaya prüft eine Note mit einem Zahlenvergleich.\n// Eine Note schlechter als 4.0 soll Unterstützung auslösen.\ndouble lastGrade = 4.3;\n\nif (lastGrade > 4.0) {\n    System.out.println("Unterstützung einplanen");\n} else {\n    System.out.println("Weiter selbstständig üben");\n}`,
        output: "Unterstützung einplanen"
      },
      {
        title: "switch",
        code: `// Je nach Lehrjahr gibt Frau Kaya einen anderen Hinweis.\n// Der Pfeil -> verbindet den passenden Fall mit der auszuführenden Anweisung.\nint trainingYear = 1;\n\nswitch (trainingYear) {\n    case 1 -> System.out.println("Grundlagen festigen");\n    case 2 -> System.out.println("Projektarbeit vorbereiten");\n    case 3 -> System.out.println("Prüfungsvorbereitung starten");\n    default -> System.out.println("Lehrjahr prüfen");\n}`,
        output: "Grundlagen festigen",
        info: {
          title: "Was bedeutet der Pfeil ->?",
          body: [
            "Der Pfeil `->` gehört zur modernen switch-Schreibweise in Java.",
            "Links steht der Fall, zum Beispiel `case 1`. Rechts vom Pfeil steht, was Java ausführen soll, wenn dieser Fall passt.",
            "`case 1 -> System.out.println(\"Grundlagen festigen\");` heißt also: Wenn der Wert 1 ist, führe diese Ausgabe aus."
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Was braucht ein Programm, wenn ein Codeabschnitt nur bei erfüllter Bedingung laufen soll?",
        options: ["if", "for", "class", "String"],
        correct: 0,
        explanation: "`if` prüft eine Bedingung."
      },
      {
        question: "Welche Prüfung erkennt eine Note schlechter als 4.0?",
        options: ["lastGrade > 4.0", "lastGrade = 4.0", "String lastGrade", "class lastGrade"],
        correct: 0,
        explanation: "`>` prüft, ob die linke Zahl größer als die rechte Zahl ist."
      },
      {
        question: "Was leistet switch besonders gut?",
        options: [
          "Mehrere feste Fälle unterscheiden",
          "Eine Variable speichern",
          "Eine externe Bibliothek laden",
          "Java installieren"
        ],
        correct: 0,
        explanation: "`switch` ist praktisch für feste Auswahlwerte wie Lehrjahr 1, 2 oder 3."
      }
    ],
    completion: {
      prompt: "Vervollständige die Anwesenheitsprüfung und die Lehrjahr-Fallunterscheidung.",
      parts: [
        { text: "boolean presentToday = true;\n\n" },
        { blank: "ifKeyword", answers: ["if"] },
        { text: " (presentToday) {\n    System.out.println(\"Für die Tagesübung einplanen\");\n}\n\nint trainingYear = 1;\n\n" },
        { blank: "switchKeyword", answers: ["switch"] },
        { text: " (trainingYear) {\n    case 1 -> System.out.println(\"Grundlagen festigen\");\n    default -> System.out.println(\"Lehrjahr prüfen\");\n}" }
      ],
      output: "Für die Tagesübung einplanen\nGrundlagen festigen"
    }
  },
  {
    id: "arrays",
    number: "04",
    title: "Arrays",
    subtitle: "Mehrere Werte zusammen speichern",
    concepts: [
      "Ein Array speichert mehrere Werte desselben Datentyps unter einem Namen.",
      "In der Ausbildungsgruppe können zum Beispiel mehrere Azubi-Namen in einem String-Array stehen.",
      "Die Positionen in einem Array beginnen bei 0.",
      "Mit length kann Java erkennen, wie viele Werte im Array liegen."
    ],
    explanation: [
      {
        heading: "Warum jetzt Arrays?",
        text: "Bisher haben wir einen einzelnen Azubi betrachtet. Eine Ausbildungsgruppe besteht aber aus mehreren Azubis. Dafür ist ein Array der nächste Schritt."
      },
      {
        heading: "Java-Regel",
        text: "Bei einem Array steht der Datentyp mit eckigen Klammern vor dem Namen. Ein String-Array heißt zum Beispiel String[]."
      }
    ],
    examples: [
      {
        title: "Mehrere Azubi-Namen",
        code: `// Ab jetzt betrachten wir die Ausbildungsgruppe als mehrere Werte.\n// Die Namen stehen gemeinsam in einem Array.\nString[] apprenticeNames = {"Maya", "Noah", "Lea"};\nSystem.out.println(apprenticeNames[0]);\nSystem.out.println(apprenticeNames[1]);\nSystem.out.println(apprenticeNames[2]);`,
        output: "Maya\nNoah\nLea",
        info: {
          title: "Warum startet das Array bei 0?",
          body: [
            "Java zählt Array-Positionen ab 0.",
            "`apprenticeNames[0]` ist also der erste Name, `apprenticeNames[1]` der zweite Name und `apprenticeNames[2]` der dritte Name.",
            "Das wirkt am Anfang ungewohnt, ist in vielen Programmiersprachen aber normal."
          ]
        }
      },
      {
        title: "Anzahl der Azubis",
        code: `// Frau Kaya möchte wissen, wie viele Namen im Array stehen.\n// length liefert die Anzahl der gespeicherten Werte.\nString[] apprenticeNames = {"Maya", "Noah", "Lea"};\nSystem.out.println(apprenticeNames.length);`,
        output: "3"
      },
      {
        title: "Letzte drei Noten als Array",
        code: `// Auch gleichartige Zahlenwerte können zusammen gespeichert werden.\n// Hier stehen Mayas letzte drei Noten in einem Array.\ndouble[] lastGrades = {2.0, 2.3, 1.7};\nSystem.out.println(lastGrades[0]);\nSystem.out.println(lastGrades[1]);\nSystem.out.println(lastGrades[2]);`,
        output: "2.0\n2.3\n1.7"
      }
    ],
    quiz: [
      {
        question: "Was speichert `String[] apprenticeNames`?",
        options: [
          "Mehrere Textwerte unter einem Namen",
          "Genau eine Kommazahl",
          "Eine einzelne Bedingung",
          "Einen Java-Installationspfad"
        ],
        correct: 0,
        explanation: "`String[]` ist ein Array für mehrere Textwerte."
      },
      {
        question: "Welcher Zugriff liest den ersten Wert aus einem Array?",
        options: ["names[0]", "names[1]", "names[3]", "names.first"],
        correct: 0,
        explanation: "Arrays starten in Java bei Position 0."
      }
    ],
    completion: {
      prompt: "Vervollständige den Code, sodass drei Azubi-Namen in einem Array gespeichert werden.",
      parts: [
        { text: "" },
        { blank: "arrayType", answers: ["String[]"] },
        { text: " apprenticeNames = {\"Maya\", \"Noah\", \"Lea\"};\nSystem.out.println(apprenticeNames[" },
        { blank: "firstIndex", answers: ["0"] },
        { text: "]);\nSystem.out.println(apprenticeNames.length);" }
      ],
      output: "Maya\n3"
    }
  },
  {
    id: "loops",
    number: "05",
    title: "Schleifen",
    subtitle: "Gruppendaten nacheinander verarbeiten",
    concepts: [
      "Eine Schleife wiederholt Code automatisch.",
      "Mit einer for-Schleife kann Java alle Namen einer Ausbildungsgruppe nacheinander durchgehen.",
      "Eine for-each-Schleife passt gut, wenn jeder Wert eines Arrays verarbeitet werden soll.",
      "Der Schleifenrumpf steht in geschweiften Klammern."
    ],
    explanation: [
      {
        heading: "Warum jetzt Schleifen?",
        text: "Im Array stehen mehrere Azubi-Namen. Ohne Schleife müssten wir für jeden Namen eine eigene Ausgabezeile schreiben."
      },
      {
        heading: "Java-Regel",
        text: "Bei for-each steht links eine Variable für den aktuellen Wert und rechts das Array, das durchlaufen wird."
      }
    ],
    examples: [
      {
        title: "Alle Namen ausgeben",
        code: `// Frau Kaya möchte nicht für jeden Namen eine eigene Ausgabezeile schreiben.\n// Die Schleife geht die Namen automatisch nacheinander durch.\nString[] apprenticeNames = {"Maya", "Noah", "Lea"};\n\nfor (String name : apprenticeNames) {\n    System.out.println(name);\n}`,
        output: "Maya\nNoah\nLea"
      },
      {
        title: "Anwesende zählen",
        code: `// Für jeden Azubi steht ein Wahrheitswert im Array.\n// Die Schleife zählt, wie oft true vorkommt.\nboolean[] presentToday = {true, false, true};\nint presentCount = 0;\n\nfor (boolean present : presentToday) {\n    if (present) {\n        presentCount = presentCount + 1;\n    }\n}\n\nSystem.out.println(presentCount);`,
        output: "2"
      },
      {
        title: "Notendurchschnitt berechnen",
        code: `// Aus den letzten drei Noten soll ein Durchschnitt entstehen.\n// Dafür werden erst alle Noten aufsummiert.\ndouble[] lastGrades = {2.0, 2.3, 1.7};\ndouble sum = 0.0;\n\nfor (double grade : lastGrades) {\n    sum = sum + grade;\n}\n\nSystem.out.println(sum / lastGrades.length);`,
        output: "2.0"
      },
      {
        title: "Mit Positionen arbeiten",
        code: `// Manchmal ist nicht nur der Wert interessant, sondern auch seine Position.\n// Der index läuft von 0 bis zur letzten gültigen Array-Position.\nString[] apprenticeNames = {"Maya", "Noah", "Lea"};\n\nfor (int index = 0; index < apprenticeNames.length; index = index + 1) {\n    System.out.println(index);\n    System.out.println(apprenticeNames[index]);\n}`,
        output: "0\nMaya\n1\nNoah\n2\nLea"
      }
    ],
    quiz: [
      {
        question: "Warum ist eine Schleife bei einer Ausbildungsgruppe nützlich?",
        options: [
          "Weil sie denselben Arbeitsschritt für mehrere Azubis wiederholen kann",
          "Weil sie Java installiert",
          "Weil sie nur einen einzelnen Wert speichern kann",
          "Weil sie Anführungszeichen ersetzt"
        ],
        correct: 0,
        explanation: "Eine Schleife wiederholt Code für mehrere Werte."
      },
      {
        question: "Was passiert mit der Schleifenvariable in einer for-each-Schleife?",
        options: [
          "name steht nacheinander für jeden Wert im Array apprenticeNames",
          "name ist immer nur der erste Wert",
          "apprenticeNames wird gelöscht",
          "String wird in int umgewandelt"
        ],
        correct: 0,
        explanation: "Die Variable links nimmt nacheinander die Werte aus dem Array rechts an."
      }
    ],
    completion: {
      prompt: "Vervollständige die Schleife, sodass alle Namen der Ausbildungsgruppe ausgegeben werden.",
      parts: [
        { text: "String[] apprenticeNames = {\"Maya\", \"Noah\", \"Lea\"};\n\n" },
        { blank: "forKeyword", answers: ["for"] },
        { text: " (" },
        { blank: "valueType", answers: ["String"] },
        { text: " name : apprenticeNames) {\n    System.out.println(name);\n}" }
      ],
      output: "Maya\nNoah\nLea"
    }
  },
  {
    id: "lists",
    number: "06",
    title: "Listen",
    subtitle: "Eine Gruppe flexibel erweitern",
    concepts: [
      "Eine Liste kann wachsen, wenn neue Werte hinzukommen.",
      "ArrayList ist eine häufige Listenklasse in Java.",
      "Mit add wird ein neuer Wert an die Liste angehängt.",
      "Mit size kann Java erkennen, wie viele Werte aktuell in der Liste stehen."
    ],
    explanation: [
      {
        heading: "Warum jetzt Listen?",
        text: "Ein Array hat eine feste Größe. Eine Ausbildungsgruppe kann sich aber verändern, wenn ein Azubi dazukommt oder die Gruppe wechselt."
      },
      {
        heading: "Java-Regel",
        text: "Für ArrayList brauchen wir einen Import. In den spitzen Klammern steht, welche Art von Werten die Liste speichern soll."
      }
    ],
    examples: [
      {
        title: "Namen hinzufügen",
        code: `// Die Gruppe soll flexibel wachsen können.\n// Deshalb werden Namen nacheinander in eine ArrayList eingefügt.\nimport java.util.ArrayList;\n\nArrayList<String> apprenticeNames = new ArrayList<>();\napprenticeNames.add("Maya");\napprenticeNames.add("Noah");\napprenticeNames.add("Lea");\n\nSystem.out.println(apprenticeNames.size());`,
        output: "3",
        info: {
          title: "Was bedeutet import?",
          body: [
            "`ArrayList` gehört nicht zu den ganz einfachen Java-Bausteinen, die ohne Vorbereitung bereitstehen.",
            "Mit `import java.util.ArrayList;` sagen wir Java, aus welchem Paket diese Klasse kommt.",
            "Die Codeblöcke hier sind weiterhin vereinfachte Beispiele und werden nur simuliert ausgeführt."
          ]
        }
      },
      {
        title: "Einzelnen Namen lesen",
        code: `// Auch Listen haben Positionen, die bei 0 beginnen.\n// get(1) liest hier den zweiten gespeicherten Namen.\nimport java.util.ArrayList;\n\nArrayList<String> apprenticeNames = new ArrayList<>();\napprenticeNames.add("Maya");\napprenticeNames.add("Noah");\n\nSystem.out.println(apprenticeNames.get(1));`,
        output: "Noah"
      },
      {
        title: "Liste mit Schleife ausgeben",
        code: `// Eine Liste kann wie ein Array mit einer Schleife durchlaufen werden.\n// Jeder Name wird dabei nacheinander ausgegeben.\nimport java.util.ArrayList;\n\nArrayList<String> apprenticeNames = new ArrayList<>();\napprenticeNames.add("Maya");\napprenticeNames.add("Noah");\napprenticeNames.add("Lea");\n\nfor (String name : apprenticeNames) {\n    System.out.println(name);\n}`,
        output: "Maya\nNoah\nLea"
      },
      {
        title: "Noten flexibel sammeln",
        code: `// Wenn später weitere Noten dazukommen, ist eine Liste praktischer als ein festes Array.\n// Die size-Abfrage zeigt, wie viele Noten aktuell gespeichert sind.\nimport java.util.ArrayList;\n\nArrayList<Double> lastGrades = new ArrayList<>();\nlastGrades.add(2.0);\nlastGrades.add(2.3);\nlastGrades.add(1.7);\n\nSystem.out.println(lastGrades.size());`,
        output: "3"
      }
    ],
    quiz: [
      {
        question: "Warum passt eine ArrayList gut für eine Ausbildungsgruppe?",
        options: [
          "Weil neue Azubi-Namen hinzugefügt werden können",
          "Weil sie nur genau einen Wert speichern darf",
          "Weil sie keine Datentypen braucht",
          "Weil sie Bedingungen ersetzt"
        ],
        correct: 0,
        explanation: "Eine ArrayList kann wachsen, wenn neue Werte hinzukommen."
      },
      {
        question: "Welche Zeile fügt einer Liste einen neuen Namen hinzu?",
        options: ["apprenticeNames.add(\"Maya\");", "apprenticeNames.size();", "String apprenticeNames;", "if (apprenticeNames)"],
        correct: 0,
        explanation: "Mit add wird ein neuer Wert an eine ArrayList angehängt."
      }
    ],
    completion: {
      prompt: "Vervollständige den Code, sodass eine flexible Liste mit Azubi-Namen entsteht.",
      parts: [
        { text: "import java.util.ArrayList;\n\n" },
        { blank: "listType", answers: ["ArrayList"] },
        { text: "<String> apprenticeNames = new ArrayList<>();\napprenticeNames." },
        { blank: "addMethod", answers: ["add"] },
        { text: "(\"Maya\");\napprenticeNames.add(\"Noah\");\nSystem.out.println(apprenticeNames.size());" }
      ],
      output: "2"
    }
  },
  {
    id: "methods",
    number: "07",
    title: "Methoden",
    subtitle: "Wiederkehrende Aufgaben benennen",
    concepts: [
      "Eine Methode ist ein benannter Codeblock, der eine bestimmte Aufgabe übernimmt.",
      "Parameter bringen Werte in eine Methode hinein.",
      "Mit return kann eine Methode ein Ergebnis zurückgeben.",
      "Methoden helfen, Gruppenaufgaben wie Anwesenheit zählen oder Noten prüfen wiederzuverwenden."
    ],
    explanation: [
      {
        heading: "Warum jetzt Methoden?",
        text: "Bei Arrays, Schleifen und Listen entstehen wiederkehrende Aufgaben. Frau Kaya möchte nicht jedes Mal denselben Code neu schreiben, sondern Aufgaben klar benennen."
      },
      {
        heading: "Java-Regel",
        text: "Eine Methode hat einen Rückgabetyp, einen Namen, runde Klammern für Parameter und einen Codeblock in geschweiften Klammern."
      }
    ],
    examples: [
      {
        title: "Azubi ausgeben",
        code: `// Frau Kaya möchte dieselbe Ausgabe für verschiedene Azubis nutzen.\n// Die Methode bekommt Name und Lehrjahr als Parameter.\nstatic void printApprentice(String firstName, int trainingYear) {\n    System.out.println(firstName);\n    System.out.println(trainingYear);\n}\n\nprintApprentice("Maya", 1);`,
        output: "Maya\n1",
        info: {
          title: "Warum steht hier static?",
          body: [
            "Die Beispiele sind kurze Ausschnitte, damit der Fokus auf der Methode bleibt.",
            "`static` sorgt hier dafür, dass die Methode direkt aufgerufen werden kann. Klassen und Objekte schauen wir im nächsten Modul genauer an."
          ]
        }
      },
      {
        title: "Anwesende zählen",
        code: `// Die Anwesenheiten stehen bereits als Array bereit.\n// Die Methode zählt, wie viele Werte true sind.\nstatic int countPresent(boolean[] presentToday) {\n    int count = 0;\n\n    for (boolean present : presentToday) {\n        if (present) {\n            count = count + 1;\n        }\n    }\n\n    return count;\n}\n\nboolean[] presentToday = {true, false, true};\nSystem.out.println(countPresent(presentToday));`,
        output: "2"
      },
      {
        title: "Note prüfen",
        code: `// Eine einfache Regel bekommt einen eigenen Namen.\n// Dadurch liest sich der spätere Code fachlicher.\nstatic boolean needsSupport(double lastGrade) {\n    return lastGrade > 4.0;\n}\n\nSystem.out.println(needsSupport(4.3));`,
        output: "true"
      },
      {
        title: "Durchschnitt berechnen",
        code: `// Die letzten drei Noten werden an die Methode übergeben.\n// Das Ergebnis kommt mit return zurück.\nstatic double averageGrade(double[] lastGrades) {\n    double sum = 0.0;\n\n    for (double grade : lastGrades) {\n        sum = sum + grade;\n    }\n\n    return sum / lastGrades.length;\n}\n\ndouble[] lastGrades = {2.0, 2.3, 1.7};\nSystem.out.println(averageGrade(lastGrades));`,
        output: "2.0"
      }
    ],
    quiz: [
      {
        question: "Wofür ist eine Methode besonders nützlich?",
        options: [
          "Um eine wiederkehrende Aufgabe unter einem Namen zu sammeln",
          "Um Java ohne Datentypen zu schreiben",
          "Um einen Array-Index bei 1 starten zu lassen",
          "Um eine Datei automatisch zu speichern"
        ],
        correct: 0,
        explanation: "Eine Methode bündelt Code für eine klar benannte Aufgabe."
      },
      {
        question: "Welche Aufgabe haben Parameter?",
        options: [
          "Sie geben Werte in eine Methode hinein",
          "Sie löschen eine Liste",
          "Sie ersetzen geschweifte Klammern",
          "Sie starten den Browser neu"
        ],
        correct: 0,
        explanation: "Parameter sind Platzhalter für Werte, mit denen eine Methode arbeiten soll."
      },
      {
        question: "Was bedeutet return in einer Methode?",
        options: [
          "Die Methode gibt ein Ergebnis zurück",
          "Die Methode wird in eine Liste umgewandelt",
          "Die Methode darf keine Parameter haben",
          "Die Methode wird aus dem Projekt entfernt"
        ],
        correct: 0,
        explanation: "`return` liefert ein Ergebnis an die aufrufende Stelle zurück."
      }
    ],
    completion: {
      prompt: "Vervollständige die Methode, die eine Note auf Unterstützungsbedarf prüft.",
      parts: [
        { text: "static " },
        { blank: "returnType", answers: ["boolean"] },
        { text: " needsSupport(double lastGrade) {\n    " },
        { blank: "returnKeyword", answers: ["return"] },
        { text: " lastGrade > 4.0;\n}\n\nSystem.out.println(needsSupport(4.3));" }
      ],
      output: "true"
    }
  },
  {
    id: "classes",
    number: "08",
    title: "Klassen",
    subtitle: "Ein Azubi als eigenes Modell",
    concepts: [
      "Eine Klasse ist ein Bauplan für zusammengehörige Daten.",
      "Die Werte eines Azubis gehören fachlich zusammen: Vorname, Lehrjahr, Anwesenheit und letzte Noten.",
      "Ein Feld (Attribut) ist eine Variable, die zu einer Klasse gehört.",
      "Mit new entsteht aus einer Klasse ein konkretes Objekt."
    ],
    explanation: [
      {
        heading: "Warum jetzt Klassen?",
        text: "Bisher lagen die Werte eines Azubis lose nebeneinander. Mit einer Klasse kann Java ausdrücken, dass diese Werte zusammen ein Modell für einen Azubi bilden."
      },
      {
        heading: "Java-Regel",
        text: "Eine Klasse beginnt mit class und einem Namen. Im Klassenblock stehen Felder (Attribute) und später auch Methoden, die zu diesem Modell gehören."
      }
    ],
    examples: [
      {
        title: "Azubi-Klasse anlegen",
        code: `// Die Klasse beschreibt, welche Daten ein Azubi haben kann.\n// Noch werden die Felder (Attribute) bewusst einfach gehalten.\nclass Apprentice {\n    String firstName;\n    int trainingYear;\n    boolean presentToday;\n    double[] lastGrades;\n}`,
        output: "Keine Ausgabe",
        info: {
          title: "Warum gibt es hier keine Ausgabe?",
          body: [
            "Eine Klasse ist zuerst nur ein Bauplan.",
            "Erst wenn ein Objekt erzeugt und verwendet wird, entstehen konkrete Werte, die ausgegeben werden können."
          ]
        }
      },
      {
        title: "Objekt erzeugen",
        code: `// Aus dem Bauplan entsteht ein konkreter Azubi.\n// Danach werden die Felder (Attribute) mit Werten gefüllt.\nclass Apprentice {\n    String firstName;\n    int trainingYear;\n    boolean presentToday;\n    double[] lastGrades;\n}\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.trainingYear = 1;\nmaya.presentToday = true;\nmaya.lastGrades = new double[] {2.0, 2.3, 1.7};\n\nSystem.out.println(maya.firstName);`,
        output: "Maya"
      },
      {
        title: "Methode in der Klasse",
        code: `// Eine Klasse kann auch Verhalten enthalten.\n// Diese Methode prüft die letzte bekannte Note des Azubis.\nclass Apprentice {\n    String firstName;\n    double lastGrade;\n\n    boolean needsSupport() {\n        return lastGrade > 4.0;\n    }\n}\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.lastGrade = 4.3;\n\nSystem.out.println(maya.needsSupport());`,
        output: "true"
      }
    ],
    quiz: [
      {
        question: "Was beschreibt eine Klasse in Java?",
        options: [
          "Einen Bauplan für zusammengehörige Daten und Verhalten",
          "Nur eine einzelne Zahl",
          "Eine fertige Konsolenausgabe",
          "Eine automatisch sortierte Liste"
        ],
        correct: 0,
        explanation: "Eine Klasse beschreibt, welche Daten und welches Verhalten ein Objekt haben kann."
      },
      {
        question: "Warum passt eine Klasse gut zu einem Azubi?",
        options: [
          "Weil mehrere fachlich zusammengehörige Werte gebündelt werden",
          "Weil dadurch keine Variablen mehr gebraucht werden",
          "Weil Noten dann keine Zahlen mehr sind",
          "Weil Arrays dadurch bei 1 beginnen"
        ],
        correct: 0,
        explanation: "Vorname, Lehrjahr, Anwesenheit und Noten gehören fachlich zu einem Azubi."
      },
      {
        question: "Was entsteht mit new?",
        options: [
          "Ein konkretes Objekt aus einer Klasse",
          "Ein neuer Datentyp für wahr/falsch",
          "Eine neue if-Bedingung",
          "Ein automatischer Test"
        ],
        correct: 0,
        explanation: "`new` erzeugt ein konkretes Objekt aus dem Bauplan der Klasse."
      }
    ],
    completion: {
      prompt: "Vervollständige die Klasse für einen Azubi mit Vorname und Lehrjahr.",
      parts: [
        { text: "" },
        { blank: "classKeyword", answers: ["class"] },
        { text: " Apprentice {\n    " },
        { blank: "nameType", answers: ["String"] },
        { text: " firstName;\n    " },
        { blank: "yearType", answers: ["int"] },
        { text: " trainingYear;\n}" }
      ],
      output: "Keine Ausgabe"
    }
  },
  {
    id: "object-lists",
    number: "09",
    title: "Objekte in Listen",
    subtitle: "Die Gruppe aus echten Azubis",
    concepts: [
      "Eine Liste kann nicht nur Strings speichern, sondern auch Objekte.",
      "Mit ArrayList<Apprentice> entsteht eine flexible Liste von Azubis.",
      "Jedes Objekt in der Liste hat eigene Feldwerte (Attributwerte).",
      "Mit einer Schleife kann Java alle Azubi-Objekte der Gruppe durchgehen."
    ],
    explanation: [
      {
        heading: "Warum jetzt Objekte in Listen?",
        text: "Eine reine Namensliste reicht nicht mehr aus. Frau Kaya möchte pro Azubi mehrere Informationen speichern und trotzdem die ganze Gruppe durchgehen können."
      },
      {
        heading: "Java-Regel",
        text: "In den spitzen Klammern einer ArrayList steht der Typ der gespeicherten Werte. Bei ArrayList<Apprentice> sind die Werte keine Texte, sondern Azubi-Objekte."
      }
    ],
    examples: [
      {
        title: "Azubis in eine Liste legen",
        code: `// Die Gruppe besteht jetzt aus echten Azubi-Objekten.\n// Jedes Objekt bekommt eigene Werte.\nimport java.util.ArrayList;\n\nclass Apprentice {\n    String firstName;\n    int trainingYear;\n}\n\nArrayList<Apprentice> apprentices = new ArrayList<>();\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.trainingYear = 1;\napprentices.add(maya);\n\nApprentice noah = new Apprentice();\nnoah.firstName = "Noah";\nnoah.trainingYear = 2;\napprentices.add(noah);\n\nSystem.out.println(apprentices.size());`,
        output: "2"
      },
      {
        title: "Objekte ausgeben",
        code: `// Die Schleife läuft über Azubi-Objekte statt über einzelne Namen.\n// Pro Objekt kann auf die Felder (Attribute) zugegriffen werden.\nimport java.util.ArrayList;\n\nclass Apprentice {\n    String firstName;\n    int trainingYear;\n}\n\nArrayList<Apprentice> apprentices = new ArrayList<>();\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.trainingYear = 1;\napprentices.add(maya);\n\nfor (Apprentice apprentice : apprentices) {\n    System.out.println(apprentice.firstName);\n    System.out.println(apprentice.trainingYear);\n}`,
        output: "Maya\n1"
      },
      {
        title: "Anwesenheit in der Gruppe zählen",
        code: `// Jedes Objekt enthält seine eigene Anwesenheit.\n// Die Schleife zählt nur die anwesenden Azubis.\nimport java.util.ArrayList;\n\nclass Apprentice {\n    String firstName;\n    boolean presentToday;\n}\n\nArrayList<Apprentice> apprentices = new ArrayList<>();\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.presentToday = true;\napprentices.add(maya);\n\nApprentice noah = new Apprentice();\nnoah.firstName = "Noah";\nnoah.presentToday = false;\napprentices.add(noah);\n\nint presentCount = 0;\n\nfor (Apprentice apprentice : apprentices) {\n    if (apprentice.presentToday) {\n        presentCount = presentCount + 1;\n    }\n}\n\nSystem.out.println(presentCount);`,
        output: "1"
      }
    ],
    quiz: [
      {
        question: "Was ist der Vorteil von ArrayList<Apprentice> gegenüber ArrayList<String>?",
        options: [
          "Jeder Listeneintrag kann mehrere Azubi-Daten zusammenhalten",
          "Die Liste braucht keine Imports mehr",
          "Die Liste kann keine Schleifen verwenden",
          "Alle Werte werden automatisch wahr"
        ],
        correct: 0,
        explanation: "Ein Apprentice-Objekt kann mehrere zusammengehörige Werte eines Azubis enthalten."
      },
      {
        question: "Was bedeutet ein einzelner Eintrag in einer Liste von Apprentice-Objekten?",
        options: [
          "Ein konkreter Azubi mit eigenen Feldwerten (Attributwerten)",
          "Immer nur ein einzelner Buchstabe",
          "Eine leere Methode",
          "Ein fest eingebauter Java-Befehl"
        ],
        correct: 0,
        explanation: "Jeder Eintrag ist ein eigenes Objekt, zum Beispiel Maya oder Noah."
      },
      {
        question: "Warum bleibt eine Schleife auch bei Objektlisten nützlich?",
        options: [
          "Weil sie alle Objekte der Gruppe nacheinander verarbeiten kann",
          "Weil sie Klassen automatisch erzeugt",
          "Weil sie Datentypen abschaltet",
          "Weil sie Rückgabewerte verbietet"
        ],
        correct: 0,
        explanation: "Eine Schleife kann über jedes Objekt in der Liste laufen."
      }
    ],
    completion: {
      prompt: "Vervollständige den Code, sodass eine Liste von Azubi-Objekten entsteht.",
      parts: [
        { text: "import java.util.ArrayList;\n\nclass Apprentice {\n    String firstName;\n}\n\n" },
        { blank: "listType", answers: ["ArrayList"] },
        { text: "<" },
        { blank: "objectType", answers: ["Apprentice"] },
        { text: "> apprentices = new ArrayList<>();\n\nApprentice maya = new Apprentice();\nmaya.firstName = \"Maya\";\napprentices." },
        { blank: "addMethod", answers: ["add"] },
        { text: "(maya);\n\nSystem.out.println(apprentices.size());" }
      ],
      output: "1"
    }
  },
  {
    id: "encapsulation",
    number: "10",
    title: "Kapselung",
    subtitle: "Azubi-Daten kontrolliert ändern",
    concepts: [
      "Kapselung bedeutet: Daten werden nicht beliebig von außen verändert.",
      "Mit private werden Felder (Attribute) vor direktem Zugriff geschützt.",
      "Ein Konstruktor setzt wichtige Startwerte beim Erzeugen eines Objekts.",
      "Getter und Setter erlauben kontrolliertes Lesen und Ändern von Feldern (Attributen)."
    ],
    explanation: [
      {
        heading: "Warum jetzt Kapselung?",
        text: "In den bisherigen Klassen konnten Felder (Attribute) direkt verändert werden. Bei echten Azubi-Daten möchte Frau Kaya genauer steuern, welche Werte gesetzt werden dürfen."
      },
      {
        heading: "Java-Regel",
        text: "Private Felder (Attribute) werden innerhalb der Klasse gespeichert. Von außen arbeitet man über Methoden wie getFirstName oder setTrainingYear."
      }
    ],
    examples: [
      {
        title: "Private Felder (Attribute) und Konstruktor",
        code: `// Der Name und das Lehrjahr sollen nicht direkt von außen geändert werden.\n// Der Konstruktor setzt die Startwerte beim Erzeugen des Objekts.\nclass Apprentice {\n    private String firstName;\n    private int trainingYear;\n\n    Apprentice(String firstName, int trainingYear) {\n        this.firstName = firstName;\n        this.trainingYear = trainingYear;\n    }\n\n    String getFirstName() {\n        return firstName;\n    }\n}\n\nApprentice maya = new Apprentice("Maya", 1);\nSystem.out.println(maya.getFirstName());`,
        output: "Maya",
        info: {
          title: "Was bedeutet this?",
          body: [
            "`this` meint das aktuelle Objekt.",
            "In `this.firstName = firstName;` steht links das Feld (Attribut) des Objekts und rechts der Parameter aus dem Konstruktor."
          ]
        }
      },
      {
        title: "Getter für geschützte Daten",
        code: `// Das Lehrjahr bleibt private.\n// Von außen wird es nur über einen Getter gelesen.\nclass Apprentice {\n    private int trainingYear;\n\n    Apprentice(int trainingYear) {\n        this.trainingYear = trainingYear;\n    }\n\n    int getTrainingYear() {\n        return trainingYear;\n    }\n}\n\nApprentice maya = new Apprentice(1);\nSystem.out.println(maya.getTrainingYear());`,
        output: "1"
      },
      {
        title: "Setter für kontrollierte Änderung",
        code: `// Die Anwesenheit darf geändert werden,\n// aber nur über eine passende Methode der Klasse.\nclass Apprentice {\n    private boolean presentToday;\n\n    void setPresentToday(boolean presentToday) {\n        this.presentToday = presentToday;\n    }\n\n    boolean isPresentToday() {\n        return presentToday;\n    }\n}\n\nApprentice maya = new Apprentice();\nmaya.setPresentToday(true);\nSystem.out.println(maya.isPresentToday());`,
        output: "true"
      },
      {
        title: "Note kontrolliert setzen",
        code: `// Eine Note soll nur übernommen werden, wenn sie im plausiblen Bereich liegt.\n// Ungültige Werte ändern das Feld (Attribut) hier nicht.\nclass Apprentice {\n    private double lastGrade = 2.0;\n\n    void setLastGrade(double lastGrade) {\n        if (lastGrade >= 1.0 && lastGrade <= 6.0) {\n            this.lastGrade = lastGrade;\n        }\n    }\n\n    double getLastGrade() {\n        return lastGrade;\n    }\n}\n\nApprentice maya = new Apprentice();\nmaya.setLastGrade(2.3);\nSystem.out.println(maya.getLastGrade());`,
        output: "2.3"
      }
    ],
    quiz: [
      {
        question: "Wozu dient Kapselung?",
        options: [
          "Daten werden geschützt und kontrolliert geändert",
          "Alle Felder (Attribute) werden automatisch gelöscht",
          "Arrays werden ohne Index verwendet",
          "Schleifen werden schneller geschrieben"
        ],
        correct: 0,
        explanation: "Kapselung schützt Daten vor beliebigen Änderungen von außen."
      },
      {
        question: "Welche Aufgabe hat ein Konstruktor?",
        options: [
          "Er setzt Startwerte beim Erzeugen eines Objekts",
          "Er ersetzt jede Schleife",
          "Er sortiert automatisch eine Liste",
          "Er gibt immer true zurück"
        ],
        correct: 0,
        explanation: "Ein Konstruktor wird beim Erzeugen eines Objekts aufgerufen und kann Startwerte setzen."
      },
      {
        question: "Warum nutzt man Getter?",
        options: [
          "Um geschützte Felder (Attribute) kontrolliert zu lesen",
          "Um eine Klasse in einen String umzuwandeln",
          "Um Java ohne Methoden zu schreiben",
          "Um alle Fehler zu ignorieren"
        ],
        correct: 0,
        explanation: "Getter geben kontrolliert Werte aus privaten Feldern (Attributen) zurück."
      }
    ],
    completion: {
      prompt: "Vervollständige die gekapselte Klasse mit privatem Feld (Attribut) und Getter.",
      parts: [
        { text: "class Apprentice {\n    " },
        { blank: "privateKeyword", answers: ["private"] },
        { text: " String firstName;\n\n    Apprentice(String firstName) {\n        " },
        { blank: "thisKeyword", answers: ["this"] },
        { text: ".firstName = firstName;\n    }\n\n    String getFirstName() {\n        " },
        { blank: "returnKeyword", answers: ["return"] },
        { text: " firstName;\n    }\n}" }
      ],
      output: "Keine Ausgabe"
    }
  },
  {
    id: "error-handling",
    number: "11",
    title: "Fehlerbehandlung",
    subtitle: "Ungültige Gruppendaten erkennen",
    concepts: [
      "Fehlerbehandlung bedeutet: Ein Programm erkennt problematische Werte und reagiert bewusst.",
      "Validierung prüft, ob Daten fachlich plausibel sind.",
      "Mit throw kann Java einen Fehler ausdrücklich melden.",
      "try/catch kann einen gemeldeten Fehler auffangen und eine passende Reaktion ausführen."
    ],
    explanation: [
      {
        heading: "Warum jetzt Fehlerbehandlung?",
        text: "Nach Kapselung kann die Klasse selbst entscheiden, welche Daten erlaubt sind. Jetzt geht es darum, ungültige Namen, Lehrjahre oder Noten nicht still zu übernehmen."
      },
      {
        heading: "Java-Regel",
        text: "IllegalArgumentException passt, wenn ein übergebener Wert fachlich ungültig ist, zum Beispiel ein Lehrjahr außerhalb von 1 bis 3."
      }
    ],
    examples: [
      {
        title: "Name validieren",
        code: `// Ein leerer Name wäre für die Ausbildungsgruppe nicht hilfreich.\n// Die Methode prüft deshalb, ob wirklich Text vorhanden ist.\nstatic boolean hasValidName(String firstName) {\n    return firstName != null && !firstName.isBlank();\n}\n\nSystem.out.println(hasValidName("Maya"));`,
        output: "true",
        info: {
          title: "Was bedeutet isBlank?",
          body: [
            "`isBlank()` prüft, ob ein Text leer ist oder nur aus Leerzeichen besteht.",
            "Der Ausdruck `!firstName.isBlank()` bedeutet: Der Text ist nicht leer."
          ]
        }
      },
      {
        title: "Ungültiges Lehrjahr melden",
        code: `// Das Lehrjahr muss in dieser Ausbildung zwischen 1 und 3 liegen.\n// Bei einem ungültigen Wert meldet die Methode einen Fehler.\nclass Apprentice {\n    private int trainingYear;\n\n    void setTrainingYear(int trainingYear) {\n        if (trainingYear < 1 || trainingYear > 3) {\n            throw new IllegalArgumentException("Lehrjahr muss zwischen 1 und 3 liegen");\n        }\n\n        this.trainingYear = trainingYear;\n    }\n}\n\nApprentice maya = new Apprentice();\nmaya.setTrainingYear(1);\nSystem.out.println("Lehrjahr gespeichert");`,
        output: "Lehrjahr gespeichert"
      },
      {
        title: "Fehler auffangen",
        code: `// Frau Kaya kann auf ungültige Daten reagieren,\n// statt das Programm unkontrolliert abbrechen zu lassen.\ntry {\n    int trainingYear = 4;\n\n    if (trainingYear < 1 || trainingYear > 3) {\n        throw new IllegalArgumentException("Lehrjahr prüfen");\n    }\n\n    System.out.println("Lehrjahr gespeichert");\n} catch (IllegalArgumentException error) {\n    System.out.println("Eingabe korrigieren");\n}`,
        output: "Eingabe korrigieren"
      },
      {
        title: "Note prüfen",
        code: `// Auch Noten haben einen erlaubten Bereich.\n// Eine eigene Prüfmethode macht die Regel wiederverwendbar.\nstatic boolean isValidGrade(double grade) {\n    return grade >= 1.0 && grade <= 6.0;\n}\n\nSystem.out.println(isValidGrade(2.3));`,
        output: "true"
      }
    ],
    quiz: [
      {
        question: "Was bedeutet Validierung?",
        options: [
          "Daten werden auf erlaubte oder plausible Werte geprüft",
          "Eine Liste wird automatisch ausgegeben",
          "Ein Objekt wird ohne Klasse erzeugt",
          "Alle Methoden werden gelöscht"
        ],
        correct: 0,
        explanation: "Validierung prüft, ob ein Wert fachlich erlaubt ist."
      },
      {
        question: "Wann passt eine IllegalArgumentException?",
        options: [
          "Wenn ein übergebener Wert für die Regel ungültig ist",
          "Wenn eine Schleife fertig ist",
          "Wenn eine Ausgabe erfolgreich war",
          "Wenn ein Getter einen Wert liest"
        ],
        correct: 0,
        explanation: "Eine IllegalArgumentException beschreibt einen ungültigen übergebenen Wert."
      },
      {
        question: "Wozu dient catch?",
        options: [
          "Ein gemeldeter Fehler kann aufgefangen und behandelt werden",
          "Ein Feld (Attribut) wird automatisch private",
          "Eine Klasse bekommt einen Konstruktor",
          "Ein Array bekommt eine neue Länge"
        ],
        correct: 0,
        explanation: "`catch` reagiert auf einen Fehler, der im try-Block gemeldet wurde."
      }
    ],
    completion: {
      prompt: "Vervollständige die Prüfung, die ein ungültiges Lehrjahr meldet.",
      parts: [
        { text: "int trainingYear = 4;\n\nif (trainingYear < 1 || trainingYear > 3) {\n    " },
        { blank: "throwKeyword", answers: ["throw"] },
        { text: " new " },
        { blank: "exceptionType", answers: ["IllegalArgumentException"] },
        { text: "(\"Lehrjahr prüfen\");\n}" }
      ],
      output: "Fehler: Lehrjahr prüfen"
    }
  },
  {
    id: "enums",
    number: "12",
    title: "Enums",
    subtitle: "Feste Auswahlwerte sicher modellieren",
    concepts: [
      "Ein enum ist ein eigener Datentyp für eine kleine, feste Auswahl von Werten.",
      "Enum-Werte werden in Java meistens groß geschrieben, zum Beispiel PRESENT oder EXCUSED.",
      "Enums verhindern Tippfehler, weil Java nur die festgelegten Werte erlaubt.",
      "Enums passen gut zu Status, Rollen, festen Stufen oder festen Kategorien.",
      "Wenn Werte frei eingegeben, berechnet oder regelmäßig erweitert werden, ist ein enum oft nicht die beste Wahl."
    ],
    explanation: [
      {
        heading: "Warum jetzt Enums?",
        text: "Bisher haben wir für feste Bedeutungen oft int, boolean oder String verwendet. Ein enum macht solche Bedeutungen sichtbarer: Statt 1, 2, 3 oder beliebigem Text stehen klare Namen im Code."
      },
      {
        heading: "Java-Regel",
        text: "Ein enum wird ähnlich wie eine Klasse benannt. Im Block stehen die erlaubten Werte. Danach kann eine Variable genau einen dieser Werte speichern."
      },
      {
        heading: "Entscheidungshilfe",
        text: "Nutze boolean für genau zwei einfache Wahrheitswerte, Zahlen für echte Berechnungen, String für freien Text, Klassen für eigene Objekte und enums für eine geschlossene fachliche Auswahl."
      }
    ],
    examples: [
      {
        title: "Lehrjahr als feste Auswahl",
        code: `// Statt 1, 2 und 3 können feste Namen verwendet werden.\n// Dadurch ist im Code klarer, was der Wert bedeutet.\nenum TrainingYear {\n    FIRST,\n    SECOND,\n    THIRD\n}\n\nTrainingYear mayaYear = TrainingYear.FIRST;\nSystem.out.println(mayaYear);`,
        output: "FIRST",
        info: {
          title: "Warum nicht einfach int?",
          body: [
            "`int` ist gut, wenn mit einer Zahl gerechnet wird.",
            "Beim Lehrjahr ist aber meistens die fachliche Bedeutung wichtiger als Rechnen. Ein enum verhindert außerdem ungültige Werte wie 0 oder 7."
          ]
        }
      },
      {
        title: "Anwesenheit genauer modellieren",
        code: `// boolean kann nur true oder false speichern.\n// In einer echten Anwendung braucht Anwesenheit oft mehrere Zustände.\nenum AttendanceStatus {\n    PRESENT,\n    EXCUSED,\n    SICK,\n    UNKNOWN\n}\n\nAttendanceStatus status = AttendanceStatus.EXCUSED;\n\nswitch (status) {\n    case PRESENT -> System.out.println("Für die Tagesübung einplanen");\n    case EXCUSED -> System.out.println("Entschuldigt fehlen");\n    case SICK -> System.out.println("Krankmeldung notieren");\n    case UNKNOWN -> System.out.println("Anwesenheit klären");\n}`,
        output: "Entschuldigt fehlen",
        info: {
          title: "Grenzfall: boolean oder enum?",
          body: [
            "Wenn nur die Frage zählt: anwesend oder nicht anwesend, reicht `boolean`.",
            "Wenn es mehrere fachlich unterschiedliche Zustände gibt, ist ein enum klarer als mehrere booleans oder freie Texte."
          ]
        }
      },
      {
        title: "Rollen in einer Anwendung",
        code: `// Rollen sind ein typisches Enum-Beispiel aus echter Anwendungsentwicklung.\n// Eine Rolle entscheidet, was eine Person in der Anwendung darf.\nenum UserRole {\n    APPRENTICE,\n    TRAINER,\n    ADMIN\n}\n\nUserRole currentRole = UserRole.TRAINER;\n\nif (currentRole == UserRole.TRAINER) {\n    System.out.println("Gruppendaten bearbeiten erlaubt");\n}`,
        output: "Gruppendaten bearbeiten erlaubt",
        info: {
          title: "Warum == bei enums?",
          body: [
            "Enum-Werte sind feste Einzelwerte.",
            "Deshalb kann man sie in Java direkt mit `==` vergleichen."
          ]
        }
      },
      {
        title: "Status eines Formulars",
        code: `// In Anwendungen haben Datensätze oft einen Status.\n// Ein enum macht klar, welche Statuswerte überhaupt möglich sind.\nenum ProfileStatus {\n    DRAFT,\n    SUBMITTED,\n    REVIEWED,\n    ARCHIVED\n}\n\nProfileStatus status = ProfileStatus.SUBMITTED;\nSystem.out.println(status);`,
        output: "SUBMITTED"
      },
      {
        title: "Wann kein enum?",
        code: `// Freie Daten sind keine gute Enum-Auswahl.\n// Namen und Noten werden eingegeben oder berechnet und sind nicht fest vorgegeben.\nString firstName = "Maya";\ndouble averageGrade = 2.0;\n\nSystem.out.println(firstName);\nSystem.out.println(averageGrade);`,
        output: "Maya\n2.0",
        infoBlocks: [
          {
            title: "Typische Entscheidung",
            body: [
              "`String`: Der Wert ist freier Text, zum Beispiel ein Name.",
              "`double`: Der Wert ist eine Zahl, mit der gerechnet wird, zum Beispiel ein Durchschnitt.",
              "`class`: Der Wert besteht aus mehreren zusammengehörigen Daten, zum Beispiel ein kompletter Azubi.",
              "`enum`: Der Wert kommt aus einer kleinen, stabilen Auswahl, zum Beispiel Status oder Rolle."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Wann ist ein enum besonders passend?",
        options: [
          "Wenn es eine kleine, feste Auswahl erlaubter Werte gibt",
          "Wenn ein Name frei eingegeben wird",
          "Wenn eine Note berechnet werden soll",
          "Wenn beliebig viele neue Werte zur Laufzeit entstehen"
        ],
        correct: 0,
        explanation: "Ein enum beschreibt eine geschlossene Auswahl, zum Beispiel Status, Rolle oder Stufe."
      },
      {
        question: "Was gibt dieses Beispiel aus?",
        code: `enum UserRole {\n    APPRENTICE,\n    TRAINER,\n    ADMIN\n}\n\nUserRole role = UserRole.ADMIN;\nSystem.out.println(role);`,
        options: ["ADMIN", "TRAINER", "UserRole", "true"],
        correct: 0,
        explanation: "Die Variable speichert den Enum-Wert ADMIN."
      },
      {
        question: "Welche Modellierung passt am besten für `PRESENT`, `EXCUSED`, `SICK` und `UNKNOWN`?",
        options: ["enum AttendanceStatus", "double AttendanceStatus", "boolean presentToday", "String[] firstName"],
        correct: 0,
        explanation: "Mehrere feste Anwesenheitszustände sind ein typischer Fall für ein enum."
      },
      {
        question: "Wann sollte eher kein enum verwendet werden?",
        options: [
          "Für frei eingegebene Namen wie Maya, Noah oder Lea",
          "Für feste Rollen wie APPRENTICE, TRAINER und ADMIN",
          "Für feste Formularstatus wie DRAFT und SUBMITTED",
          "Für feste Stufen wie FIRST, SECOND und THIRD"
        ],
        correct: 0,
        explanation: "Namen sind freie Daten und können beliebig viele Werte haben."
      }
    ],
    implementationTasks: [
      {
        level: "Grundlagen plus",
        topic: "Enums",
        title: "Anwesenheitsstatus mit enum ausgeben",
        description: "Erstelle ein enum `AttendanceStatus` und speichere darin den Status eines Azubis.",
        requirements: [
          "Lege die Werte `PRESENT`, `EXCUSED`, `SICK` und `UNKNOWN` an.",
          "Speichere für Maya den Wert `EXCUSED`.",
          "Gib den gespeicherten Wert aus."
        ],
        output: "EXCUSED"
      },
      {
        level: "Mittel",
        topic: "Enums und switch",
        title: "Mehrere Anwesenheitsstatus ausgeben",
        description: "Erstelle mehrere Anwesenheitsstatus für Azubis, sodass in der Konsolenausgabe jeder Status einmal vorkommt.",
        requirements: [
          "Verwende das enum `AttendanceStatus`.",
          "Lege für Maya, Noah, Lea und Sam je einen Status an.",
          "Nutze die Werte `PRESENT`, `EXCUSED`, `SICK` und `UNKNOWN` jeweils genau einmal.",
          "Gib die vier gespeicherten Statuswerte untereinander aus."
        ],
        output: "PRESENT\nEXCUSED\nSICK\nUNKNOWN"
      },
      {
        level: "Mittel",
        topic: "Enums in Anwendungen",
        title: "Rolle prüfen",
        description: "Modelliere Rollen in einer kleinen Lernanwendung und prüfe, ob Gruppendaten bearbeitet werden dürfen.",
        requirements: [
          "Erstelle ein enum `UserRole` mit `APPRENTICE`, `TRAINER` und `ADMIN`.",
          "Speichere `TRAINER` als aktuelle Rolle.",
          "Gib nur bei `TRAINER` oder `ADMIN` den Text `Bearbeiten erlaubt` aus."
        ],
        output: "Bearbeiten erlaubt"
      },
      {
        level: "Mittel plus",
        topic: "Enums und Klassen",
        title: "Enum als Feld (Attribut) in einer Klasse",
        description: "Erweitere eine Klasse `Apprentice` um einen Anwesenheitsstatus.",
        requirements: [
          "Lege ein enum `AttendanceStatus` an.",
          "Die Klasse `Apprentice` soll ein Feld (Attribut) `status` dieses Enum-Typs haben.",
          "Erzeuge ein Objekt für Maya und gib ihren Status aus."
        ],
        output: "PRESENT"
      },
      {
        level: "Fortgeschritten",
        topic: "Modellierungsentscheidung",
        title: "Enum oder anderer Typ?",
        description: "Baue ein kleines Programm, das bewusst verschiedene Typen passend einsetzt: Name, Durchschnittsnote, Rolle und vollständiger Azubi.",
        requirements: [
          "Verwende `String` für den frei eingegebenen Namen.",
          "Verwende `double` für die berechnete Durchschnittsnote.",
          "Verwende ein enum `UserRole` für feste Rollen.",
          "Verwende eine Klasse `Apprentice`, um Name, Durchschnitt und Rolle zusammenzuhalten."
        ],
        output: "Maya\n2.0\nAPPRENTICE"
      }
    ],
    completion: {
      prompt: "Vervollständige das enum und die Fallunterscheidung für den Anwesenheitsstatus.",
      parts: [
        { blank: "enumKeyword", answers: ["enum"] },
        { text: " AttendanceStatus {\n    PRESENT,\n    EXCUSED,\n    SICK,\n    UNKNOWN\n}\n\nAttendanceStatus status = AttendanceStatus.EXCUSED;\n\n" },
        { blank: "switchKeyword", answers: ["switch"] },
        { text: " (status) {\n    case PRESENT -> System.out.println(\"Einplanen\");\n    case " },
        { blank: "excusedCase", answers: ["EXCUSED"] },
        { text: " -> System.out.println(\"Entschuldigt fehlen\");\n    default -> System.out.println(\"Klären\");\n}" }
      ],
      output: "Entschuldigt fehlen"
    }
  },
  {
    id: "enum-properties",
    number: "13",
    title: "Enums mit Eigenschaften",
    subtitle: "Enum-Werte mit lesbaren Labels ausgeben",
    concepts: [
      "Ein enum kann zu jedem festen Wert zusätzliche Informationen speichern.",
      "Eine einfache Eigenschaft ist ein Label, also ein lesbarer Text für die Ausgabe.",
      "Der Code arbeitet weiter mit sicheren Enum-Werten wie APPRENTICE, die Ausgabe kann aber Azubi anzeigen.",
      "Ein enum mit Label passt gut, wenn interne Werte stabil bleiben und die Anzeige verständlicher sein soll."
    ],
    explanation: [
      {
        heading: "Warum Labels?",
        text: "Enum-Werte sind im Code oft Englisch und groß geschrieben. Für eine Konsolenausgabe oder Oberfläche kann ein anderes Label angenehmer sein, zum Beispiel Azubi statt APPRENTICE."
      },
      {
        heading: "Java-Regel",
        text: "Jeder Enum-Wert kann beim Anlegen einen Text bekommen. Das enum speichert diesen Text in einem Feld (Attribut) und gibt ihn über eine Methode zurück."
      }
    ],
    examples: [
      {
        title: "Rolle mit deutschem Label",
        code: `// Im Code bleibt die Rolle eindeutig.\n// In der Ausgabe erscheint ein deutsches Label.\nenum UserRole {\n    APPRENTICE("Azubi"),\n    TRAINER("Ausbilderin"),\n    ADMIN("Administration");\n\n    private final String label;\n\n    UserRole(String label) {\n        this.label = label;\n    }\n\n    String getLabel() {\n        return label;\n    }\n}\n\nSystem.out.println(UserRole.APPRENTICE.getLabel());`,
        output: "Azubi",
        info: {
          title: "Was ist hier neu?",
          body: [
            "Jeder Enum-Wert bekommt in Klammern ein Label.",
            "Das Feld (Attribut) `label` speichert diesen Text.",
            "`getLabel()` gibt den Text zurück, damit die Ausgabe nicht APPRENTICE, sondern Azubi zeigt."
          ]
        },
        infoBlocks: [
          {
            title: "Was bedeutet diese Schreibweise APPRENTICE(\"Azubi\")?",
            body: [
              "`APPRENTICE` ist der feste Enum-Wert, den Java im Code verwendet.",
              "`\"Azubi\"` ist ein zusätzlicher Text, der an diesen Enum-Wert übergeben wird.",
              "Beim Erzeugen des Enum-Werts ruft Java intern den Konstruktor `UserRole(String label)` auf und speichert den Text im Feld (Attribut) `label`."
            ]
          },
          {
            title: "Wieso private final String label?",
            body: [
              "`String label` beschreibt, welche Art von Zusatzinformation gespeichert wird: ein Text.",
              "`private` bedeutet: Von außen soll niemand dieses Feld (Attribut) direkt verändern oder lesen. Stattdessen wird kontrolliert über `getLabel()` darauf zugegriffen.",
              "`final` bedeutet: Das Label wird beim Anlegen des Enum-Werts gesetzt und danach nicht mehr geändert. Das passt gut, weil `APPRENTICE` dauerhaft das Label `\"Azubi\"` behalten soll."
            ]
          }
        ]
      },
      {
        title: "Anwesenheit mit Anzeige-Text",
        code: `// Die festen Statuswerte bleiben sicher.\n// Die Ausgabe kann trotzdem lesbarer sein.\nenum AttendanceStatus {\n    PRESENT("anwesend"),\n    EXCUSED("entschuldigt"),\n    SICK("krank"),\n    UNKNOWN("ungeklärt");\n\n    private final String label;\n\n    AttendanceStatus(String label) {\n        this.label = label;\n    }\n\n    String getLabel() {\n        return label;\n    }\n}\n\nAttendanceStatus status = AttendanceStatus.SICK;\nSystem.out.println(status.getLabel());`,
        output: "krank"
      },
      {
        title: "Label in einer Klasse nutzen",
        code: `// Ein Objekt speichert den sicheren Enum-Wert.\n// Für die Ausgabe wird nur das Label verwendet.\nenum UserRole {\n    APPRENTICE("Azubi"),\n    TRAINER("Ausbilderin");\n\n    private final String label;\n\n    UserRole(String label) {\n        this.label = label;\n    }\n\n    String getLabel() {\n        return label;\n    }\n}\n\nclass Apprentice {\n    String firstName;\n    UserRole role;\n}\n\nApprentice maya = new Apprentice();\nmaya.firstName = "Maya";\nmaya.role = UserRole.APPRENTICE;\n\nSystem.out.println(maya.firstName);\nSystem.out.println(maya.role.getLabel());`,
        output: "Maya\nAzubi"
      }
    ],
    quiz: [
      {
        question: "Wozu dient ein Label bei einem enum?",
        options: [
          "Ein Enum-Wert kann intern sicher bleiben und trotzdem lesbar ausgegeben werden",
          "Das enum wird dadurch zu einer ArrayList",
          "Java erlaubt dadurch beliebige neue Werte zur Laufzeit",
          "Ein Label ersetzt alle Klassen im Programm"
        ],
        correct: 0,
        explanation: "Das Label ist ein zusätzlicher Text für die Ausgabe."
      },
      {
        question: "Was gibt dieses Beispiel aus?",
        code: `enum UserRole {\n    APPRENTICE("Azubi");\n\n    private final String label;\n\n    UserRole(String label) {\n        this.label = label;\n    }\n\n    String getLabel() {\n        return label;\n    }\n}\n\nSystem.out.println(UserRole.APPRENTICE.getLabel());`,
        options: ["Azubi", "APPRENTICE", "label", "UserRole"],
        correct: 0,
        explanation: "`getLabel()` gibt den gespeicherten Label-Text zurück."
      },
      {
        question: "Wann ist ein enum mit Label sinnvoll?",
        options: [
          "Wenn der Code feste Werte braucht, die Ausgabe aber einen anderen Text zeigen soll",
          "Wenn Namen frei eingegeben werden sollen",
          "Wenn eine Zahl berechnet werden soll",
          "Wenn jedes Objekt automatisch gespeichert werden soll"
        ],
        correct: 0,
        explanation: "Der feste Wert bleibt stabil, das Label macht die Anzeige verständlicher."
      }
    ],
    completion: {
      prompt: "Vervollständige das enum, sodass der sichere Wert APPRENTICE das Label Azubi ausgibt.",
      parts: [
        { text: "enum UserRole {\n    APPRENTICE(\"" },
        { blank: "label", answers: ["Azubi"] },
        { text: "\");\n\n    private final String label;\n\n    UserRole(String label) {\n        this.label = label;\n    }\n\n    String " },
        { blank: "methodName", answers: ["getLabel"] },
        { text: "() {\n        return " },
        { blank: "fieldName", answers: ["label"] },
        { text: ";\n    }\n}\n\nSystem.out.println(UserRole.APPRENTICE.getLabel());" }
      ],
      output: "Azubi"
    }
  },
  {
    id: "classes-objects-recap",
    number: "14",
    title: "RECAP: Klassen vs. Objekte",
    subtitle: "Bauplan und konkrete Instanz unterscheiden",
    concepts: [],
    explanation: [],
    examples: [],
    quiz: [
      {
        question: "Was beschreibt eine Klasse am besten?",
        options: [
          "Einen Bauplan für Objekte",
          "Immer genau einen konkreten Azubi",
          "Eine einzelne Konsolenausgabe",
          "Eine feste Liste von Enum-Werten"
        ],
        correct: 0,
        explanation: "Eine Klasse legt fest, welche Daten und welches Verhalten Objekte haben können."
      },
      {
        question: "Was ist ein Objekt?",
        options: [
          "Ein konkretes Exemplar, das aus einer Klasse erzeugt wurde",
          "Nur der Name einer Datei",
          "Ein Platzhalter für jeden möglichen Datentyp",
          "Ein anderer Name für if"
        ],
        correct: 0,
        explanation: "Ein Objekt ist eine konkrete Instanz, zum Beispiel Maya als Apprentice."
      },
      {
        question: "Was macht `new Apprentice()`?",
        options: [
          "Es erzeugt ein neues Objekt aus der Klasse Apprentice",
          "Es löscht die Klasse Apprentice",
          "Es gibt automatisch alle Felder (Attribute) aus",
          "Es macht aus einem String ein enum"
        ],
        correct: 0,
        explanation: "`new` erzeugt ein konkretes Objekt."
      },
      {
        question: "Welche Zeile speichert ein konkretes Objekt in einer Variable?",
        code: `class Apprentice {\n    String firstName;\n}\n\nApprentice maya = new Apprentice();`,
        options: [
          "Apprentice maya = new Apprentice();",
          "class Apprentice {",
          "String firstName;",
          "}"
        ],
        correct: 0,
        explanation: "Links steht der Typ, rechts wird mit `new` das Objekt erzeugt."
      },
      {
        question: "Maya und Noah werden beide mit `new Apprentice()` erzeugt. Was ist daran wichtig?",
        options: [
          "Beide Objekte nutzen denselben Bauplan, können aber eigene Feldwerte (Attributwerte) haben",
          "Beide Variablen müssen immer denselben Namen speichern",
          "Nur das erste Objekt darf Felder (Attribute) besitzen",
          "Das zweite Objekt überschreibt automatisch die Klasse"
        ],
        correct: 0,
        explanation: "Mehrere Objekte derselben Klasse können unterschiedliche Zustände haben."
      },
      {
        question: "Was ist `firstName` in diesem Code?",
        code: `class Apprentice {\n    String firstName;\n}`,
        options: [
          "Ein Feld (Attribut) der Klasse Apprentice",
          "Ein neues Objekt",
          "Ein Konstruktor",
          "Ein enum-Wert"
        ],
        correct: 0,
        explanation: "`firstName` ist ein Feld (Attribut), das zu Apprentice-Objekten gehört."
      },
      {
        question: "Welche Aussage passt zu einem Konstruktor?",
        options: [
          "Er kann Startwerte setzen, wenn ein Objekt erzeugt wird",
          "Er ist immer eine Schleife",
          "Er darf nie Parameter haben",
          "Er ersetzt alle Felder (Attribute)"
        ],
        correct: 0,
        explanation: "Ein Konstruktor läuft beim Erzeugen eines Objekts."
      },
      {
        question: "Eine Klasse `Apprentice` hat die Felder (Attribute) `firstName` und `trainingYear`. Welche Einschätzung ist richtig?",
        options: [
          "Die Klasse beschreibt, welche Daten ein Apprentice-Objekt haben kann",
          "Die Klasse enthält automatisch schon Maya und Noah",
          "Die Felder (Attribute) sind Konsolenausgaben",
          "Die Klasse kann nur ein einziges Objekt erzeugen"
        ],
        correct: 0,
        explanation: "Die Klasse beschreibt die Struktur, noch nicht die konkreten Werte."
      },
      {
        question: "Warum passt eine Methode wie `needsSupport()` gut in eine Klasse `Apprentice`?",
        options: [
          "Weil sie Verhalten beschreibt, das zu einem Azubi-Objekt gehört",
          "Weil Methoden nur außerhalb von Klassen erlaubt sind",
          "Weil dadurch alle Felder (Attribute) gelöscht werden",
          "Weil sie aus einem Objekt eine Zahl macht"
        ],
        correct: 0,
        explanation: "Methoden können Verhalten eines Objekts ausdrücken."
      },
      {
        question: "Was bedeutet `maya.firstName = \"Maya\";`?",
        options: [
          "Beim Objekt maya wird das Feld (Attribut) firstName gesetzt",
          "Die Klasse Apprentice wird umbenannt",
          "Ein neues enum wird erzeugt",
          "Alle Apprentice-Objekte bekommen automatisch denselben Namen"
        ],
        correct: 0,
        explanation: "Der Punkt greift auf ein Feld (Attribut) oder eine Methode eines konkreten Objekts zu."
      },
      {
        question: "In `ArrayList<Apprentice>` liegen mehrere Einträge. Was sind diese Einträge fachlich?",
        options: [
          "Mehrere konkrete Apprentice-Objekte",
          "Mehrere Klassendefinitionen",
          "Mehrere Java-Projekte",
          "Mehrere if-Bedingungen"
        ],
        correct: 0,
        explanation: "Die Liste enthält Objekte vom Typ Apprentice."
      },
      {
        question: "Welche Modellierung ist für einen kompletten Azubi mit Name, Lehrjahr und Anwesenheit am passendsten?",
        options: [
          "Eine Klasse Apprentice mit passenden Feldern (Attributen)",
          "Nur ein einzelner String",
          "Nur ein einzelnes boolean",
          "Nur ein einzelner int-Wert"
        ],
        correct: 0,
        explanation: "Zusammengehörige Daten passen gut in eine Klasse."
      }
    ],
    completionTitle: "Ausfülllücken",
    completionButtonLabel: "Lücken prüfen",
    completion: {
      prompt: "Fülle die Theorie-Lücken zu Klassen und Objekten aus.",
      parts: [
        { text: "Eine Klasse ist ein " },
        { blank: "classMeaning", answers: ["Bauplan"] },
        { text: ".\nMan sagt auch: Ein Objekt ist eine " },
        { blank: "objectMeaning", answers: ["Instanz"] },
        { text: " einer Klasse. Konkret ist es ein Exemplar dieser Klasse.\nMit " },
        { blank: "newKeyword", answers: ["new"] },
        { text: " wird ein Objekt erzeugt.\nEin " },
        { blank: "fieldTerm", answers: ["Feld", "Attribut"] },
        { text: " speichert Zustand in einem Objekt. Man sagt auch: Attribut.\nEin " },
        { blank: "constructorTerm", answers: ["Konstruktor"] },
        { text: " kann Startwerte setzen.\nEine " },
        { blank: "methodTerm", answers: ["Methode"] },
        { text: " beschreibt Verhalten." }
      ],
      output: "Recap abgeschlossen"
    }
  },
  {
    id: "tests",
    number: "15",
    title: "Tests",
    disabled: true,
    subtitle: "Regeln der Ausbildungsgruppe absichern",
    concepts: [
      "Tests prüfen automatisch, ob eine Regel weiterhin funktioniert.",
      "Ein Test hat eine klare Erwartung: Bei bestimmter Eingabe soll ein bestimmtes Ergebnis entstehen.",
      "Assert bedeutet: Das Programm vergleicht Ergebnis und Erwartung.",
      "Tests helfen, Änderungen sicherer zu machen, wenn das Modell größer wird."
    ],
    explanation: [
      {
        heading: "Warum jetzt Tests?",
        text: "Die Ausbildungsgruppe hat inzwischen Regeln für Anwesenheit, Noten und gültige Daten. Tests sorgen dafür, dass diese Regeln nach späteren Änderungen nicht versehentlich kaputtgehen."
      },
      {
        heading: "Java-Regel",
        text: "In echten Projekten wird häufig JUnit genutzt. Hier zeigen die Beispiele zuerst das Prinzip: Regel ausführen, Ergebnis prüfen, Rückmeldung ausgeben."
      }
    ],
    examples: [
      {
        title: "Eine Regel testen",
        code: `// Die Regel soll true liefern, wenn eine Note schlechter als 4.0 ist.\n// Der Test vergleicht das tatsächliche Ergebnis mit der Erwartung.\nstatic boolean needsSupport(double lastGrade) {\n    return lastGrade > 4.0;\n}\n\nboolean result = needsSupport(4.3);\nboolean expected = true;\n\nSystem.out.println(result == expected);`,
        output: "true"
      },
      {
        title: "Anwesenheit zählen testen",
        code: `// Der Test kennt die erwartete Anzahl anwesender Azubis.\n// Wenn die Methode 2 liefert, ist diese Regel erfüllt.\nstatic int countPresent(boolean[] presentToday) {\n    int count = 0;\n\n    for (boolean present : presentToday) {\n        if (present) {\n            count = count + 1;\n        }\n    }\n\n    return count;\n}\n\nboolean[] presentToday = {true, false, true};\nSystem.out.println(countPresent(presentToday) == 2);`,
        output: "true"
      },
      {
        title: "Ungültige Note testen",
        code: `// Auch Fehlerregeln lassen sich testen.\n// Diese Prüfung erwartet, dass 7.0 keine gültige Note ist.\nstatic boolean isValidGrade(double grade) {\n    return grade >= 1.0 && grade <= 6.0;\n}\n\nboolean result = isValidGrade(7.0);\nSystem.out.println(result == false);`,
        output: "true"
      },
      {
        title: "JUnit als Ausblick",
        code: `// In echten Java-Projekten schreibt man Tests oft mit JUnit.\n// Diese Schreibweise ist ein Ausblick auf professionelle Testdateien.\n@Test\nvoid detectsSupportNeed() {\n    boolean result = needsSupport(4.3);\n\n    assertTrue(result);\n}`,
        output: "Test erfolgreich",
        info: {
          title: "Warum nur als Ausblick?",
          body: [
            "JUnit braucht ein richtiges Java-Projekt mit Test-Bibliothek und Build-Werkzeug.",
            "Diese Lernplattform bleibt bewusst statisch und simuliert Ausgaben nur."
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Was prüft ein Test?",
        options: [
          "Ob eine Regel bei bekannten Eingaben das erwartete Ergebnis liefert",
          "Ob ein Variablenname besonders lang ist",
          "Ob ein Browserfenster geöffnet ist",
          "Ob eine Liste nie verändert werden kann"
        ],
        correct: 0,
        explanation: "Ein Test vergleicht ein tatsächliches Ergebnis mit einer Erwartung."
      },
      {
        question: "Warum sind Tests bei späteren Änderungen hilfreich?",
        options: [
          "Sie zeigen schnell, ob bestehende Regeln noch funktionieren",
          "Sie ersetzen jede Erklärung im Code",
          "Sie verhindern alle Tippfehler in Kommentaren",
          "Sie machen private Felder (Attribute) öffentlich"
        ],
        correct: 0,
        explanation: "Tests geben Rückmeldung, wenn eine Änderung bestehendes Verhalten beschädigt."
      },
      {
        question: "Wofür steht eine Assertion im Test?",
        options: [
          "Eine Erwartung wird mit dem tatsächlichen Ergebnis verglichen",
          "Ein Objekt wird ohne Klasse erzeugt",
          "Ein Konstruktor wird gelöscht",
          "Eine Exception wird immer ignoriert"
        ],
        correct: 0,
        explanation: "Eine Assertion hält fest, was im Test wahr sein soll."
      }
    ],
    completion: {
      prompt: "Vervollständige den einfachen Test für die Unterstützungsregel.",
      parts: [
        { text: "boolean result = needsSupport(4.3);\nboolean expected = true;\n\nSystem.out.println(result " },
        { blank: "comparison", answers: ["=="] },
        { text: " " },
        { blank: "expectedName", answers: ["expected"] },
        { text: ");" }
      ],
      output: "true"
    }
  }
];

const glossaryTerms = [
  {
    title: "System.out.println",
    matches: ["System.out.println"],
    description: "Gibt Text oder Werte in der Konsole aus. System ist die Java-Klasse, out ist der Ausgabekanal, println ist die Ausgabemethode."
  },
  {
    title: "Variable",
    matches: ["Variable", "Variablen"],
    description: "Ein benannter Speicherplatz für einen Wert."
  },
  {
    title: "Datentyp",
    matches: ["Datentyp", "Datentypen"],
    description: "Legt fest, welche Art von Wert gespeichert werden darf."
  },
  {
    title: "int",
    matches: ["int"],
    description: "Datentyp für eine Ganzzahl, zum Beispiel 3 oder 42."
  },
  {
    title: "String",
    matches: ["String"],
    description: "Datentyp für Text, zum Beispiel \"Maya\"."
  },
  {
    title: "boolean",
    matches: ["boolean"],
    description: "Datentyp für wahr oder falsch: true oder false."
  },
  {
    title: "double",
    matches: ["double"],
    description: "Datentyp für Kommazahlen, zum Beispiel 62.5."
  },
  {
    title: "Klasse",
    matches: ["Klasse", "Klassen"],
    description: "Ein Bauplan für Objekte. Eine Klasse beschreibt Daten und Verhalten."
  },
  {
    title: "Objekt",
    matches: ["Objekt", "Objekte"],
    description: "Ein konkretes Ding, das aus einer Klasse erzeugt wurde."
  },
  {
    title: "Array",
    matches: ["Array", "Arrays"],
    description: "Ein zusammengesetzter Datentyp, der mehrere Werte gleicher Art speichert."
  },
  {
    title: "Liste",
    matches: ["Liste", "Listen"],
    description: "Ein flexibler Speicher für mehrere Werte, der wachsen kann."
  },
  {
    title: "ArrayList",
    matches: ["ArrayList"],
    description: "Eine häufig genutzte Listenklasse in Java, die Werte hinzufügen und zählen kann."
  },
  {
    title: "Methode",
    matches: ["Methode", "Methoden"],
    description: "Ein benannter Codeblock, der eine bestimmte Aufgabe übernimmt und wiederverwendet werden kann."
  },
  {
    title: "Parameter",
    matches: ["Parameter", "Parametern"],
    description: "Ein Wert, der beim Aufruf in eine Methode hineingegeben wird."
  },
  {
    title: "return",
    matches: ["return"],
    description: "Gibt ein Ergebnis aus einer Methode an die aufrufende Stelle zurück."
  },
  {
    title: "Feld / Attribut",
    matches: ["Feld", "Felder", "Feldern", "Attribut", "Attribute", "Attributen"],
    description: "Eine Variable, die zu einer Klasse oder zu einem Objekt gehört. In diesem Kurs sagen wir dazu auch Attribut."
  },
  {
    title: "new",
    matches: ["new"],
    description: "Erzeugt ein neues Objekt aus einer Klasse."
  },
  {
    title: "Kapselung",
    matches: ["Kapselung"],
    description: "Schützt Daten in einer Klasse und erlaubt Änderungen nur über passende Methoden."
  },
  {
    title: "private",
    matches: ["private"],
    description: "Sichtbarkeit für Felder (Attribute) oder Methoden, die nur innerhalb der eigenen Klasse direkt genutzt werden dürfen."
  },
  {
    title: "Konstruktor",
    matches: ["Konstruktor", "Konstruktoren"],
    description: "Eine besondere Methode, die beim Erzeugen eines Objekts Startwerte setzen kann."
  },
  {
    title: "Getter",
    matches: ["Getter"],
    description: "Methode, die einen geschützten Wert kontrolliert zurückgibt."
  },
  {
    title: "Setter",
    matches: ["Setter"],
    description: "Methode, die einen geschützten Wert kontrolliert ändern kann."
  },
  {
    title: "Validierung",
    matches: ["Validierung"],
    description: "Prüft, ob ein Wert fachlich erlaubt oder plausibel ist."
  },
  {
    title: "Exception",
    matches: ["Exception", "Exceptions", "IllegalArgumentException"],
    description: "Ein gemeldeter Fehler, auf den ein Programm reagieren kann."
  },
  {
    title: "try/catch",
    matches: ["try/catch", "try", "catch"],
    description: "Java-Struktur, um Fehler in einem Bereich abzufangen und zu behandeln."
  },
  {
    title: "enum",
    matches: ["enum", "Enums"],
    description: "Ein eigener Datentyp für eine kleine, feste Auswahl erlaubter Werte."
  },
  {
    title: "Enum-Wert",
    matches: ["Enum-Wert", "Enum-Werte"],
    description: "Ein einzelner erlaubter Wert eines enums, zum Beispiel PRESENT oder ADMIN."
  },
  {
    title: "Label",
    matches: ["Label", "Labels"],
    description: "Ein lesbarer Text für die Ausgabe, der zu einem Wert gespeichert werden kann."
  },
  {
    title: "final",
    matches: ["final"],
    description: "Java-Schlüsselwort für Werte, die nach dem Setzen nicht mehr geändert werden sollen."
  },
  {
    title: "Status",
    matches: ["Status"],
    description: "Beschreibt den aktuellen Zustand eines Objekts oder Vorgangs, zum Beispiel DRAFT oder SUBMITTED."
  },
  {
    title: "Rolle",
    matches: ["Rolle", "Rollen"],
    description: "Beschreibt, welche Aufgabe oder Berechtigung eine Person in einer Anwendung hat."
  },
  {
    title: "Test",
    matches: ["Test", "Tests"],
    description: "Prüft automatisch, ob eine Regel bei bekannter Eingabe das erwartete Ergebnis liefert."
  },
  {
    title: "Assertion",
    matches: ["Assertion", "Assert", "assertTrue"],
    description: "Eine Erwartung im Test, die mit dem tatsächlichen Ergebnis verglichen wird."
  },
  {
    title: "JUnit",
    matches: ["JUnit"],
    description: "Häufig verwendetes Test-Framework für Java-Projekte."
  },
  {
    title: "Bedingung",
    matches: ["Bedingung", "Bedingungen"],
    description: "Eine Prüfung, die true oder false ergibt."
  },
  {
    title: "if",
    matches: ["if"],
    description: "Kontrollstruktur: Führt Code nur aus, wenn eine Bedingung wahr ist."
  },
  {
    title: "Schleife",
    matches: ["Schleife", "Schleifen"],
    description: "Wiederholt Code mehrfach."
  },
  {
    title: "for",
    matches: ["for"],
    description: "Eine Schleife, die gut zu Listen, Arrays oder gezählten Wiederholungen passt."
  },
  {
    title: "switch",
    matches: ["switch"],
    description: "Kontrollstruktur für mehrere feste Fälle, zum Beispiel Lehrjahr 1, 2 oder 3."
  }
];

const exampleContext = {
  title: "Beispiel im Kurs: Ausbildungsgruppe AE-2026",
  text: "In den Beispielen verwaltet eine Ausbilderin eine kleine Ausbildungsgruppe. Zuerst betrachten wir einzelne Werte eines Azubis, später wächst daraus eine Gruppe mit mehreren Azubis.",
  fields: [
    "Gruppe: AE-2026",
    "Azubi: Maya",
    "Lehrjahr: 1",
    "Anwesend: true",
    "Letzte drei Noten: 2.0, 2.3, 1.7",
    "Ausbilderin: Frau Kaya"
  ]
};

const implementationTasks = [
  {
    level: "Grundlagen",
    topic: "Variablen und Ausgabe",
    title: "Azubi-Steckbrief ausgeben",
    description: "Speichere Vorname, Lehrjahr und Anwesenheit eines Azubis in Variablen und gib daraus einen kleinen Steckbrief aus.",
    requirements: [
      "Verwende `String`, `int` und `boolean`.",
      "Nutze sprechende Variablennamen.",
      "Gib jede Information in einer eigenen Zeile aus."
    ],
    output: "Name: Maya\nLehrjahr: 1\nHeute anwesend: true"
  },
  {
    level: "Grundlagen",
    topic: "Rechnen mit Zahlen",
    title: "Notendurchschnitt berechnen",
    description: "Speichere drei Noten als `double`-Werte und berechne daraus den Durchschnitt.",
    requirements: [
      "Verwende drei einzelne Variablen für die Noten.",
      "Berechne die Summe und teile sie durch 3.",
      "Gib den Durchschnitt mit einem passenden Text aus."
    ],
    output: "Durchschnitt: 2.0"
  },
  {
    level: "Grundlagen",
    topic: "if/else",
    title: "Unterstützungsbedarf prüfen",
    description: "Prüfe anhand einer letzten Note, ob Frau Kaya Unterstützung einplanen soll.",
    requirements: [
      "Wenn die Note schlechter als 4.0 ist, soll Unterstützung eingeplant werden.",
      "Sonst soll selbstständiges Üben ausgegeben werden.",
      "Verwende einen Zahlenvergleich."
    ],
    output: "Unterstützung einplanen"
  },
  {
    level: "Grundlagen",
    topic: "switch",
    title: "Hinweis zum Lehrjahr ausgeben",
    description: "Gib je nach Lehrjahr einen passenden Hinweis für die Ausbildungsgruppe aus.",
    requirements: [
      "Nutze `switch` für Lehrjahr 1, 2 und 3.",
      "Lehrjahr 1 soll Grundlagen festigen ausgeben.",
      "Baue einen `default`-Fall für ungültige Werte ein."
    ],
    output: "Grundlagen festigen"
  },
  {
    level: "Grundlagen plus",
    topic: "Arrays",
    title: "Drei Azubi-Namen ausgeben",
    description: "Lege ein Array mit drei Namen an und gib alle Namen in der gespeicherten Reihenfolge aus.",
    requirements: [
      "Verwende `String[]`.",
      "Greife mit Index 0, 1 und 2 auf die Werte zu.",
      "Gib jeden Namen in einer eigenen Zeile aus."
    ],
    output: "Maya\nNoah\nLea"
  },
  {
    level: "Grundlagen plus",
    topic: "Schleifen",
    title: "Anwesenheiten zählen",
    description: "Zähle in einem `boolean[]`, wie viele Azubis heute anwesend sind.",
    requirements: [
      "Verwende ein Array mit `true`, `false`, `true`, `true`.",
      "Nutze eine Schleife.",
      "Erhöhe einen Zähler nur bei `true`."
    ],
    output: "Anwesend: 3"
  },
  {
    level: "Grundlagen plus",
    topic: "ArrayList",
    title: "Gruppenliste erweitern",
    description: "Lege eine flexible Liste mit Azubi-Namen an, füge drei Namen hinzu und gib die Gruppengröße aus.",
    requirements: [
      "Verwende `ArrayList<String>`.",
      "Füge `Maya`, `Noah` und `Lea` mit `add` hinzu.",
      "Gib die Anzahl mit `size()` aus."
    ],
    output: "Gruppengröße: 3"
  },
  {
    level: "Mittel",
    topic: "Methoden",
    title: "Methode für Notenprüfung schreiben",
    description: "Schreibe eine Methode `needsSupport`, die für eine Note zurückgibt, ob Unterstützung nötig ist.",
    requirements: [
      "Die Methode bekommt eine `double`-Note als Parameter.",
      "Sie gibt `true` zurück, wenn die Note schlechter als 4.0 ist.",
      "Gib das Ergebnis für 4.3 aus."
    ],
    output: "true"
  },
  {
    level: "Mittel",
    topic: "Methoden und Arrays",
    title: "Durchschnitt als Methode",
    description: "Schreibe eine Methode `averageGrade`, die den Durchschnitt eines Noten-Arrays berechnet.",
    requirements: [
      "Die Methode bekommt `double[] lastGrades`.",
      "Nutze eine Schleife für die Summe.",
      "Gib den Durchschnitt für 2.0, 2.3 und 1.7 aus."
    ],
    output: "2.0"
  },
  {
    level: "Mittel",
    topic: "Scanner",
    title: "Namen über die Konsole einlesen",
    description: "Lies einen Namen über die Konsole ein und begrüße den Azubi mit diesem Namen.",
    requirements: [
      "Verwende `Scanner` zum Einlesen.",
      "Lies eine komplette Textzeile.",
      "Gib danach eine Begrüßung aus."
    ],
    output: "Eingabe: Maya\nHallo Maya",
    concept: {
      title: "Neues Konzept: Scanner",
      text: "`Scanner` kann Eingaben aus der Konsole lesen. Dafür wird er mit `System.in` verbunden. Mit `nextLine()` liest du eine ganze Textzeile.",
      example: `import java.util.Scanner;\n\nScanner scanner = new Scanner(System.in);\nString firstName = scanner.nextLine();\nSystem.out.println("Hallo " + firstName);`
    }
  },
  {
    level: "Mittel plus",
    topic: "Klassen",
    title: "Azubi-Klasse modellieren",
    description: "Erstelle eine Klasse `Apprentice` mit Vorname, Lehrjahr und Anwesenheit und gib die Daten eines Objekts aus.",
    requirements: [
      "Lege Felder (Attribute) für `firstName`, `trainingYear` und `presentToday` an.",
      "Erzeuge ein Objekt für Maya.",
      "Gib Vorname und Lehrjahr aus."
    ],
    output: "Maya\n1"
  },
  {
    level: "Mittel plus",
    topic: "Objekte in Listen",
    title: "Objektliste durchsuchen",
    description: "Lege mehrere Azubi-Objekte in eine Liste und gib nur die anwesenden Azubis aus.",
    requirements: [
      "Verwende `ArrayList<Apprentice>`.",
      "Jedes Objekt soll einen Namen und `presentToday` haben.",
      "Nutze eine Schleife und eine `if`-Bedingung."
    ],
    output: "Maya\nLea"
  },
  {
    level: "Fortgeschritten",
    topic: "Kapselung",
    title: "Gültiges Lehrjahr schützen",
    description: "Kapsele das Lehrjahr und verhindere, dass Werte außerhalb von 1 bis 3 übernommen werden.",
    requirements: [
      "Verwende ein `private int trainingYear`.",
      "Schreibe einen Setter mit Prüfung.",
      "Gib nach einem gültigen Setzen das Lehrjahr aus."
    ],
    output: "Lehrjahr: 2"
  },
  {
    level: "Fortgeschritten",
    topic: "Fehlerbehandlung",
    title: "Ungültige Note melden",
    description: "Schreibe eine Prüfung, die bei einer ungültigen Note eine `IllegalArgumentException` auslöst und diese auffängt.",
    requirements: [
      "Noten sind nur von 1.0 bis 6.0 gültig.",
      "Teste den Wert 7.0.",
      "Fange den Fehler mit `try/catch` ab."
    ],
    output: "Ungültige Note",
    concept: {
      title: "Neues Konzept: Exception bewusst auslösen",
      text: "Mit `throw new IllegalArgumentException(...)` meldest du, dass ein übergebener Wert nicht erlaubt ist. Mit `catch` kannst du darauf reagieren.",
      example: `try {\n    throw new IllegalArgumentException("Ungültige Note");\n} catch (IllegalArgumentException error) {\n    System.out.println(error.getMessage());\n}`
    }
  }
];

const learningTracks = [
  {
    id: "fundamentals",
    title: "Java Grundlagen",
    subtitle: "Grundlagenpfad ohne Enums und Recap",
    description: "Starte mit Variablen, Datentypen, Kontrollstrukturen, Arrays, Listen, Methoden, Klassen, Kapselung und Fehlerbehandlung.",
    moduleIds: [
      "variables",
      "data-types",
      "control-flow",
      "arrays",
      "loops",
      "lists",
      "methods",
      "classes",
      "object-lists",
      "encapsulation",
      "error-handling"
    ],
    showTasks: true
  },
  {
    id: "enums",
    title: "Exkurs: Enums",
    subtitle: "Feste Auswahlwerte und Labels",
    description: "Lerne Enums als feste Auswahlwerte kennen und erweitere sie um einfache Labels für lesbare Ausgaben.",
    moduleIds: ["enums", "enum-properties"],
    showTasks: false
  },
  {
    id: "oop",
    title: "Java OOP",
    subtitle: "Objektorientierung wiederholen",
    description: "Wiederhole den Unterschied zwischen Klassen, Objekten, Instanzen, Feldern bzw. Attributen und Konstruktoren.",
    moduleIds: ["classes-objects-recap"],
    showTasks: false
  }
];

let activeModuleIndex = 0;
let activeView = "home";
let activeTrackId = null;
let previousViewBeforeGlossary = "home";

const moduleNav = document.querySelector("#moduleNav");
const moduleTitle = document.querySelector("#moduleTitle");
const conceptHeading = document.querySelector("#conceptHeading");
const conceptContent = document.querySelector("#conceptContent");
const examplesContent = document.querySelector("#examplesContent");
const quizContent = document.querySelector("#quizContent");
const codeContent = document.querySelector("#codeContent");
const glossaryButton = document.querySelector("#glossaryButton");
const conceptSection = document.querySelector("#conceptSection");
const examplesSection = document.querySelector("#examplesSection");
const quizSection = document.querySelector("#quizSection");
const moduleTasksSection = document.querySelector("#moduleTasksSection");
const moduleTasksContent = document.querySelector("#moduleTasksContent");
const codeSection = document.querySelector("#codeSection");
const codeSectionHeading = document.querySelector("#codeSectionHeading");

function renderNav() {
  moduleNav.innerHTML = "";
  const homeButton = document.createElement("button");
  homeButton.type = "button";
  homeButton.className = `module-button${activeView === "home" ? " active" : ""}`;
  homeButton.innerHTML = `
    <span class="module-number">S</span>
    <span>
      <span class="module-title">Startseite</span>
      <span class="module-subtitle">Lernbereich auswählen</span>
    </span>
  `;
  homeButton.addEventListener("click", () => {
    activeView = "home";
    activeTrackId = null;
    render();
  });
  moduleNav.appendChild(homeButton);

  const activeTrack = getActiveTrack();
  if (!activeTrack) {
    return;
  }

  const trackLabel = document.createElement("div");
  trackLabel.className = "track-label";
  trackLabel.textContent = activeTrack.title;
  moduleNav.appendChild(trackLabel);

  getTrackModules(activeTrack).forEach(({ module, index }) => {
    if (module.disabled) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-button${activeView === "module" && index === activeModuleIndex ? " active" : ""}`;
    button.innerHTML = `
      <span class="module-number">${module.number}</span>
      <span>
        <span class="module-title">${module.title}</span>
        <span class="module-subtitle">${module.subtitle}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      activeModuleIndex = index;
      activeView = "module";
      render();
    });
    moduleNav.appendChild(button);
  });

  if (!activeTrack.showTasks) {
    return;
  }

  const tasksButton = document.createElement("button");
  tasksButton.type = "button";
  tasksButton.className = `module-button task-nav-button${activeView === "tasks" ? " active" : ""}`;
  tasksButton.innerHTML = `
    <span class="module-number">★</span>
    <span>
      <span class="module-title">Aufgaben</span>
      <span class="module-subtitle">Implementieren und Output vergleichen</span>
    </span>
  `;
  tasksButton.addEventListener("click", () => {
    activeView = "tasks";
    render();
  });
  moduleNav.appendChild(tasksButton);
}

function getActiveTrack() {
  return learningTracks.find((track) => track.id === activeTrackId) ?? null;
}

function getTrackModules(track) {
  return track.moduleIds
    .map((moduleId) => {
      const index = modules.findIndex((module) => module.id === moduleId);
      return index === -1 ? null : { module: modules[index], index };
    })
    .filter(Boolean);
}

function selectTrack(trackId) {
  const track = learningTracks.find((candidate) => candidate.id === trackId);
  if (!track) {
    return;
  }

  const firstModule = getTrackModules(track).find(({ module }) => !module.disabled);
  if (!firstModule) {
    return;
  }

  activeTrackId = track.id;
  activeModuleIndex = firstModule.index;
  activeView = "module";
  render();
}

function renderModule() {
  const module = modules[activeModuleIndex];
  const glossaryState = new Set();
  const glossary = (value) => annotateGlossary(value, glossaryState);
  const hasConceptContent = module.concepts.length > 0 || module.explanation.length > 0;
  const hasExamples = module.examples.length > 0;
  moduleTitle.textContent = `${module.number} ${module.title}`;
  conceptHeading.textContent = "Konzept";
  codeSectionHeading.textContent = module.completionTitle ?? "Code-Vervollständigung";

  conceptSection.hidden = !hasConceptContent;
  examplesSection.hidden = !hasExamples;

  conceptContent.innerHTML = `
    <ul class="concept-list">
      ${module.concepts.map((item) => `<li>${glossary(item)}</li>`).join("")}
    </ul>
    ${module.explanation.map((section) => `
      <h4>${glossary(section.heading)}</h4>
      <p>${glossary(section.text)}</p>
    `).join("")}
  `;

  examplesContent.innerHTML = hasExamples ? `
      ${shouldShowExampleContext(module) ? renderExampleContext() : ""}
      <div class="example-grid">
        ${module.examples.map((example, exampleIndex) => `
          <div class="example-item">
            <h4>${glossary(example.title)}</h4>
            <div class="code-runner">
              <div class="code-gutter">
                <button class="run-icon-button" type="button" data-example-run="${exampleIndex}" aria-label="Code ausführen">
                  <span aria-hidden="true">▶</span>
                </button>
              </div>
              <pre class="code-block"><code>${escapeHtml(example.code)}</code></pre>
            </div>
            <div class="fake-output" data-example-output="${exampleIndex}" hidden>
              <div class="fake-output-label">Konsolenausgabe</div>
              <pre>${escapeHtml(example.output ?? "Keine Ausgabe")}</pre>
            </div>
            ${example.info ? `
              <details class="info-box">
                <summary>${escapeHtml(example.info.title)}</summary>
                <div class="info-box-content">
                  ${example.info.body.map((paragraph) => `<p>${formatInlineCode(paragraph)}</p>`).join("")}
                </div>
              </details>
            ` : ""}
            ${(example.infoBlocks ?? []).map((infoBlock) => `
              <details class="info-box">
                <summary>${escapeHtml(infoBlock.title)}</summary>
                <div class="info-box-content">
                  ${infoBlock.body.map((paragraph) => `<p>${formatInlineCode(paragraph)}</p>`).join("")}
                </div>
              </details>
            `).join("")}
          </div>
        `).join("")}
      </div>
    ` : "";

  examplesContent.querySelectorAll("[data-example-run]").forEach((button) => {
    button.addEventListener("click", () => {
      const output = examplesContent.querySelector(`[data-example-output="${button.dataset.exampleRun}"]`);
      output.hidden = !output.hidden;
      button.classList.toggle("active", !output.hidden);
      button.setAttribute("aria-label", output.hidden ? "Code ausführen" : "Ausgabe ausblenden");
    });
  });

  renderQuiz(module);
  renderModuleTasks(module);
  renderCompletion(module, glossary);
}

function shouldShowExampleContext(module) {
  return Number(module.number) >= 4;
}

function renderExampleContext() {
  return `
    <section class="example-context" aria-label="${escapeHtml(exampleContext.title)}">
      <div class="group-overview" aria-hidden="true">
        <div class="group-overview-header">
          <span>AE-2026</span>
          <strong>Ausbildungsgruppe</strong>
        </div>
        <div class="group-overview-list">
          <span>Maya</span>
          <span>Noah</span>
          <span>Lea</span>
        </div>
      </div>
      <div>
        <h4>${escapeHtml(exampleContext.title)}</h4>
        <p>${escapeHtml(exampleContext.text)}</p>
        <dl class="group-field-list">
          ${exampleContext.fields.map((field) => {
            const [label, ...valueParts] = field.split(":");
            return `
              <div>
                <dt>${escapeHtml(label)}</dt>
                <dd>${escapeHtml(valueParts.join(":").trim())}</dd>
              </div>
            `;
          }).join("")}
        </dl>
      </div>
    </section>
  `;
}

function renderQuiz(module) {
  quizContent.innerHTML = module.quiz.map((question, questionIndex) => {
    const options = shuffleOptions(question.options);
    return `
      <div class="quiz-question" data-question="${questionIndex}">
        <p><strong>${questionIndex + 1}. ${formatInlineCode(question.question)}</strong></p>
        ${question.code ? `
          <div class="code-runner quiz-code">
            <div class="code-gutter muted-gutter">
              <span class="run-icon-placeholder" aria-hidden="true">▶</span>
            </div>
            <pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>
          </div>
        ` : ""}
        <div class="quiz-options">
          ${options.map((option) => `
            <button class="choice-button" type="button" data-question="${questionIndex}" data-option="${option.originalIndex}">
              ${formatInlineCode(option.text)}
            </button>
          `).join("")}
        </div>
        <div class="feedback" data-feedback="${questionIndex}"></div>
      </div>
    `;
  }).join("");

  quizContent.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.question);
      const optionIndex = Number(button.dataset.option);
      answerQuiz(module, questionIndex, optionIndex);
    });
  });
}

function shuffleOptions(options) {
  const shuffled = options.map((text, originalIndex) => ({ text, originalIndex }));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function answerQuiz(module, questionIndex, optionIndex) {
  const question = module.quiz[questionIndex];
  const questionElement = quizContent.querySelector(`[data-question="${questionIndex}"]`);
  const feedback = quizContent.querySelector(`[data-feedback="${questionIndex}"]`);
  const buttons = questionElement.querySelectorAll(".choice-button");

  if (optionIndex === question.correct) {
    buttons.forEach((button) => {
      const currentOption = Number(button.dataset.option);
      button.disabled = true;
      button.classList.toggle("correct", currentOption === question.correct);
      button.classList.remove("incorrect");
    });
    feedback.textContent = `Richtig. ${question.explanation}`;
    feedback.className = "feedback ok";
  } else {
    buttons.forEach((button) => {
      const currentOption = Number(button.dataset.option);
      if (currentOption === optionIndex) {
        button.disabled = true;
        button.classList.add("incorrect");
      }
    });
    feedback.textContent = question.wrongExplanation ?? "Noch nicht. Versuch es noch einmal.";
    feedback.className = "feedback error";
  }
}

function renderModuleTasks(module) {
  const tasks = module.implementationTasks ?? [];

  if (tasks.length === 0) {
    moduleTasksSection.hidden = true;
    moduleTasksContent.innerHTML = "";
    return;
  }

  moduleTasksSection.hidden = false;
  moduleTasksContent.innerHTML = `
    <div class="task-page-intro">
      <p>Diese Sammlung ist zum selbstständigen Implementieren gedacht. Schreibe jeweils ein kleines Java-Programm und vergleiche deine Konsolenausgabe mit der erwarteten Ausgabe.</p>
      <p>Die Aufgaben sind bewusst gemischt: einige passen direkt zu den frühen Grundlagen, andere verlangen Methoden, Klassen, Kapselung oder Fehlerbehandlung.</p>
    </div>
    <div class="task-list">
      ${tasks.map((task, index) => renderImplementationTask(task, index)).join("")}
    </div>
  `;
}

function renderHomePage() {
  moduleTitle.textContent = "Startseite";
  conceptHeading.textContent = "Lernbereich auswählen";
  conceptContent.innerHTML = `
    <div class="home-intro">
      <p>Wähle aus, womit du starten möchtest. Die Navigation links zeigt danach nur die passenden Module für diesen Bereich.</p>
    </div>
    <div class="track-grid">
      ${learningTracks.map((track) => `
        <button class="track-card" type="button" data-track="${escapeHtml(track.id)}">
          <span class="track-card-kicker">${escapeHtml(track.subtitle)}</span>
          <span class="track-card-title">${escapeHtml(track.title)}</span>
          <span class="track-card-description">${escapeHtml(track.description)}</span>
        </button>
      `).join("")}
    </div>
  `;
  examplesContent.innerHTML = "";
  quizContent.innerHTML = "";
  moduleTasksContent.innerHTML = "";
  codeContent.innerHTML = "";

  conceptContent.querySelectorAll("[data-track]").forEach((button) => {
    button.addEventListener("click", () => {
      selectTrack(button.dataset.track);
    });
  });
}

function renderGlossaryPage() {
  moduleTitle.textContent = "Glossar";
  conceptHeading.textContent = "Begriffe";
  conceptContent.innerHTML = `
    <div class="glossary-search">
      <label for="glossarySearchInput">Glossar durchsuchen</label>
      <input id="glossarySearchInput" type="search" autocomplete="off" placeholder="Suchbegriff eingeben">
    </div>
    <div id="glossaryResults" class="glossary-table"></div>
  `;
  examplesContent.innerHTML = "";
  quizContent.innerHTML = "";
  moduleTasksContent.innerHTML = "";
  codeContent.innerHTML = "";

  const input = document.querySelector("#glossarySearchInput");
  const results = document.querySelector("#glossaryResults");
  const renderResults = () => {
    results.innerHTML = renderGlossaryResults(input.value);
  };

  input.addEventListener("input", renderResults);
  renderResults();
}

function renderTasksPage() {
  moduleTitle.textContent = "Implementierungsaufgaben";
  conceptHeading.textContent = "Aufgaben";
  conceptContent.innerHTML = `
    <div class="task-page-intro">
      <p>Diese Sammlung ist zum selbstständigen Implementieren gedacht. Schreibe jeweils ein kleines Java-Programm und vergleiche deine Konsolenausgabe mit der erwarteten Ausgabe.</p>
      <p>Die Aufgaben sind bewusst gemischt: einige passen direkt zu den frühen Grundlagen, andere verlangen Methoden, Klassen, Kapselung oder Fehlerbehandlung.</p>
    </div>
    <div class="task-list">
      ${implementationTasks.map((task, index) => renderImplementationTask(task, index)).join("")}
    </div>
  `;
  examplesContent.innerHTML = "";
  quizContent.innerHTML = "";
  moduleTasksContent.innerHTML = "";
  codeContent.innerHTML = "";
}

function renderImplementationTask(task, index) {
  return `
    <article class="implementation-task">
      <header class="task-header">
        <div>
          <span class="task-index">Aufgabe ${index + 1}</span>
          <h4>${escapeHtml(task.title)}</h4>
        </div>
        <div class="task-meta">
          <span>${escapeHtml(task.level)}</span>
          <span>${escapeHtml(task.topic)}</span>
        </div>
      </header>
      <p>${formatInlineCode(task.description)}</p>
      <div class="task-section">
        <h5>Anforderungen</h5>
        <ul>
          ${task.requirements.map((requirement) => `<li>${formatInlineCode(requirement)}</li>`).join("")}
        </ul>
      </div>
      ${task.concept ? `
        <details class="task-concept">
          <summary>${escapeHtml(task.concept.title)}</summary>
          <div class="task-concept-body">
            <p>${formatInlineCode(task.concept.text)}</p>
            <pre class="code-block"><code>${escapeHtml(task.concept.example)}</code></pre>
          </div>
        </details>
      ` : ""}
      <div class="expected-output">
        <div class="fake-output-label">Erwartete Konsolenausgabe</div>
        <pre>${escapeHtml(task.output)}</pre>
      </div>
    </article>
  `;
}

function renderGlossaryResults(query) {
  const normalizedQuery = normalizeSearch(query);
  const results = getGlossaryResults(normalizedQuery);

  if (results.length === 0) {
    return `<p class="empty-state">Keine passenden Begriffe gefunden.</p>`;
  }

  return `
    <div class="glossary-table-header" aria-hidden="true">
      <span>Titel</span>
      <span>Beschreibung</span>
    </div>
    ${results.map((term) => `
      <article class="glossary-row">
        <h4>${highlightSearch(term.title, normalizedQuery)}</h4>
        <p>${highlightSearch(term.description, normalizedQuery)}</p>
      </article>
    `).join("")}
  `;
}

function getGlossaryResults(normalizedQuery) {
  if (!normalizedQuery) {
    return glossaryTerms;
  }

  const titleMatches = [];
  const descriptionMatches = [];

  glossaryTerms.forEach((term) => {
    const title = normalizeSearch(term.title);
    const description = normalizeSearch(term.description);

    if (title.includes(normalizedQuery)) {
      titleMatches.push(term);
      return;
    }

    if (description.includes(normalizedQuery)) {
      descriptionMatches.push(term);
    }
  });

  return [...titleMatches, ...descriptionMatches];
}

function normalizeSearch(value) {
  return String(value).trim().toLocaleLowerCase("de-DE");
}

function highlightSearch(value, normalizedQuery) {
  const raw = String(value);
  if (!normalizedQuery) {
    return escapeHtml(raw);
  }

  const normalizedRaw = normalizeSearch(raw);
  const index = normalizedRaw.indexOf(normalizedQuery);

  if (index === -1) {
    return escapeHtml(raw);
  }

  const end = index + normalizedQuery.length;
  return `${escapeHtml(raw.slice(0, index))}<mark>${escapeHtml(raw.slice(index, end))}</mark>${escapeHtml(raw.slice(end))}`;
}

function renderCompletion(module, glossary = escapeHtml) {
  const codeHtml = module.completion.parts.map((part) => {
    if (part.text !== undefined) {
      return escapeHtml(part.text);
    }

    return `<input class="blank-input" data-blank="${escapeHtml(part.blank)}" aria-label="Code-Lücke ${escapeHtml(part.blank)}">`;
  }).join("");

  codeContent.innerHTML = `
    <div class="completion">
      <p>${glossary(module.completion.prompt)}</p>
      <div class="completion-code">${codeHtml}</div>
      <button class="primary-button" id="checkCodeButton" type="button">${escapeHtml(module.completionButtonLabel ?? "Code prüfen")}</button>
      <div class="fake-output" id="completionOutput" hidden>
        <div class="fake-output-label">Konsolenausgabe</div>
        <pre>${escapeHtml(module.completion.output ?? "Keine Ausgabe")}</pre>
      </div>
      <div class="feedback" id="codeFeedback"></div>
    </div>
  `;

  document.querySelector("#checkCodeButton").addEventListener("click", () => {
    checkCompletion(module);
  });
}

function checkCompletion(module) {
  const inputs = [...codeContent.querySelectorAll(".blank-input")];
  let allCorrect = true;

  inputs.forEach((input) => {
    const blank = module.completion.parts.find((part) => part.blank === input.dataset.blank);
    const value = normalizeAnswer(input.value);
    const correct = blank.answers.some((answer) => normalizeAnswer(answer) === value);
    input.classList.toggle("correct", correct);
    input.classList.toggle("incorrect", !correct);
    allCorrect = allCorrect && correct;
  });

  const feedback = document.querySelector("#codeFeedback");
  if (allCorrect) {
    feedback.textContent = "Richtig. Die Code-Lücken passen.";
    feedback.className = "feedback ok";
    document.querySelector("#completionOutput").hidden = false;
  } else {
    feedback.textContent = "Noch nicht. Prüfe die markierten Lücken mit gestricheltem Rahmen.";
    feedback.className = "feedback error";
    document.querySelector("#completionOutput").hidden = true;
  }
}

function normalizeAnswer(value) {
  return value.trim().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function annotateGlossary(value, usedTerms) {
  const raw = String(value);
  let cursor = 0;
  let html = "";

  while (cursor < raw.length) {
    let bestMatch = null;

    for (const term of glossaryTerms) {
      if (usedTerms.has(term.title)) {
        continue;
      }

      for (const match of term.matches) {
        const regex = createGlossaryRegex(match);
        const result = regex.exec(raw.slice(cursor));
        if (!result) {
          continue;
        }

        const candidate = {
          term,
          text: result[0],
          index: cursor + result.index
        };

        if (
          !bestMatch ||
          candidate.index < bestMatch.index ||
          (candidate.index === bestMatch.index && candidate.text.length > bestMatch.text.length)
        ) {
          bestMatch = candidate;
        }
      }
    }

    if (!bestMatch) {
      html += escapeHtml(raw.slice(cursor));
      break;
    }

    html += escapeHtml(raw.slice(cursor, bestMatch.index));
    html += renderGlossaryTerm(bestMatch.text, bestMatch.term);
    usedTerms.add(bestMatch.term.title);
    cursor = bestMatch.index + bestMatch.text.length;
  }

  return html;
}

function renderGlossaryTerm(text, term) {
  return `
    <span class="glossary-term" tabindex="0">
      ${escapeHtml(text)}
      <span class="glossary-popup" role="tooltip">
        <strong>${escapeHtml(term.title)}</strong>
        <span>${escapeHtml(term.description)}</span>
      </span>
    </span>
  `;
}

function createGlossaryRegex(match) {
  const escaped = escapeRegExp(match);

  if (/^[A-Za-z0-9_]+$/.test(match)) {
    return new RegExp(`\\b${escaped}\\b`);
  }

  return new RegExp(escaped);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatInlineCode(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function render() {
  renderNav();
  glossaryButton.classList.toggle("active", activeView === "glossary");
  if (activeView === "home") {
    conceptSection.hidden = false;
    examplesSection.hidden = true;
    quizSection.hidden = true;
    moduleTasksSection.hidden = true;
    codeSection.hidden = true;
    renderHomePage();
  } else if (activeView === "glossary") {
    conceptSection.hidden = false;
    examplesSection.hidden = true;
    quizSection.hidden = true;
    moduleTasksSection.hidden = true;
    codeSection.hidden = true;
    renderGlossaryPage();
  } else if (activeView === "tasks") {
    conceptSection.hidden = false;
    examplesSection.hidden = true;
    quizSection.hidden = true;
    moduleTasksSection.hidden = true;
    codeSection.hidden = true;
    renderTasksPage();
  } else {
    conceptSection.hidden = false;
    examplesSection.hidden = false;
    quizSection.hidden = false;
    codeSection.hidden = false;
    renderModule();
  }
}

glossaryButton.addEventListener("click", () => {
  if (activeView === "glossary") {
    activeView = previousViewBeforeGlossary;
  } else {
    previousViewBeforeGlossary = activeView;
    activeView = "glossary";
  }
  render();
});

render();
