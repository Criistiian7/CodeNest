let questions = [
  {
    category: "JavaScript",
    question: "Which method is used to add an element to the end of an array?",
    choices: ["push()", "pop()", "shift()"],
    answer: "push()",
  },
  {
    category: "JavaScript",
    question: "What is the result of 2 + '2' in JavaScript?",
    choices: ["22", "4", "NaN"],
    answer: "22",
  },
  {
    category: "HTML",
    question: "Which tag is used to create a hyperlink?",
    choices: ["<a>", "<link>", "<p>"],
    answer: "<a>",
  },
  {
    category: "CSS",
    question: "Which property is used to change text color?",
    choices: ["font-color", "color", "text-color"],
    answer: "color",
  },
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a constant variable?",
    choices: ["var", "let", "const"],
    answer: "const",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
