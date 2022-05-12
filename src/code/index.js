
const secretNumber = document.getElementById('secret-number-id');
const playGameButton = document.getElementById('play-game-id');
const reloadGameButton = document.getElementById('reload-game-id');
const result = document.getElementById('result');
const rangeValue = document.getElementById('range-value');
const choiceValueRange = document.getElementById('choice-value-range');


const randomNumberGenerate = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber
};

rangeValue.innerHTML = choiceValueRange.value;

choiceValueRange.addEventListener("input", () => {
    rangeValue.innerHTML = choiceValueRange.value;
});


playGameButton.addEventListener('click', () => {
    randomNumberGenerate();

    let randomNumber = randomNumberGenerate();

    console.log(randomNumber)
    if (choiceValueRange.value == randomNumber) {
        secretNumber.innerHTML = randomNumber;
        result.innerHTML = "Acertou";
        result.style.color = "#00ff00";
    } else {
        secretNumber.innerHTML = randomNumber;
        result.style.color = "red";
        result.innerHTML = "Errou";
        playGameButton.style.display = "none";
        reloadGameButton.style.display = "block";
    }
});

reloadGameButton.addEventListener('click', () => {
    playGameButton.style.display = "block";
    reloadGameButton.style.display = "none";
    result.innerHTML = "Resultado";
    result.style.color = "black"
    secretNumber.innerHTML = "?";
})