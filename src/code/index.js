
const secretNumber = document.getElementById('secret-number-id');
const playGameButton = document.getElementById('play-game-id');
const reloadGameButton = document.getElementById('reload-game-id');
const result = document.getElementById('result');
const rangeValue = document.getElementById('range-value');
const choiceValueRange = document.getElementById('choice-value-range');
const numberComputer = document.getElementById('number-computer');
const pointPlayer = document.getElementById('point-player');
const pointComputer = document.getElementById('point-computer');


const randomNumberGenerate = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber
};

const generateChoiceComputer = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber
}

rangeValue.innerHTML = choiceValueRange.value;

choiceValueRange.addEventListener("input", () => {
    rangeValue.innerHTML = choiceValueRange.value;
});

let playerPoint = 0;
let computerPoint = 0;


playGameButton.addEventListener('click', () => {
    randomNumberGenerate();
    generateChoiceComputer();
    
    let randomNumber = randomNumberGenerate();
    let computerChoice = generateChoiceComputer();
    
    numberComputer.innerHTML = computerChoice;

    
    if( Math.abs(choiceValueRange.value - randomNumber) < Math.abs(computerChoice - randomNumber)){
        playerPoint = playerPoint + 1;
        console.log(playerPoint);
        pointPlayer.innerHTML = playerPoint;
        result.innerHTML = "Você fez um ponto!";
        result.style.color = "#0fff00";
    } else if( Math.abs(choiceValueRange.value - randomNumber) > Math.abs(computerChoice - randomNumber) ){
        computerPoint = computerPoint + 1;
        pointComputer.innerHTML = computerPoint;
        result.innerHTML = "O computador fez um ponto!";
        result.style.color = 'red';
    }else if (Math.abs(choiceValueRange.value - randomNumber) === Math.abs(computerChoice - randomNumber)){
        result.innerHTML = "Empate"
    }

    secretNumber.innerHTML = randomNumber;
    secretNumber.innerHTML = randomNumber;
    playGameButton.style.display = "none";
    reloadGameButton.style.display = "block";
});

reloadGameButton.addEventListener('click', () => {
    playGameButton.style.display = "block";
    reloadGameButton.style.display = "none";
    secretNumber.innerHTML = "?";
    result.innerHTML = "Resultado";
    result.style.color = "seashell";
})