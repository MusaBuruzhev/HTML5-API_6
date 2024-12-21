// Навигация по истории
document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
});

document.getElementById('forwardBtn').addEventListener('click', () => {
    window.history.forward();
});

// Canvas и анимация
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, 50, 50, 50);
    x += 1;
    if (x > canvas.width) x = 0;
    requestAnimationFrame(draw);
}

draw();

// Веб-воркер
const worker = new Worker('worker.js');

document.getElementById('startWorkerBtn').addEventListener('click', () => {
    const inputValue = document.getElementById('inputData').value;
    worker.postMessage(inputValue);
});

worker.onmessage = (event) => {
    document.getElementById('result').innerText = `Результат: ${event.data}`;
};

worker.onerror = (error) => {
    console.error('Ошибка в веб-воркере:', error);
};