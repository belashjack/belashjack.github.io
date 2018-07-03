import { monsterAdjectives, monsterTypes, monsterNames, heads, bodies, legs, weapons } from './data';
import { game, getRandomInt } from './app';

export default class Monster {
    constructor() {
        this.initialHealth = 100;
        this.health = 100;

        this.headImg = document.querySelector('.head img');
        this.bodyImg = document.querySelector('.body img');
        this.legsImg = document.querySelector('.legs img');
        this.weaponImg = document.querySelector('.weapon img');
    }
    create() {
        // monster name
        this.name = `${monsterAdjectives[getRandomInt(0, monsterAdjectives.length - 1)]} ${monsterTypes[getRandomInt(0, monsterTypes.length - 1)]} ${monsterNames[getRandomInt(0, monsterNames.length - 1)]}`;
        game.monsterName.textContent = this.name;

        // monster health
        game.monsterHealth.textContent = `${this.health}/${this.initialHealth}`;

        // monster appearance
        this.headImg.src = heads[getRandomInt(0, heads.length - 1)];
        this.bodyImg.src = bodies[getRandomInt(0, bodies.length - 1)];
        this.legsImg.src = legs[getRandomInt(0, legs.length - 1)];
        this.weaponImg.src = weapons[getRandomInt(0, weapons.length - 1)];
    }
    underAttack() {
        game.monsterElem.classList.add('monster-attacked');
        setTimeout(() => {
            game.monsterElem.classList.remove('monster-attacked');
        }, 1000);
    }
    changeHealth() {
        this.health -= 30;
    }
}
