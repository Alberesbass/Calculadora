function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0; // Reinicia o som para reproduzi-lo novamente
    clickSound.play();
}

function appendToDisplay(value) {
    if (document.calculator.ans.value.includes('=')) {
        clearDisplay();
    }
    document.calculator.ans.value += value;
    playClickSound(); // Adiciona a reprodução do som ao adicionar valor ao visor
}

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
