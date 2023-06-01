"use strict";

import data from "./data.json" assert { type: "json" };

// New Array for storing the JSON
let questionsArray = [];
questionsArray.push(data);
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

let questionP = document.querySelector(".quest-p");
let questionH = document.querySelector(".quest-header");
let questionImage = document.querySelector(".question-image");
let againBtn = document.querySelector(".again");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");

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
  }
  console.log("This is the last question. There are no next questions anymore");
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

document.querySelectorAll("input[type='radio']").forEach((element) =>
  element.addEventListener("click", function (event) {
    question = questionsArray[0].questions[i];

    if (event.target.id === question.correct) {
      document.getElementById(
        `label-${event.target.id}`
      ).style.backgroundColor = "green";
      document.getElementById(`label-${event.target.id}`).style.color = "black";
      correctAnswers++;
    } else {
      document.getElementById(
        `label-${event.target.id}`
      ).style.backgroundColor = "red";
      document.getElementById(`label-${event.target.id}`).style.color = "black";
    }

    radioButtons.forEach((radioButton) => (radioButton.disabled = true));
  })
);
