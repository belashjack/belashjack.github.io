import Hero from './hero';
import Monster from './monster';
import Task from './tasks';
import '../css/style.css';
import '../css/basicArithmetic.css';
import '../css/translation.css';
import '../css/dragAndDrop.css';
import '../css/loadingPage.css';
import '../css/homepage.css';
import '../css/gamepage.css';
import '../css/taskModal.css';
import '../css/scoreboard.css';
import '../css/hero.css';
import '../css/monster.css';

export class Game {
    constructor() {
        // this.hero = new Hero();
        // this.monster = new Monster();
        this.task = new Task();

        this.round = 0;
        this.timers = [];

        // main parts of the game
        this.loadingPage = document.querySelector('.loading-page');
        this.homepage = document.querySelector('.homepage');
        this.gamepage = document.querySelector('.gamepage');
        this.scoreboard = document.querySelector('.scoreboard');

        // homepage elements
        this.playBtn = document.querySelector('.play-btn');
        this.scoreboardBtn = document.querySelector('.scoreboard-btn');
        this.nameField = document.forms.info.name;

        // scoreboard elements
        this.scoreboardHomepageBtn = document.querySelector('.scoreboard-homepage-btn');
        this.scoreboardTable = document.querySelector('.scoreboard-table');

        // gamepage (field) elements
        this.actionBtn = document.querySelector('.action-btn');
        this.roundElem = document.querySelector('.round');
        this.field = document.querySelector('.field');
        this.heroElem = document.querySelector('.hero');
        this.monsterElem = document.querySelector('.monster');
        this.heroName = document.querySelector('#hero-name');
        this.monsterName = document.querySelector('#monster-name');
        this.heroHealth = document.querySelector('.hero-info .health');
        this.monsterHealth = document.querySelector('.monster-info .health');

        // gamepage (spells-modal) elements
        this.spellsModal = document.querySelector('.spells-modal');
        this.closeBtn = document.querySelector('.close-btn');
        this.attackBtn = document.querySelector('.attack-btn');
        this.healBtn = document.querySelector('.heal-btn');

        // gamepage (task-modal) elements
        this.taskModal = document.querySelector('.task-modal');
        this.answerBtn = document.querySelector('.answer-btn');

        // gamepage (result-modal) elements
        this.resultModal = document.querySelector('.result-modal');
        this.gameHomepageBtn = document.querySelector('.game-homepage-btn');
        this.gamePlayAgainBtn = document.querySelector('.game-play-again-btn');
        this.resultTable = document.querySelector('.result-table');

        this.keycodes = {
            ENTER: 13,
        };
    }
    addListeners() {
        this.playBtn.addEventListener('click', () => {
            this.startGame();
        });
        this.nameField.addEventListener('input', () => {
            this.checkFormValidity();
        });
        this.actionBtn.addEventListener('click', () => {
            this.showModal();
        });
        this.closeBtn.addEventListener('click', () => {
            this.hideModal();
        });
        this.attackBtn.addEventListener('click', (event) => {
            this.showTask(event);
        });
        this.healBtn.addEventListener('click', (event) => {
            this.showTask(event);
        });
        this.answerBtn.addEventListener('click', (event) => {
            this.taskResult = this.task.getTaskResult();
            this.checkAnswer(event);
        });
        document.body.addEventListener('keypress', (event) => {
            this.taskResult = this.task.getTaskResult();
            this.checkAnswer(event);
        });
        this.gameHomepageBtn.addEventListener('click', () => {
            this.stopGame();
        });
        this.gamePlayAgainBtn.addEventListener('click', () => {
            this.restartGame();
        });
        this.scoreboardBtn.addEventListener('click', () => {
            this.showScoreboard();
        });
        this.scoreboardHomepageBtn.addEventListener('click', () => {
            this.showHomepage();
        });
    }
    startGame() {
        if (!this.checkFormValidity()) {
            return false;
        }
        this.init();
        this.showGame();
    }
    checkFormValidity() {
        let hasMistakes = false;
        if (!this.nameField.checkValidity()) {
            hasMistakes = true;
            this.nameField.scrollIntoView();
            this.nameField.classList.add('invalid-field');
        } else {
            this.nameField.classList.remove('invalid-field');
        }
        if (this.nameField.classList.contains('invalid-field')) {
            this.nameField.focus();
        }
        return !hasMistakes;
    }
    init() {
        this.hero = new Hero();
        this.monster = new Monster();

        this.round = 0;
        this.increaseRound();
        this.hero.create();
        this.monster.create();
    }
    increaseRound() {
        this.round++;
        this.roundElem.textContent = `Round ${this.round}`;
    }
    showGame() {
        this.homepage.classList.add('hidden');
        this.gamepage.classList.remove('hidden');
    }
    showModal() {
        this.spellsModal.classList.remove('hidden');
    }
    hideModal() {
        this.spellsModal.classList.add('hidden');
    }
    showTask(event) {
        this.taskModal.classList.remove('hidden');
        this.spellsModal.classList.add('hidden');
        this.task.performRandomTask();
        this.typeOfSpell = event.target;
    }
    checkAnswer(event) {
        if (this.taskModal.classList.contains('hidden') || (event.keyCode !== this.keycodes.ENTER && event.keyCode !== undefined)) {
            return;
        }

        const taskInput = document.querySelector('.task-input');
        this.answerBtn.disabled = true;
        // Посмотри, может оно не нужно?
        // game.answerBtn.removeEventListener('click', checkAnswer);
        // document.body.removeEventListener('keypress', checkAnswerViaKeyboard);

        const isCorrectAnswer = this.taskResult.includes(taskInput.value);

        if (isCorrectAnswer) {
            this.taskModal.firstElementChild.classList.add('correct');
        } else {
            this.taskModal.firstElementChild.classList.add('incorrect');
        }
        this.taskModal.classList.add('slowly-disappear');

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                this.taskModal.style.opacity = '0';
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
    restoreTask() {
        this.taskModal.classList.add('hidden');
        this.answerBtn.disabled = false;
        this.task.clearBody();
        this.taskModal.style.opacity = '1';
        this.taskModal.firstElementChild.classList.remove('correct', 'incorrect');
    }
    launchBattle(isCorrectAnswer) {
        const promise = new Promise((resolve) => {
            if (isCorrectAnswer) {
                if (this.typeOfSpell === this.healBtn) {
                    this.hero.healYourself();
                    this.timers.push(setTimeout(() => {
                        resolve();
                    }, 2000));
                } else {
                    this.monster.underAttack();
                    this.monster.changeHealth();
                    this.checkMonsterHealth();
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
            this.hero.underAttack();
            this.hero.changeHealth();
            this.checkHeroHealth();
        });
    }
    checkMonsterHealth() {
        if (this.monster.health <= 0) {
            this.monsterHealth.textContent = `${0}/${this.monster.initialHealth}`;
            setTimeout(() => {
                this.startNewRound();
            }, 1000);
        } else {
            this.monsterHealth.textContent = `${this.monster.health}/${this.monster.initialHealth}`;
        }
    }
    checkHeroHealth() {
        if (this.hero.health <= 0) {
            this.heroHealth.textContent = `${0}/${this.hero.initialHealth}`;
            setTimeout(() => {
                this.finishBattle();
            }, 1000);
        } else {
            this.heroHealth.textContent = `${this.hero.health}/${this.hero.initialHealth}`;
        }
    }
    startNewRound() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });

        this.increaseRound();
        this.hero.updateHealth();
        this.monster = new Monster();
        this.monster.create();
    }
    finishBattle() {
        this.storeResult();
        this.showResult();
    }
    storeResult() {
        const gameResults = JSON.parse(localStorage.getItem('gameResults')) || {};
        const newKey = Object.keys(gameResults).length + 1;
        gameResults[newKey] = {
            heroName: this.hero.name,
            monstersDefeated: this.round - 1,
        };
        localStorage.setItem('gameResults', JSON.stringify(gameResults));
    }
    showResult() {
        this.resultModal.querySelector('.result-name').textContent = this.hero.name;
        this.resultModal.querySelector('.result-number-of-monsters').textContent = this.round - 1;
        this.createResultsTable(this.resultModal);
        this.field.classList.add('hidden');
        this.resultModal.classList.remove('hidden');
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
        this.homepage.classList.remove('hidden');
        this.gamepage.classList.add('hidden');
        this.resultModal.classList.add('hidden');
        this.resultTable.tBodies[0].innerHTML = '';
        this.field.classList.remove('hidden');
    }
    restartGame() {
        this.stopGame();
        this.startGame();
    }
    showScoreboard() {
        this.createResultsTable(this.scoreboard);
        this.homepage.classList.add('hidden');
        this.scoreboard.classList.remove('hidden');
    }
    showHomepage() {
        this.scoreboardTable.tBodies[0].innerHTML = '';
        this.scoreboard.classList.add('hidden');
        this.homepage.classList.remove('hidden');
    }
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export const game = new Game();

// что-то типа того
window.onload = () => {
    game.loadingPage.classList.add('hidden');
    game.homepage.classList.remove('hidden');
    game.nameField.focus();
    game.addListeners();
};
