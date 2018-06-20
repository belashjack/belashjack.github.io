class Game {
    constructor() {
        this.round = 0;
        this.timers = [];
    }
    init() {
        this.changeRound();
        hero.create();
        monster = new Monster();
        monster.create();
    }
    changeRound() {
        this.round++;
        roundElem.textContent = this.round;
    }
    showGame() {
        homepage.classList.add('hidden');
        // footer.classList.add('hidden');
        gamepage.classList.remove('hidden');
    }
    showModal() {
        spellsModal.classList.remove('hidden');
    }
    hideModal() {
        spellsModal.classList.add('hidden');
    }
    showTask(event) {
        tasks[getRandomInt(0, tasks.length - 1)](taskModal.firstElementChild, event.target);

        spellsModal.classList.add('hidden');
        taskModal.classList.remove('hidden');
    }
    checkAnswer(userAnswer, rightAnswer, targetBtn) {
        const isCorrectAnswer = userAnswer === rightAnswer;
        if (isCorrectAnswer) {
            taskModal.firstElementChild.classList.add('correct');
        } else {
            taskModal.firstElementChild.classList.add('incorrect');
        }
        taskModal.classList.add('slowly-disappear');

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                taskModal.style.opacity = '0';
                resolve();
            }, 500);
        });

        promise.then(() => {
            setTimeout(() => {
                answerBtn.disabled = false;
                taskBody.innerHTML = '';
                taskModal.style.opacity = '1';
                taskModal.firstElementChild.classList.remove('correct', 'incorrect');
                taskModal.classList.add('hidden');
                this.launchBattle(isCorrectAnswer, targetBtn);
            }, 1000);
        });
    }
    launchBattle(isCorrectAnswer, targetBtn) {
        if (isCorrectAnswer) {
            this.timers.push(setTimeout(() => {
                monster.respondToHero();
            }, 2000));
            if (targetBtn === healBtn) {
                hero.healYourself();
            } else {
                hero.kickMonstersAss();
            }

        } else {
            monster.respondToHero();
        }
    }
    finishGame() {
        this.storeResult();
        this.showResult();
    }
    startNewRound() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });

        this.changeRound();
        hero.updateHealth();
        monster = new Monster();
        monster.create();
    }
    storeResult() {
        const gameResults = JSON.parse(localStorage.getItem('gameResults')) || {};
        const newKey = Object.keys(gameResults).length + 1;
        gameResults[newKey] = {
            heroName: hero.name,
            monstersDefeated: this.round - 1,
        };
        localStorage.setItem('gameResults', JSON.stringify(gameResults));
    }
    showResult() {
        resultModal.querySelector('.result-name').textContent = hero.name;
        resultModal.querySelector('.result-number-of-monsters').textContent = game.round - 1;
        createResultsTable(resultModal);
        field.classList.add('hidden');
        resultModal.classList.remove('hidden');
    }
}

class Hero {
    constructor() {
        this.initialHealth = 100;
        this.health = 100;
    }
    create() {
        this.name = nameField.value;
        heroName.textContent = this.name;
    }
    updateHealth() {
        this.initialHealth = 100;
        this.health = 100;
        heroHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    healYourself() {
        if (this.initialHealth - this.health < 50) {
            this.health = this.initialHealth;
        } else {
            this.health += 50;
        }
        heroHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    kickMonstersAss() {
        monster.underAttack();
        monster.changeHealth();
    }
    underAttack() {
        heroElem.classList.add('monster-attacked');
        setTimeout(() => {
            heroElem.classList.remove('monster-attacked');
        }, 1000);
    }
    changeHealth() {
        this.health -= 105;
        if (this.health <= 0) {
            heroHealth.textContent = `${0}/${this.initialHealth}`;
            setTimeout(() => {
                game.finishGame();
            }, 1500);
        } else {
            heroHealth.textContent = `${this.health}/${this.initialHealth}`;
        }
    }
}

class Monster {
    constructor() {
        this.initialHealth = 100;
        this.health = 100;
    }
    create() {
        // monster appearance
        headImg.src = heads[getRandomInt(0, heads.length - 1)];
        bodyImg.src = bodies[getRandomInt(0, bodies.length - 1)];
        legsImg.src = legs[getRandomInt(0, legs.length - 1)];
        weaponImg.src = weapons[getRandomInt(0, weapons.length - 1)];

        // monster name
        this.name = `${monsterAdjectives[getRandomInt(0, monsterAdjectives.length - 1)]} ${monsterTypes[getRandomInt(0, monsterTypes.length - 1)]} ${monsterNames[getRandomInt(0, monsterNames.length - 1)]}`;
        monsterName.textContent = this.name;

        // monster health
        monsterHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    respondToHero() {
        hero.underAttack();
        hero.changeHealth();
    }
    underAttack() {
        monsterElem.classList.add('monster-attacked');
        setTimeout(() => {
            monsterElem.classList.remove('monster-attacked');
        }, 1000);
    }
    changeHealth() {
        this.health -= 105;
        if (this.health <= 0) {
            monsterHealth.textContent = `${0}/${this.initialHealth}`;
            setTimeout(() => {
                game.startNewRound();
            }, 1000);
        } else {
            monsterHealth.textContent = `${this.health}/${this.initialHealth}`;
        }
    }
}

// DATA - to separate module
const heads = ['./images/warrior.png', './images/coconut.png', './images/trump.png', './images/mask.png'];
const bodies = ['./images/hands.png', './images/monkey-body.png'];
const legs = ['./images/legs.png', './images/legs2.png', './images/boots.png', './images/boots2.png'];
const weapons = ['./images/revolver.png', './images/sword.png', './images/axe.png'];
const monsterAdjectives = ['Creepy', 'Awful', 'Gross', 'Despicable', 'Dreadful'];
const monsterTypes = ['Orc', 'Troll', 'Goblin', 'Yeti'];
const monsterNames = ['John', 'Donald', 'Thomas', 'Richard', 'Jose', 'David', 'Oliver', 'James', 'Paul', 'George'];
const tasks = [basicArithmetic];

function basicArithmetic(taskField, targetBtn) {
    const mathOperations = ['+', '-', '*', '/'];

    const operation = mathOperations[getRandomInt(0, mathOperations.length - 1)];
    let number1;
    let number2;
    let result;

    if (operation === '*' || operation === '/') {
        if (operation === '*') {
            number1 = getRandomInt(2, 25);
            number2 = getRandomInt(2, 25);
            result = number1 * number2;
        } else {
            number1 = getRandomInt(2, 200);
            number2 = getRandomInt(2, 30);
            while (number1 / number2 !== Math.round(number1 / number2)) {
                number1 = getRandomInt(2, 200);
                number2 = getRandomInt(2, 30);
            }
            result = number1 / number2;
        }
    } else if (operation === '+') {
        number1 = getRandomInt(2, 100);
        number2 = getRandomInt(2, 100);
        result = number1 + number2;
    } else {
        number1 = getRandomInt(2, 100);
        number2 = getRandomInt(2, 100);
        result = number1 - number2;
    }

    taskHeading.textContent = 'Perform the following arithmetic operation';

    const number1Elem = document.createElement('div');
    const operationElem = document.createElement('div');
    const number2Elem = document.createElement('div');
    const resultElem = document.createElement('input');
    resultElem.type = 'number';

    function handler() {
        answerBtn.disabled = true;
        game.checkAnswer(resultElem.value, String(result), targetBtn);
        answerBtn.removeEventListener('click', handler);
    }

    answerBtn.addEventListener('click', handler);

    number1Elem.textContent = number1;
    operationElem.textContent = operation;
    number2Elem.textContent = number2;

    taskBody.appendChild(number1Elem);
    taskBody.appendChild(operationElem);
    taskBody.appendChild(number2Elem);
    taskBody.appendChild(resultElem);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const startGame = function startGame() {
    if (!checkFormValidity()) {
        return false;
    }
    game.init();
    game.showGame();
};

const showScoreboard = function showScoreboard() {
    createResultsTable(scoreboard);
    homepage.classList.add('hidden');
    scoreboard.classList.remove('hidden');
};

const createResultsTable = function createResultsTable(currentPage) {
    const table = currentPage.querySelector('table');
    const gameResults = JSON.parse(localStorage.getItem('gameResults'));
    const arr = Object.entries(gameResults);
    arr.sort((a, b) => {
        return b[1]['monstersDefeated'] - a[1]['monstersDefeated'];
    });

    arr.forEach((elem, i) => {
        const row = document.createElement('tr');
        const placeCell = document.createElement('td');
        const heroNameCell = document.createElement('td');
        const monstersDefeatedCell = document.createElement('td');
        placeCell.textContent = i + 1;
        heroNameCell.textContent = elem[1]['heroName'];
        monstersDefeatedCell.textContent = elem[1]['monstersDefeated'];
        row.appendChild(placeCell);
        row.appendChild(heroNameCell);
        row.appendChild(monstersDefeatedCell);
        table.tBodies[0].appendChild(row);
    });
};

const checkFormValidity = function checkFormValidity() {
    let hasMistakes = false;
    if (!nameField.checkValidity()) {
        hasMistakes = true;
        nameField.scrollIntoView();
        nameField.parentElement.classList.add('invalid-field');
    } else {
        nameField.parentElement.classList.remove('invalid-field');
    }
    if (nameField.parentElement.classList.contains('invalid-field')) {
        nameField.focus();
    }
    return !hasMistakes;
};

const addListeners = function addListeners() {
    playBtn.addEventListener('click', startGame);
    nameField.addEventListener('input', checkFormValidity);
    actionBtn.addEventListener('click', game.showModal);
    closeBtn.addEventListener('click', game.hideModal);
    attackBtn.addEventListener('click', game.showTask);
    healBtn.addEventListener('click', game.showTask);

    scoreboardBtn.addEventListener('click', showScoreboard);
};

const homepage = document.querySelector('.homepage');
const gamepage = document.querySelector('.gamepage');
const scoreboard = document.querySelector('.scoreboard');

const playBtn = document.querySelector('.play-btn');
const nameField = document.forms.info.name;
const scoreboardBtn = document.querySelector('.scoreboard-btn');

const actionBtn = document.querySelector('.action-btn');
const roundElem = document.querySelector('.round');
const spellsModal = document.querySelector('.spells-modal');
const taskModal = document.querySelector('.task-modal');
const resultModal = document.querySelector('.result-modal');
const closeBtn = document.querySelector('.close-btn');
const attackBtn = document.querySelector('.attack-btn');
const healBtn = document.querySelector('.heal-btn');
const taskHeading = document.querySelector('.task-heading');
const taskBody = document.querySelector('.task-body');
const answerBtn = document.querySelector('.answer-btn');

// const footer = document.querySelector('footer');
const field = document.querySelector('.field');
const heroElem = document.querySelector('.hero');
const monsterElem = document.querySelector('.monster');
const headImg = document.querySelector('.head img');
const bodyImg = document.querySelector('.body img');
const legsImg = document.querySelector('.legs img');
const weaponImg = document.querySelector('.weapon img');

const heroHealth = document.querySelector('.hero-info .health');
const monsterHealth = document.querySelector('.monster-info .health');
const heroName = document.querySelector('#hero-name');
const monsterName = document.querySelector('#monster-name');


const game = new Game();
const hero = new Hero();
let monster = new Monster();

addListeners();
