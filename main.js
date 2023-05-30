"use strict";

let introDiv = document.querySelector(".start-div");
let questionDiv = document.querySelector(".quest-div");

console.log(introDiv, questionDiv);

document.getElementById("start").addEventListener("click", function () {
  introDiv.classList.add("hidden");
  questionDiv.classList.remove("hidden");
});

// function start() {
//   introDiv.classList.add("hidden");
//   questionDiv.classList.remove("hidden");
// }
