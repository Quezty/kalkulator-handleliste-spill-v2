function addToDisplay(event) {
    var target = event.target.innerHTML
    var inputArea = document.getElementById('calculatorInput')

    inputArea.value += target
}

function solveEquation() {
    let equation = document.getElementById('calculatorInput').value
    let result = eval(equation)
    document.getElementById('calculatorInput').value = result
}

function clearDisplay() {
    document.getElementById('calculatorInput').value = ''
}

function deleteLastCharacter() {
    var valueOfInput = document.getElementById('calculatorInput').value
    var inputElement = document.getElementById('calculatorInput')
    inputElement.value = valueOfInput.substring(0, valueOfInput.length - 1);
}