
const valueInput = document.getElementById('choice-value');
const increament = document.getElementById('increament');
const decreament = document.getElementById('decreament');
const secretNumber = document.getElementById('secret-number-id');
const playGameButton = document.getElementById('play-game-id');
const reloadGameButton = document.getElementById('reload-game-id');
const result = document.getElementById('result');
const boxChangeNumber = document.querySelector('.changer-number-box');

const randomNumberGenerate = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber
};

increament.addEventListener('click', () => {
    if (valueInput.value < 10) {
        valueInput.value =+ valueInput.value + 1;
    } else {
    }
});

decreament.addEventListener('click', () => {
    if (valueInput.value > 0) {
        valueInput.value =+ valueInput.value - 1;
    }
});


playGameButton.addEventListener('click', () => {
    randomNumberGenerate();

    let randomNumber = randomNumberGenerate();

    console.log(randomNumber)
    if (valueInput.value == randomNumber) {
        secretNumber.innerHTML = randomNumber;
        result.innerHTML = "Acertou";
        result.style.color = "green";
    } else {
        secretNumber.innerHTML = randomNumber;
        valueInput.value = 0;
        result.style.color = "red";
        result.innerHTML = "Errou";
        playGameButton.style.display = "none";
        reloadGameButton.style.display = "block";
        boxChangeNumber.style.display = "none";
    }
});

reloadGameButton.addEventListener('click', () => {
    playGameButton.style.display = "block";
    reloadGameButton.style.display = "none";
    valueInput.value = 0;
    result.innerHTML = "Resultado";
    result.style.color = "black"
    secretNumber.innerHTML = "?";
    boxChangeNumber.style.display = "flex";
})