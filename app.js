const modules = [
  {
    id: "variables",
    number: "01",
    title: "Variablen",
    subtitle: "Werte benennen und wiederverwenden",
    concepts: [
      "Eine Variable ist ein benannter Speicherplatz für einen Wert.",
      "In Java hat jede Variable einen Datentyp, zum Beispiel int oder String.",
      "Mit dem Gleichheitszeichen wird ein Wert zugewiesen. Das ist keine mathematische Gleichung.",
      "Ein guter Variablenname beschreibt, was gespeichert wird."
    ],
    explanation: [
      {
        heading: "Alltagsbild",
        text: "Eine Variable ist wie ein beschriftetes Fach. Auf dem Fach steht ein Name, im Fach liegt ein Wert. Wenn sich der Wert ändert, bleibt der Name gleich."
      },
      {
        heading: "Java-Regel",
        text: "Java will beim Anlegen wissen, welche Art von Wert in die Variable darf. Deshalb schreiben wir zuerst den Typ und dann den Namen."
      }
    ],
    examples: [
      {
        title: "Ein Ticket-Titel als Text",
        code: `String title = "Drucker defekt";\nSystem.out.println(title);`,
        output: "Drucker defekt",
        info: {
          title: "Was macht System.out.println?",
          body: [
            "`System.out.println(...)` schreibt etwas in die Konsole.",
            "Alles, was zwischen den Klammern steht, wird ausgegeben. Das kann ein fester Text sein oder der Inhalt einer Variable.",
            "Warum heißt es nicht einfach `println`? Java organisiert Befehle in Klassen und Objekten. `System` ist eine eingebaute Java-Klasse, `out` ist der Ausgabekanal zur Konsole und `println` ist die Methode, die auf diesem Ausgabekanal Text ausgibt.",
            "`println` bedeutet: ausgeben und danach in die nächste Zeile springen."
          ]
        }
      },
      {
        title: "Eine Ticket-ID als Zahl",
        code: `int ticketId = 7;\nSystem.out.println(ticketId);`,
        output: "7"
      },
      {
        title: "Wert später ändern",
        code: `String status = "OPEN";\nstatus = "IN_PROGRESS";\nSystem.out.println(status);`,
        output: "IN_PROGRESS"
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
        question: "Was passiert in Java bei `int ticketId = 5;`?",
        options: [
          "Eine Zahlvariable wird angelegt und bekommt den Wert 5",
          "Ein Text wird ausgegeben",
          "Ein neues Projekt wird erstellt",
          "Eine Schleife wird gestartet"
        ],
        correct: 0,
        explanation: "`int` ist der Datentyp für ganze Zahlen.",
        code: `int ticketId = 5;\nSystem.out.println(ticketId);`,
        output: "5"
      }
    ],
    completion: {
      prompt: "Vervollständige den Code, sodass Titel und ID eines Tickets gespeichert werden.",
      parts: [
        { text: "" },
        { blank: "typeTitle", answers: ["String"] },
        { text: " title = \"Passwort zurücksetzen\";\n" },
        { blank: "typeId", answers: ["int"] },
        { text: " ticketId = 12;\nSystem.out.println(title);\nSystem.out.println(ticketId);" }
      ],
      hint: "Text braucht String. Ganze Zahlen brauchen int.",
      output: "Passwort zurücksetzen\n12"
    }
  },
  {
    id: "data-types",
    number: "02",
    title: "Datentypen",
    subtitle: "Einfache und zusammengesetzte Werte",
    concepts: [
      "Einfache Datentypen speichern einzelne Werte, zum Beispiel int, double oder boolean.",
      "String ist ein Texttyp und wird im Einsteigerkurs wie ein einfacher Wert benutzt.",
      "Zusammengesetzte Datentypen fassen mehrere Werte zusammen, zum Beispiel Arrays, Listen oder eigene Klassen.",
      "Der Datentyp hilft Java, Fehler früh zu erkennen."
    ],
    explanation: [
      {
        heading: "Einfache Datentypen",
        text: "Ein einfacher Datentyp steht für einen einzelnen Wert: eine Zahl, eine Wahrheit oder ein Zeichen."
      },
      {
        heading: "Zusammengesetzte Datentypen",
        text: "Ein Ticket besteht aus mehreren Werten: ID, Titel, Beschreibung, Status. Dafür eignet sich später eine Klasse."
      }
    ],
    examples: [
      {
        title: "Einfache Datentypen",
        code: `int id = 3;\ndouble hours = 1.5;\nboolean urgent = true;\nString title = "Software installieren";\n\nSystem.out.println(id);\nSystem.out.println(hours);\nSystem.out.println(urgent);\nSystem.out.println(title);`,
        output: "3\n1.5\ntrue\nSoftware installieren"
      },
      {
        title: "Array als zusammengesetzter Datentyp",
        code: `String[] statuses = {"OPEN", "IN_PROGRESS", "CLOSED"};\nSystem.out.println(statuses[0]);`,
        output: "OPEN"
      },
      {
        title: "Klasse als zusammengesetzter Datentyp",
        code: `Ticket ticket = new Ticket();\nticket.title = "Drucker defekt";\nticket.status = "OPEN";\n\nSystem.out.println(ticket.title);\nSystem.out.println(ticket.status);`,
        output: "Drucker defekt\nOPEN"
      }
    ],
    quiz: [
      {
        question: "Welcher Datentyp passt für wahr/falsch?",
        options: ["boolean", "int", "String", "double"],
        correct: 0,
        explanation: "`boolean` speichert true oder false.",
        code: `boolean urgent = true;\nSystem.out.println(urgent);`,
        output: "true"
      },
      {
        question: "Was ist ein Beispiel für einen zusammengesetzten Datentyp?",
        options: ["Eine Klasse Ticket mit mehreren Feldern", "Die Zahl 7", "Der Wert true", "Ein einzelnes Zeichen"],
        correct: 0,
        explanation: "Eine Klasse kann mehrere Werte zu einem Objekt zusammenfassen."
      }
    ],
    completion: {
      prompt: "Wähle passende Datentypen für ein Ticket.",
      parts: [
        { blank: "id", answers: ["int"] },
        { text: " ticketId = 3;\n" },
        { blank: "urgent", answers: ["boolean"] },
        { text: " urgent = true;\n" },
        { blank: "title", answers: ["String"] },
        { text: " title = \"Drucker defekt\";\n" },
        { blank: "duration", answers: ["double"] },
        { text: " estimatedHours = 2.5;" }
      ],
      hint: "Achte darauf, ob ein Wert Text, ganze Zahl, Kommazahl oder wahr/falsch ist.",
      output: "3\ntrue\nDrucker defekt\n2.5"
    }
  },
  {
    id: "control-flow",
    number: "03",
    title: "Kontrollstrukturen",
    subtitle: "Bedingungen, Schleifen und Fallunterscheidung",
    concepts: [
      "Anweisungen werden normalerweise von oben nach unten ausgeführt.",
      "Mit if/else kann Code nur unter bestimmten Bedingungen laufen.",
      "Mit Schleifen kann Code wiederholt werden.",
      "Mit switch kann man mehrere feste Fälle übersichtlich unterscheiden."
    ],
    explanation: [
      {
        heading: "Bedingung",
        text: "Eine Bedingung entscheidet, welcher Code ausgeführt wird. Beispiel: Wenn ein Ticket kritisch ist, soll eine Warnung erscheinen."
      },
      {
        heading: "Schleife",
        text: "Eine Schleife ist nützlich, wenn man mehrere Tickets nacheinander bearbeiten oder ausgeben will."
      }
    ],
    examples: [
      {
        title: "if/else",
        code: `boolean critical = true;\n\nif (critical) {\n    System.out.println("Sofort bearbeiten");\n} else {\n    System.out.println("Normal einplanen");\n}`,
        output: "Sofort bearbeiten"
      },
      {
        title: "for-Schleife",
        code: `String[] tickets = {"Drucker", "Passwort", "Software"};\n\nfor (String ticket : tickets) {\n    System.out.println(ticket);\n}`,
        output: "Drucker\nPasswort\nSoftware"
      },
      {
        title: "switch",
        code: `String status = "OPEN";\n\nswitch (status) {\n    case "OPEN" -> System.out.println("Neu");\n    case "CLOSED" -> System.out.println("Erledigt");\n    default -> System.out.println("Unbekannt");\n}`,
        output: "Neu"
      }
    ],
    quiz: [
      {
        question: "Welche Kontrollstruktur passt, wenn Code nur bei kritischen Tickets laufen soll?",
        options: ["if", "for", "class", "String"],
        correct: 0,
        explanation: "`if` prüft eine Bedingung.",
        code: `boolean critical = true;\n\nif (critical) {\n    System.out.println("Sofort bearbeiten");\n}`,
        output: "Sofort bearbeiten"
      },
      {
        question: "Welche Kontrollstruktur passt, wenn alle Tickets einer Liste ausgegeben werden sollen?",
        options: ["for-Schleife", "int", "return", "JDK"],
        correct: 0,
        explanation: "Eine Schleife wiederholt Code für mehrere Elemente.",
        code: `String[] tickets = {"A", "B", "C"};\n\nfor (String ticket : tickets) {\n    System.out.println(ticket);\n}`,
        output: "A\nB\nC"
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
        explanation: "`switch` ist praktisch für feste Auswahlwerte wie Menüpunkte oder Status."
      }
    ],
    completion: {
      prompt: "Vervollständige die Bedingung und die Schleife.",
      parts: [
        { text: "boolean critical = true;\n\n" },
        { blank: "ifKeyword", answers: ["if"] },
        { text: " (critical) {\n    System.out.println(\"Sofort bearbeiten\");\n}\n\nString[] tickets = {\"A\", \"B\", \"C\"};\n" },
        { blank: "forKeyword", answers: ["for"] },
        { text: " (String ticket : tickets) {\n    System.out.println(ticket);\n}" }
      ],
      hint: "Eine Bedingung startet mit if. Eine Wiederholung über mehrere Werte startet hier mit for.",
      output: "Sofort bearbeiten\nA\nB\nC"
    }
  }
];

const STORAGE_KEY = "java-learning-platform-progress-v1";

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
    description: "Datentyp für Text, zum Beispiel \"Drucker defekt\"."
  },
  {
    title: "boolean",
    matches: ["boolean"],
    description: "Datentyp für wahr oder falsch: true oder false."
  },
  {
    title: "double",
    matches: ["double"],
    description: "Datentyp für Kommazahlen, zum Beispiel 2.5."
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
    description: "Kontrollstruktur für mehrere feste Fälle, zum Beispiel Menüauswahl oder Status."
  }
];

let activeModuleIndex = 0;
let progress = loadProgress();

const moduleNav = document.querySelector("#moduleNav");
const moduleTitle = document.querySelector("#moduleTitle");
const conceptContent = document.querySelector("#conceptContent");
const examplesContent = document.querySelector("#examplesContent");
const quizContent = document.querySelector("#quizContent");
const codeContent = document.querySelector("#codeContent");
const quizCounter = document.querySelector("#quizCounter");
const codeCounter = document.querySelector("#codeCounter");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const resetProgressButton = document.querySelector("#resetProgressButton");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getModuleProgress(moduleId) {
  if (!progress[moduleId]) {
    progress[moduleId] = { quiz: {}, codeDone: false };
  }
  return progress[moduleId];
}

function renderNav() {
  moduleNav.innerHTML = "";
  modules.forEach((module, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-button${index === activeModuleIndex ? " active" : ""}`;
    button.innerHTML = `
      <span class="module-number">${module.number}</span>
      <span>
        <span class="module-title">${module.title}</span>
        <span class="module-subtitle">${module.subtitle}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      activeModuleIndex = index;
      render();
    });
    moduleNav.appendChild(button);
  });
}

function renderModule() {
  const module = modules[activeModuleIndex];
  const glossaryState = new Set();
  const glossary = (value) => annotateGlossary(value, glossaryState);
  moduleTitle.textContent = `${module.number} ${module.title}`;

  conceptContent.innerHTML = `
    <ul class="concept-list">
      ${module.concepts.map((item) => `<li>${glossary(item)}</li>`).join("")}
    </ul>
    ${module.explanation.map((section) => `
      <h4>${glossary(section.heading)}</h4>
      <p>${glossary(section.text)}</p>
    `).join("")}
  `;

  examplesContent.innerHTML = `
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
        </div>
      `).join("")}
    </div>
  `;

  examplesContent.querySelectorAll("[data-example-run]").forEach((button) => {
    button.addEventListener("click", () => {
      const output = examplesContent.querySelector(`[data-example-output="${button.dataset.exampleRun}"]`);
      output.hidden = !output.hidden;
      button.classList.toggle("active", !output.hidden);
      button.setAttribute("aria-label", output.hidden ? "Code ausführen" : "Ausgabe ausblenden");
    });
  });

  renderQuiz(module, glossary);
  renderCompletion(module, glossary);
}

function renderQuiz(module, glossary = escapeHtml) {
  const moduleProgress = getModuleProgress(module.id);
  const solvedCount = Object.values(moduleProgress.quiz).filter(Boolean).length;
  quizCounter.textContent = `${solvedCount}/${module.quiz.length}`;

  quizContent.innerHTML = module.quiz.map((question, questionIndex) => {
    const solved = moduleProgress.quiz[questionIndex];
    return `
      <div class="quiz-question" data-question="${questionIndex}">
        <p><strong>${questionIndex + 1}. ${glossary(question.question)}</strong></p>
        ${question.code ? `
          <div class="code-runner quiz-code">
            <div class="code-gutter muted-gutter">
              <span class="run-icon-placeholder" aria-hidden="true">▶</span>
            </div>
            <pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>
          </div>
          <div class="fake-output quiz-output" data-quiz-output="${questionIndex}" ${solved ? "" : "hidden"}>
            <div class="fake-output-label">Konsolenausgabe</div>
            <pre>${escapeHtml(question.output ?? "Keine Ausgabe")}</pre>
          </div>
        ` : ""}
        <div class="quiz-options">
          ${question.options.map((option, optionIndex) => `
            <button class="choice-button" type="button" data-question="${questionIndex}" data-option="${optionIndex}" ${solved ? "disabled" : ""}>
              ${glossary(option)}
            </button>
          `).join("")}
        </div>
        <div class="feedback ${solved ? "ok" : ""}" data-feedback="${questionIndex}">
          ${solved ? `Richtig. ${escapeHtml(question.explanation)}` : ""}
        </div>
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

function answerQuiz(module, questionIndex, optionIndex) {
  const question = module.quiz[questionIndex];
  const moduleProgress = getModuleProgress(module.id);
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
    moduleProgress.quiz[questionIndex] = true;
    feedback.textContent = `Richtig. ${question.explanation}`;
    feedback.className = "feedback ok";
    const output = quizContent.querySelector(`[data-quiz-output="${questionIndex}"]`);
    if (output) {
      output.hidden = false;
    }
  } else {
    buttons.forEach((button) => {
      const currentOption = Number(button.dataset.option);
      if (currentOption === optionIndex) {
        button.disabled = true;
        button.classList.add("incorrect");
      }
    });
    feedback.textContent = `Noch nicht. ${question.explanation}`;
    feedback.className = "feedback error";
  }

  saveProgress();
  updateProgress();
  renderNav();
  quizCounter.textContent = `${Object.values(moduleProgress.quiz).filter(Boolean).length}/${module.quiz.length}`;
}

function renderCompletion(module, glossary = escapeHtml) {
  const moduleProgress = getModuleProgress(module.id);
  codeCounter.textContent = moduleProgress.codeDone ? "erledigt" : "offen";

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
      <p class="hint">${glossary(module.completion.hint)}</p>
      <button class="primary-button" id="checkCodeButton" type="button">Code prüfen</button>
      <div class="fake-output" id="completionOutput" ${moduleProgress.codeDone ? "" : "hidden"}>
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
    getModuleProgress(module.id).codeDone = true;
    feedback.textContent = "Richtig. Die Code-Lücken passen.";
    feedback.className = "feedback ok";
    document.querySelector("#completionOutput").hidden = false;
  } else {
    feedback.textContent = "Noch nicht. Prüfe die rot markierten Lücken.";
    feedback.className = "feedback error";
    document.querySelector("#completionOutput").hidden = true;
  }

  saveProgress();
  updateProgress();
  renderNav();
  codeCounter.textContent = getModuleProgress(module.id).codeDone ? "erledigt" : "offen";
}

function normalizeAnswer(value) {
  return value.trim().replace(/\s+/g, " ");
}

function updateProgress() {
  let completed = 0;
  let total = 0;

  modules.forEach((module) => {
    const moduleProgress = getModuleProgress(module.id);
    completed += Object.values(moduleProgress.quiz).filter(Boolean).length;
    completed += moduleProgress.codeDone ? 1 : 0;
    total += module.quiz.length + 1;
  });

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
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
  renderModule();
  updateProgress();
}

resetProgressButton.addEventListener("click", () => {
  progress = {};
  saveProgress();
  render();
});

render();
