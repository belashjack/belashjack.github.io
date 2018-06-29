class Game {
    constructor() {
        this.round = 0;
        this.timers = [];
    }
    init() {
        this.changeRound();
        hero.create();
        monster.create();
    }
    changeRound() {
        this.round++;
        roundElem.textContent = `Round ${this.round}`;
    }
    showGame() {
        homepage.classList.add('hidden');
        gamepage.classList.remove('hidden');
    }
    showModal() {
        spellsModal.classList.remove('hidden');
    }
    hideModal() {
        spellsModal.classList.add('hidden');
    }
    showTask(event) {
        taskModal.classList.remove('hidden');
        spellsModal.classList.add('hidden');

        tasks[getRandomInt(0, tasks.length - 1)]();
        this.typeOfSpell = event.target;
    }
    restoreTask() {
        taskModal.classList.add('hidden');
        answerBtn.disabled = false;
        taskBody.innerHTML = '';
        taskModal.style.opacity = '1';
        taskModal.firstElementChild.classList.remove('correct', 'incorrect');
    }
    checkAnswer(userAnswer, rightAnswer) {
        const isCorrectAnswer = userAnswer === rightAnswer;
        if (isCorrectAnswer) {
            taskModal.firstElementChild.classList.add('correct');
        } else {
            taskModal.firstElementChild.classList.add('incorrect');
        }
        taskModal.classList.add('slowly-disappear');

        // посмотреть какой тут смысл в промисах
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                taskModal.style.opacity = '0';
                resolve();
            }, 500);
        });

        promise.then(() => {
            setTimeout(() => {
                this.restoreTask();
                this.launchBattle(isCorrectAnswer);
            }, 1000);
        });
    }
    launchBattle(isCorrectAnswer) {
        const promise = new Promise((resolve) => {
            if (isCorrectAnswer) {
                if (this.typeOfSpell === healBtn) {
                    hero.healYourself();
                    this.timers.push(setTimeout(() => {
                        resolve();
                    }, 2000));
                } else {
                    hero.kickMonstersAss();
                    this.timers.push(setTimeout(() => {
                        resolve();
                    }, 2000));
                }
            } else {
                this.timers.push(setTimeout(() => {
                    resolve();
                }, 1000));
            }
        });

        promise.then(() => {
            monster.respondToHero();
        });
    }

    finishBattle() {
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
        this.createResultsTable(resultModal);
        field.classList.add('hidden');
        resultModal.classList.remove('hidden');
    }
    showScoreboard() {
        this.createResultsTable(scoreboard);
        homepage.classList.add('hidden');
        scoreboard.classList.remove('hidden');
    }
    showHomepage() {
        scoreboardTable.tBodies[0].innerHTML = '';
        scoreboard.classList.add('hidden');
        homepage.classList.remove('hidden');
    }
    createResultsTable(currentPage) {
        const table = currentPage.querySelector('table');
        const gameResults = JSON.parse(localStorage.getItem('gameResults'));
        const arr = gameResults ? Object.entries(gameResults) : [];

        if (arr.length === 0) {
            const noDataRow = document.createElement('tr');
            const noDataCell = document.createElement('td');
            noDataCell.innerHTML = 'NO DATA YET';
            noDataCell.colSpan = '4';
            noDataRow.appendChild(noDataCell);
            table.tBodies[0].appendChild(noDataRow);
            return;
        }

        arr.sort((a, b) => {
            return b[1]['monstersDefeated'] - a[1]['monstersDefeated'];
        });

        // show only 8 best results
        arr.length = arr.length < 8 ? arr.length : 8;

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
    }
    stopGame() {
        homepage.classList.remove('hidden');
        gamepage.classList.add('hidden');
        resultModal.classList.add('hidden');
        resultTable.tBodies[0].innerHTML = '';
        field.classList.remove('hidden');
    }
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

const restartGame = function restartGame() {
    stopGame();
    startGame();
};
const stopGame = function stopGame() {
    game.stopGame();
    game = new Game();
    hero = new Hero();
    monster = new Monster();
};

const checkFormValidity = function checkFormValidity() {
    let hasMistakes = false;
    if (!nameField.checkValidity()) {
        hasMistakes = true;
        nameField.scrollIntoView();
        nameField.classList.add('invalid-field');
    } else {
        nameField.classList.remove('invalid-field');
    }
    if (nameField.classList.contains('invalid-field')) {
        nameField.focus();
    }
    return !hasMistakes;
};

const addListeners = function addListeners() {
    playBtn.addEventListener('click', startGame);
    nameField.addEventListener('input', checkFormValidity);
    actionBtn.addEventListener('click', game.showModal);
    closeBtn.addEventListener('click', game.hideModal);
    attackBtn.addEventListener('click', event => game.showTask(event));
    healBtn.addEventListener('click', event => game.showTask(event));

    gameHomepageBtn.addEventListener('click', stopGame);
    gamePlayAgainBtn.addEventListener('click', restartGame);

    scoreboardBtn.addEventListener('click', () => game.showScoreboard());
    scoreboardHomepageBtn.addEventListener('click', () => game.showHomepage());
};


function basicArithmetic() {
    // array with math operations
    const mathOperations = ['+', '-', '×', '/'];

    // get rangom math operation
    const operation = mathOperations[getRandomInt(0, mathOperations.length - 1)];

    let number1;
    let number2;
    let result;

    // set reasonable values for different math operations
    if (operation === '×' || operation === '/') {
        if (operation === '×') {
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
        number2 = getRandomInt(2, 99);
        result = number1 + number2;
    } else {
        number1 = getRandomInt(2, 100);
        number2 = getRandomInt(2, 99);
        result = number1 - number2;
    }

    // set the heading of the task
    taskHeading.textContent = 'Perform the following arithmetic operation';

    // create first multiplier DOM element
    const number1Elem = document.createElement('div');
    number1Elem.classList.add('multiplier');
    number1Elem.textContent = number1;

    // create operation sign DOM element
    const operationElem = document.createElement('div');
    operationElem.classList.add('operation');
    operationElem.textContent = operation;

    // create second multiplier DOM element
    const number2Elem = document.createElement('div');
    number2Elem.classList.add('multiplier');
    number2Elem.textContent = number2;

    // create equals sign DOM element
    const equalSignElem = document.createElement('div');
    equalSignElem.classList.add('operation');
    equalSignElem.textContent = '=';

    // create field for answer
    const resultElem = document.createElement('input');
    resultElem.type = 'number';
    resultElem.classList.add('calculation-result');

    function checkAnswer() {
        answerBtn.disabled = true;
        answerBtn.removeEventListener('click', checkAnswer);
        document.body.removeEventListener('keypress', checkAnswerViaKeyboard);
        game.checkAnswer(resultElem.value, String(result));
    }
    function checkAnswerViaKeyboard(event) {
        if (event.keyCode === keycodes.ENTER) {
            checkAnswer();
        }
    }

    answerBtn.addEventListener('click', checkAnswer);
    document.body.addEventListener('keypress', checkAnswerViaKeyboard);

    // add all created elements to the page
    taskBody.appendChild(number1Elem);
    taskBody.appendChild(operationElem);
    taskBody.appendChild(number2Elem);
    taskBody.appendChild(equalSignElem);
    taskBody.appendChild(resultElem);

    resultElem.focus();
}


class Hero {
    constructor() {
        this.initialHealth = 100;
        this.health = 100;
    }
    create() {
        // hero name
        this.name = nameField.value;
        heroName.textContent = this.name;

        // hero health
        heroHealth.textContent = `${this.health}/${this.initialHealth}`;
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
                game.finishBattle();
            }, 1000);
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
        // monster name
        this.name = `${monsterAdjectives[getRandomInt(0, monsterAdjectives.length - 1)]} ${monsterTypes[getRandomInt(0, monsterTypes.length - 1)]} ${monsterNames[getRandomInt(0, monsterNames.length - 1)]}`;
        monsterName.textContent = this.name;

        // monster health
        monsterHealth.textContent = `${this.health}/${this.initialHealth}`;

        // monster appearance
        headImg.src = heads[getRandomInt(0, heads.length - 1)];
        bodyImg.src = bodies[getRandomInt(0, bodies.length - 1)];
        legsImg.src = legs[getRandomInt(0, legs.length - 1)];
        weaponImg.src = weapons[getRandomInt(0, weapons.length - 1)];
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


function translation() {
    console.log('asd');
    // посмотри в basicArithmetic, может что полезное забыл
}


// DATA - to separate module
const heads = ['./images/warrior.png', './images/coconut.png', './images/trump.png', './images/mask.png'];
const bodies = ['./images/hands.png', './images/monkey-body.png'];
const legs = ['./images/legs.png', './images/legs2.png', './images/boots.png', './images/boots2.png'];
const weapons = ['./images/revolver.png', './images/sword.png', './images/axe.png'];
const monsterAdjectives = ['Creepy', 'Awful', 'Gross', 'Despicable', 'Dreadful'];
const monsterTypes = ['Orc', 'Troll', 'Goblin', 'Yeti'];
const monsterNames = ['John', 'Donald', 'Thomas', 'Richard', 'Jose', 'David', 'Oliver', 'James', 'Paul', 'George'];
const tasks = [basicArithmetic, translation];


// main parts of the game
const homepage = document.querySelector('.homepage');
const gamepage = document.querySelector('.gamepage');
const scoreboard = document.querySelector('.scoreboard');

// homepage elements
const playBtn = document.querySelector('.play-btn');
const scoreboardBtn = document.querySelector('.scoreboard-btn');
const nameField = document.forms.info.name;

// scoreboard elements
const scoreboardHomepageBtn = document.querySelector('.scoreboard-homepage-btn');
const scoreboardTable = document.querySelector('.scoreboard-table');

// gamepage (field) elements
const actionBtn = document.querySelector('.action-btn');
const roundElem = document.querySelector('.round');
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

// gamepage (spells-modal) elements
const spellsModal = document.querySelector('.spells-modal');
const closeBtn = document.querySelector('.close-btn');
const attackBtn = document.querySelector('.attack-btn');
const healBtn = document.querySelector('.heal-btn');

// gamepage (task-modal) elements
const taskModal = document.querySelector('.task-modal');
const taskHeading = document.querySelector('.task-heading');
const taskBody = document.querySelector('.task-body');
const answerBtn = document.querySelector('.answer-btn');

// gamepage (result-modal) elements
const resultModal = document.querySelector('.result-modal');
const gameHomepageBtn = document.querySelector('.game-homepage-btn');
const gamePlayAgainBtn = document.querySelector('.game-play-again-btn');
const resultTable = document.querySelector('.result-table');

const keycodes = {
    ENTER: 13,
};

let game = new Game();
let hero = new Hero();
let monster = new Monster();

nameField.focus();
addListeners();

const xhr = new XMLHttpRequest();

xhr.open('GET', './data/vocabulary.json', true);
xhr.overrideMimeType('application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === '200') {
        console.log(xhr.responseText);
    }
};
xhr.send();
