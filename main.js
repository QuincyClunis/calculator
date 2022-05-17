
const numberButtons = document.querySelectorAll('.numbers')
const equalsButton = document.querySelector('.equals')
const allClearButton = document.querySelector('.clear')
const multiplyButton = document.querySelector('.multiply')
const divisionButton = document.querySelector('.divide')
const additionButton = document.querySelector('.addition')
const subtractionButton = document.querySelector('.subtraction')
const output = document.querySelector('.output')

let firstNumber = ''
let secondNumber = ''
let operation = ''

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        output.innerText = output.innerText.toString() + button.innerText.toString()
        if (firstNumber !== ''){
            secondNumber = output.innerText
        }
    })
})

allClearButton.addEventListener('click', () => {
    output.innerText = ''
    firstNumber = ''
    secondNumber = ''
})


multiplyButton.addEventListener('click', () => {
    firstNumber = output.innerText
    operation = '*'
    output.innerText = ''
})

divisionButton.addEventListener('click', () => {
    firstNumber = output.innerText
    operation = '/'
    output.innerText = ''
})

additionButton.addEventListener('click', () => {
    firstNumber = output.innerText
    operation = '+'
    output.innerText = ''
})

subtractionButton.addEventListener('click', () => {
    firstNumber = output.innerText
    operation = '-'
    output.innerText = ''
})



equalsButton.addEventListener('click', () => {
    let computation
    switch (operation) {
        case '+':
            computation = parseFloat(firstNumber) + parseFloat(secondNumber)
            break
        case '-':
            computation = parseFloat(firstNumber) - parseFloat(secondNumber)
            break
        case '*':
            computation = parseFloat(firstNumber) * parseFloat(secondNumber)
            break
        case '/':
            computation = parseFloat(firstNumber) / parseFloat(secondNumber)
            break
    }

    output.innerText = computation
    firstNumber = ''
    secondNumber = ''

})


