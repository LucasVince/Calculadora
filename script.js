const numTela = document.querySelector('#resultado');
const numTelaExpressao = document.querySelector('#expressão');

const btnIgual = document.querySelector('#igual');
const btnSoma = document.querySelector('#sum');
const btnSub = document.querySelector('#sub');
const btnMult = document.querySelector('#mult');
const btnDiv = document.querySelector('#div');

let numeroConsole;

let num = 0;

const zerar = () => {
    numTela.textContent = '0';
}

const digitarNumeros = (event) => {
    if (numTela.textContent.trim() == '0') {
        if (!isNaN(event.key) && event.key >= 0 && event.key <= 9 && numTela.textContent.trim().length <= 8) {
            numTela.textContent = '';
        }
    }

    if (!isNaN(event.key) && event.key >= 0 && event.key <= 9 && numTela.textContent.trim().length <= 8) {
        numTela.textContent = numTela.textContent.trim() + event.key;
    }
}

const apagarNumeros = (event) => {
    if (numTela.textContent.trim().length > 0 && (event.key == 'Backspace' || event.key == 'Delete')) {
        numTela.textContent = numTela.textContent.slice(0, numTela.textContent.trim().length - 1);
        if (numTela.textContent.trim().length == 0) {
            numTela.textContent = '0';
        }
    }

    if (event.key == 'Escape') {
        numTela.textContent = '0';
        numTelaExpressao.textContent = '';
        num = 0;
    }
}

const somar = () => {
    numeroConsole = Number(numTela.textContent);
    num += Number(numTela.textContent);
    numTelaExpressao.textContent = num + ' +';
    numTela.textContent = '0';
    
    res = num + Number(numTela.textContent);
}

const resultado = () => {
    num = 0;

    res = num + Number(numTela.textContent);
    numTelaExpressao.textContent = '';
    
    numTela.textContent = res;
}

btnSoma.addEventListener('click', somar);
// btnSub.addEventListener('click', subtrair);
// btnMult.addEventListener('click', multiplicar);
// btnDiv.addEventListener('click', dividir);
btnIgual.addEventListener('click', resultado);

addEventListener('keydown', apagarNumeros);
addEventListener('keydown', digitarNumeros);