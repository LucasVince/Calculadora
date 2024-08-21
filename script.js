const numTela = document.querySelector('#resultado');

const zerar = () => {
    numTela.textContent = '0';
}

const digitarNumeros = (event) => {
    for (let i = 0; i < 10; i++) {
        let ativaDesativaTela = true;

        if (numTela.textContent.trim().length >= 9) {
            ativaDesativaTela = false;
        }

        if (ativaDesativaTela) {
            if (event.key == i) {
                numTela.textContent = numTela.textContent.trim() + i;
            }
        }
    }
}

addEventListener('keydown', digitarNumeros);