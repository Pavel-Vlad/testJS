let sumButton = document.getElementById('sum')
let minusButton = document.getElementById('minus')
let zvezdaButton = document.getElementById('zvezda')
let slashButton = document.getElementById('slash')
let answer = document.getElementById('answer')


sumButton.addEventListener('click', function (e){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 + number2;
})


minusButton.addEventListener('click', function (e){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 - number2;
})


slashButton.addEventListener('click', function (e){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 / number2;
})


zvezdaButton.addEventListener('click', function (e){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 * number2;
})