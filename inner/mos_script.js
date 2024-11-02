let score = 0;
const scoreDisplay = document.getElementById('score');
const mosquito = document.getElementById('mosquito');
const gameArea = document.getElementById('game-area');

function moveMosquito() {
    const x = Math.random() * (gameArea.clientWidth - mosquito.clientWidth);
    const y = Math.random() * (gameArea.clientHeight - mosquito.clientHeight);
    mosquito.style.left = `${x}px`;
    mosquito.style.top = `${y}px`;
}

mosquito.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveMosquito();
});

// Move mosquito every second
setInterval(moveMosquito, 1000);

// Initial position
moveMosquito();