let grill= document.querySelector('input')

console.log(grill.value)
grill.addEventListener('input',function (e){
console.log(e.target.value)
})
