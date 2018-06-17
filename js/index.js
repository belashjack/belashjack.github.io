class Game {
    constructor() {
        this.a = 5;
    }
    init() {
        monster.create();
    }
    showGame() {
        homepage.classList.add('hidden');
        // footer.classList.add('hidden');
        gamepage.classList.remove('hidden');
    }
}

class Monster {
    create() {
        // monster appearance
        headImg.src = heads[getRandomInt(0, heads.length - 1)];
        bodyImg.src = bodies[getRandomInt(0, bodies.length - 1)];
        legsImg.src = legs[getRandomInt(0, legs.length - 1)];
        weaponImg.src = weapons[getRandomInt(0, weapons.length - 1)];

        // monster name
        monsterName.textContent = `${monsterAdjectives[getRandomInt(0, monsterAdjectives.length - 1)]} ${monsterTypes[getRandomInt(0, monsterTypes.length - 1)]} ${monsterNames[getRandomInt(0, monsterNames.length - 1)]}`;
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const startGame = function startGame() {
    game.init();
    game.showGame();
};
const showModal = function showModal() {
    modal.classList.remove('hidden');
};
const hideModal = function hideModal() {
    modal.classList.add('hidden');
};
const showTask = function showTask() {

};

const addListeners = function addListeners() {
    playBtn.addEventListener('click', startGame);
    actionBtn.addEventListener('click', showModal);
    closeBtn.addEventListener('click', hideModal);
    closeBtn.addEventListener('click', showTask);
};

const playBtn = document.querySelector('.play-btn');
const actionBtn = document.querySelector('.action-btn');
const homepage = document.querySelector('.homepage');
const gamepage = document.querySelector('.gamepage');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const attackBtn = document.querySelector('.attack-btn');
const healBtn = document.querySelector('.heal-btn');

// const footer = document.querySelector('footer');
// const field = document.querySelector('.field');
const headImg = document.querySelector('.head img');
const bodyImg = document.querySelector('.body img');
const legsImg = document.querySelector('.legs img');
const weaponImg = document.querySelector('.weapon img');
const monsterName = document.querySelector('#monster-name');


const game = new Game();
const monster = new Monster();

addListeners();
