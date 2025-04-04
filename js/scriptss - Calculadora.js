let currentInput = "";
let previousInput = "";
let operation = null;

function appendNumber(number) {
    if (currentInput.length < 12) {
        currentInput += number;
        updateScreen();
    }
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+": result = prev + current; break;
        case "-": result = prev - current; break;
        case "*": result = prev * current; break;
        case "/": result = current !== 0 ? prev / current : "Error"; break;
        default: return;
    }

    currentInput = result.toString().slice(0, 12);
    operation = null;
    previousInput = "";
    updateScreen();
}

function clearScreen() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateScreen();
}

function updateScreen() {
    document.getElementById("screen").innerText = currentInput || "0";
}