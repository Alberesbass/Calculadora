function appendToDisplay(value) {
    // Se o valor atual for um resultado de cálculo, limpar o visor antes de adicionar o novo valor
    if (document.calculator.ans.value.includes('=')) {
        clearDisplay();
    }
    document.calculator.ans.value += value;
}

function clearDisplay() {
    document.calculator.ans.value = '';
}

function calculateResult() {
    document.calculator.ans.value = eval(document.calculator.ans.value);
    document.calculator.ans.value += '='; // Adicionando sinal de igual para indicar o resultado
    setTimeout(function () {
        clearDisplay();
    }, 500);
}
