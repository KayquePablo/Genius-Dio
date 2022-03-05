let order = [];

let clickOrder = [];

let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = verde

const blue = document.querySelector('[class = blue]');
const red = document.querySelector('[class = red]');
const yellow = document.querySelector('[class = yellow]');
const green = document.querySelector('[class = green]');


//variavel responsavel por sortear as cores, ordem aleatória.
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //vai guardar o numero aleatorio a cada rodada

    order[order.length] = colorOrder;

    clickOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}


//Proxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}


//Checando se a cor clicada e a mesma que foi gerada no jogo
let checkOrder = () => {
    for (let i in clickOrder) {
        if (clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou, Próximo nível`);
        nextLevel();
    }
}


//clique do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}


//retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}


//Proximo Level 
let nextLevel = () => {
    score++;
    shuffleOrder();
}


//Game Over
let gameOver = () => {
    alert(`Pontuação: ${score} \n Você perdeu, Click em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    startGame();
}


//Iniciando o jogo
let startGame = () => {
    alert('Bem Vindo ao Genius! Iniciando o Jogo.')
    score = 0;

    nextLevel();
}


//evento de click 
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

startGame();