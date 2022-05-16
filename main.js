const numberButtons = document.querySelectorAll('.numbers')
const equalsButton = document.querySelector('.equals')
const allClearButton = document.querySelector('.clear')
const multiplyButton = document.querySelector('.multiply')
const divisionButton = document.querySelector('.divide')
const additionButton = document.querySelector('.addition')
const subtractionButton = document.querySelector('.subtraction')
const output = document.querySelector('.output')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        output.innerText = output.innerText.toString() + button.innerText.toString()
    })
})

allClearButton.addEventListener('click', () => {
    output.innerText = ''
})