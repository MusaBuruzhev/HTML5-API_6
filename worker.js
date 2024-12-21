self.onmessage = (event) => {
    const input = parseInt(event.data, 10);
    let result = 0;

    // Пример сложных вычислений
    for (let i = 0; i < input; i++) {
        result += i;
    }

    // Отправка результата обратно на страницу
    self.postMessage(result);
};