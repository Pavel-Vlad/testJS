"use strict";

window.onload = function () {
    // знак присвания
    let divLine = document.querySelector('.div-line');
    let car = document.querySelector('.car');
    console.log(divLine);

    for (let i = -50; i < 100; i++) {
        setTimeout(function () {
            divLine.style.top = i + '%';
        }, 50 * i)
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        switch (key) {
            case 'ArrowLeft': arrowLeft(car); break;
            case 'ArrowRight': arrowLeft(car); break;
        }
    });
}

function arrowLeft (car) {
    car.style.left = '0%';
    console.log(car.style.left)

}






