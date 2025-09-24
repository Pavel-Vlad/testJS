
let plus = document.getElementById('plus')

plus.addEventListener('click', function (e) {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 + number2
})


let minus = document.getElementById('minus')

minus.addEventListener('click', function (e) {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 - number2
})


let divide = document.getElementById('divide')

divide.addEventListener('click', function (e) {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 / number2
})


let multiplication = document.getElementById('multiplication')

multiplication.addEventListener('click', function (e) {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    answer.value = number1 * number2
})

