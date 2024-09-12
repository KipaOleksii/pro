const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplicationButton = document.getElementById('multiplication')
const divisionButton = document.getElementById('division')
const submitButton = document.getElementById('submit')
const resultElement = document.getElementById('result')




plusButton.onclick = () => {
    action = '+'
}
minusButton.onclick = () => {
    action = '-'
}
multiplicationButton.onclick = () => {
    action = '*'
}
divisionButton.onclick = () => {
    action = '/'
}

function colorResult(result) {
    if (result < 0)
    resultElement.style.color = 'red'
  else {
    resultElement.style.color = 'green'
}
    resultElement.textContent = result
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol === '+') {
        return num1 + num2
    } else if (actionSymbol === '-') {
        return num1 - num2
    } else if (actionSymbol === '*') {
        return num1 * num2
    } else if (actionSymbol === '/') {
        return num1 / num2
}
}
submitButton.onclick = function () { 
   const result = computeNumberWithAction(input1, input2, action)
    colorResult(result)
} 

