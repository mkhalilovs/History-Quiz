"use strict";

//import data from "./data.json" assert { type: "json" };

// New Array for storing the JSON
let questionsArray = [
  {
    questions: [
      {
        id: 1,
        question: "When the Anastasian War(Byzantine-Sasanian) war took place?",
        answer1: "502–506 AD",
        answer2: "302-304 AD",
        answer3: "317 AD",
        answer4: "567 AD",
        correct: "a",
        picUrl:
          "https://saednews.com/storage/media-center/images/__en__ac-image-Qe1608550083Ra.jpeg",
      },
      {
        id: 2,
        question: "What was the result of The Anglo-French War of 1557–1559?",
        answer1: "English victory",
        answer2: "French victory",
        answer3: "Status quo ante bellum (Withdrawal of occupiers)",
        answer4: "War did not happen",
        correct: "b",
        picUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/1838_Fran%C3%A7ois-%C3%89douard_Picot_-_The_Siege_of_Calais.jpg/1200px-1838_Fran%C3%A7ois-%C3%89douard_Picot_-_The_Siege_of_Calais.jpg",
      },
      {
        id: 3,
        question: "What was the capital of the Kingdom of Serbia (1217–1346)?",
        answer1: "Belgrade",
        answer2: "Skopje",
        answer3: "Prizren",
        answer4: "Ras",
        correct: "d",
        picUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Serbian_Empire%2C_reconstruction.svg/1280px-Flag_of_the_Serbian_Empire%2C_reconstruction.svg.png",
      },
      {
        id: 4,
        question: "Which Ottoman Sultan was captured by Emir Timur?",
        answer1: "Murad",
        answer2: "Bayezid",
        answer3: "Suleiman",
        answer4: "Selim",
        correct: "b",
        picUrl:
          "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/turkey-venice-ottoman-sultans-portrait-auction-christies%20.jpg",
      },
      {
        id: 5,
        question: "When the Great Britain was formed?",
        answer1: "1651",
        answer2: "1390",
        answer3: "1707",
        answer4: "1727",
        correct: "c",
        picUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1920px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
      },
      {
        id: 6,
        question: "What was the official language of the Great Seljuk Empire",
        answer1: "Arabic",
        answer2: "Oghuz Turkic",
        answer3: "Pashtun",
        answer4: "Persian",
        correct: "d",
        picUrl:
          "https://static.wixstatic.com/media/f11647_b0b6150f8a4447b6aa28bbc66a1d9886~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f11647_b0b6150f8a4447b6aa28bbc66a1d9886~mv2.jpg",
      },
      {
        id: 7,
        question:
          "What was the result of the Persian Constitutional Revolution?",
        answer1: "Triumph of Tehran (Successful Revolution)",
        answer2: "Triumph of Qajar government",
        answer3: "No decisive result",
        answer4: "The revolution did not happen",
        correct: "a",
        picUrl:
          "https://asfar.org.uk/wp-content/uploads/2015/08/Mozafarshah1.jpg",
      },
      {
        id: 8,
        question: "What is the notable work of Herodotus?",
        answer1: "Histories",
        answer2: "Euthyphro",
        answer3: "Phaedo",
        answer4: "Crito",
        correct: "a",
        picUrl: "https://harmamae.files.wordpress.com/2012/02/herodotus.png",
      },
      {
        id: 9,
        question: "When did the monarchy end in Russia?",
        answer1: "1895",
        answer2: "1905",
        answer3: "1918",
        answer4: "1917",
        correct: "d",
        picUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%D0%A6%D0%B0%D1%80%D0%B8_%D0%B8_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8_%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D1%82_%D0%A0%D1%8E%D1%80%D0%B8%D0%BA%D0%B0_%D0%B4%D0%BE_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_III.%28%D1%85%D1%80%D0%BE%D0%BC%D0%BB%D0%B8%D1%82.%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%D0%B0%29_%28p%291886%D0%B3_%D0%93%D0%98%D0%9C_e1t3.jpg/800px-thumbnail.jpg",
      },
      {
        id: 10,
        question: "When did Rome adopt Christianity?",
        answer1: "400 AD",
        answer2: "301 AD",
        answer3: "313 AD",
        answer4: "120 AD",
        correct: "c",
        picUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Constantine%27s_conversion.jpg/1024px-Constantine%27s_conversion.jpg",
      },
    ],
  },
];
//questionsArray.push(data);
let question = questionsArray[0].questions[0];

// index number for questions[index]
let i = 0;

// Variable for correct answers count
let correctAnswers = 0;

// Storing html div elements, in order to hide or display them
let introDiv = document.querySelector(".start-div");
let questionDiv = document.querySelector(".quest-div");

// Storing all radio buttons
let radioButtons = document.querySelectorAll('input[type="radio"]');

// Getting checked values (true or false) of the radio inputs
let selectA = document.getElementById("a").checked;
let selectB = document.getElementById("b").checked;
let selectC = document.getElementById("c").checked;
let selectD = document.getElementById("d").checked;

// Storing html elements in the variables
let questionP = document.querySelector(".quest-p");
let questionH = document.querySelector(".quest-header");
let questionImage = document.querySelector(".question-image");
let againBtn = document.querySelector(".again");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");

// Storing labels in the variables
let labelA = document.getElementById("label-a");
let labelB = document.getElementById("label-b");
let labelC = document.getElementById("label-c");
let labelD = document.getElementById("label-d");

// Unchecker function when pressed next
function uncheck() {
  selectA = false;
  selectB = false;
  selectC = false;
  selectD = false;
}

// Filler function for displaying the question, picture and the answers
function questFiller() {
  questionP.textContent = question.question;
  questionImage.src = question.picUrl;
  labelA.textContent = question.answer1;
  labelB.textContent = question.answer2;
  labelC.textContent = question.answer3;
  labelD.textContent = question.answer4;
}

document.getElementById("start").addEventListener("click", function () {
  question = questionsArray[0].questions[0];
  i = 0;
  correctAnswers = 0;
  introDiv.classList.add("hidden");
  questionDiv.classList.remove("hidden");
  document.querySelector(".question-image").classList.remove("hidden");
  againBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  document.querySelector(".previous").classList.remove("hidden");

  labelA.classList.remove("hidden");
  labelB.classList.remove("hidden");
  labelC.classList.remove("hidden");
  labelD.classList.remove("hidden");
  questFiller();
  uncheck();
  questionH.textContent = `Question ${i + 1}`;
});

nextBtn.addEventListener("click", function () {
  radioButtons.forEach((radioButton) => (radioButton.disabled = false));
  // Next button will be pressable when index is lower than the array's length - 1
  if (i < questionsArray[0].questions.length - 1) {
    // Increasing the index
    i++;

    // Assigning question variable to next question object
    question = questionsArray[0].questions[i];

    // Filling the html elements according to the variable
    questFiller();

    // Enabling the radio buttons (Because it gets disabled once the user makes a selection)
    radioButtons.forEach((radioButton) => (radioButton.disabled = false));

    // Unchecking the previously selected answer
    uncheck();

    // Setting answer colours to default
    labelA.style.backgroundColor = "#917756";
    labelB.style.backgroundColor = "#917756";
    labelC.style.backgroundColor = "#917756";
    labelD.style.backgroundColor = "#917756";

    questionH.textContent = `Question ${i + 1}`;
  } else {
    questionP.textContent = `You got ${correctAnswers} out of ${questionsArray[0].questions.length} correct!`;
    questionImage.classList.add("hidden");
    againBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    previousBtn.classList.add("hidden");

    labelA.classList.add("hidden");
    labelB.classList.add("hidden");
    labelC.classList.add("hidden");
    labelD.classList.add("hidden");
    labelA.style.backgroundColor = "#917756";
    labelB.style.backgroundColor = "#917756";
    labelC.style.backgroundColor = "#917756";
    labelD.style.backgroundColor = "#917756";
    uncheck();
    console.log(
      "This is the last question. There are no next questions anymore"
    );
  }
});

previousBtn.addEventListener("click", function () {
  // Previous button will be pressable when index is greater than 0
  if (i > 0) {
    i--;
    question = questionsArray[0].questions[i];
    questFiller();
    radioButtons.forEach((radioButton) => (radioButton.disabled = true));
    questionH.textContent = `Question ${i + 1}`;
  } else {
    console.log("This is the first question. There are no previous questions");
  }
});

againBtn.addEventListener("click", function () {
  introDiv.classList.remove("hidden");
  questionDiv.classList.add("hidden");
});

// Looping through each radio button
document.querySelectorAll("input[type='radio']").forEach((element) =>
  element.addEventListener("click", function (event) {
    question = questionsArray[0].questions[i];

    // If the id matches with the correct the background will get green
    if (event.target.id === question.correct) {
      document.getElementById(
        `label-${event.target.id}`
      ).style.backgroundColor = "green";
      document.getElementById(`label-${event.target.id}`).style.color = "black";
      correctAnswers++;
    } else {
      // If not it will get red
      document.getElementById(
        `label-${event.target.id}`
      ).style.backgroundColor = "red";
      document.getElementById(`label-${event.target.id}`).style.color = "black";
    }

    // After each selections the other buttons will be disabled
    radioButtons.forEach((radioButton) => (radioButton.disabled = true));
  })
);
