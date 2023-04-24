"use strict";

// document.querySelector(".button").addEventListener("click", function (e) {});

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
  document.querySelector(".notification").style.display = "block";
  const textString = JSON.stringify({
    text: input,
  });
  localStorage.setItem('text', textString)
}

function changeInput(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}
