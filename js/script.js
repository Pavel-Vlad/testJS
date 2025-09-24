let sumButton = document.getElementById('sum');
let minButton = document.getElementById('min');
let umnButton = document.getElementById('umn');
let razButton = document.getElementById('raz');
let answer = document.getElementById('answer');
sumButton.addEventListener(
    'click',
    function (e) {
        let number1 = +document.getElementById('num1').value;
        let number2 = +document.getElementById('num2').value;
        answer.value = number1 + number2;
    }
)

minButton.addEventListener(
    'click',
    function (e) {
        let number1 = +document.getElementById('num1').value;
        let number2 = +document.getElementById('num2').value;
        answer.value = number1 - number2;
    }
)

umnButton.addEventListener(
    'click',
    function (e) {
        let number1 = +document.getElementById('num1').value;
        let number2 = +document.getElementById('num2').value;
        answer.value = number1 * number2;
    }
)

razButton.addEventListener(
    'click',
    function (e) {
        let number1 = +document.getElementById('num1').value;
        let number2 = +document.getElementById('num2').value;
        answer.value = number1 / number2;
    }
)

