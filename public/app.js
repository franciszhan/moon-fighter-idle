// Game Variables
let enemyHP = 100;
const maxEnemyHP = 100;

// DOM Elements
const hpFill = document.getElementById('hp-fill');
const attackButton = document.getElementById('attack-button');
const gameMessages = document.getElementById('game-messages');

// Update HP Bar Function
function updateHPBar() {
    const hpPercentage = (enemyHP / maxEnemyHP) * 100;
    hpFill.style.width = hpPercentage + '%';

    if (enemyHP <= 0) {
        gameMessages.textContent = 'You defeated the enemy!';
        attackButton.disabled = true;
    }
}

// Attack Button Event Listener
attackButton.addEventListener('click', () => {
    // Simple attack logic
    const damage = Math.floor(Math.random() * 10) + 5; // Random damage between 5 and 15
    enemyHP -= damage;
    if (enemyHP < 0) enemyHP = 0;

    gameMessages.textContent = `You dealt ${damage} damage! Enemy HP: ${enemyHP}/${maxEnemyHP}`;
    updateHPBar();
});

// Initialize Game
updateHPBar();
