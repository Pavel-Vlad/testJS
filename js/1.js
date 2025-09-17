"use strict";

window.onload = function () {
    let divLine = document.querySelector('.div-line');
    let car = document.querySelector('.car');

    // Анимация дорожной разметки
    function animateRoadLines() {
        let position = -50;

        function moveLine() {
            position += 1;
            if (position > 100) {
                position = -50;
            }
            divLine.style.top = position + '%';
            requestAnimationFrame(moveLine);
        }

        moveLine();
    }

    // Управление машиной
    let carPosition = 50;
    let carSpeed = 2;
    let isMovingLeft = false;
    let isMovingRight = false;

    function updateCarPosition() {
        if (isMovingLeft) {
            carPosition = Math.max(0, carPosition - carSpeed);
        }
        if (isMovingRight) {
            carPosition = Math.min(100, carPosition + carSpeed);
        }

        car.style.left = carPosition + '%';
        requestAnimationFrame(updateCarPosition);
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft': isMovingLeft = true; break;
            case 'ArrowRight': isMovingRight = true; break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowLeft': isMovingLeft = false; break;
            case 'ArrowRight': isMovingRight = false; break;
        }
    });

    // Запускаем анимации
    animateRoadLines();
    updateCarPosition();
}

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






