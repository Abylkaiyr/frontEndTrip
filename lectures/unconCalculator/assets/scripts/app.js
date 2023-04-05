const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputValue() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserInputValue();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserInputValue();
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInputValue();
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDescription);
}

function divide() {}

addBtn.addEventListener("click", add);
