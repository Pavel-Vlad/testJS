
let sumButton= document.getElementById('sum')
let minButton= document.getElementById('minus')
let delButton= document.getElementById('del')
let ymnButton= document.getElementById('ymn')
let answerButton= document.getElementById('answer')
sumButton.addEventListener('click',function (e){
    let number1= +document.getElementById('num1').value
    let number2= +document.getElementById('num2').value
    answerButton.value = number1 + number2
})
minButton.addEventListener('click',function (e){
    let number1= +document.getElementById('num1').value
    let number2= +document.getElementById('num2').value
    answerButton.value = number1 - number2
})
delButton.addEventListener('click',function (e){
    let number1= +document.getElementById('num1').value
    let number2= +document.getElementById('num2').value
    answerButton.value = number1 / number2
})
ymnButton.addEventListener('click',function (e){
    let number1= +document.getElementById('num1').value
    let number2= +document.getElementById('num2').value
    answerButton.value = number1 * number2
})
