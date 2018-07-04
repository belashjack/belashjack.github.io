import { game, getRandomInt } from './app';

export default class Hero {
    constructor() {
        this.initialHealth = 100;
        this.health = 100;
        this.damageValues = [5, 10, 15, 20, 30, 40, 50];
    }
    create() {
        // hero name
        this.name = game.nameField.value;
        game.heroName.textContent = this.name;

        // hero health
        game.heroHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    updateHealth() {
        this.initialHealth = 100;
        this.health = 100;
        game.heroHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    healYourself() {
        if (this.initialHealth - this.health < 50) {
            this.health = this.initialHealth;
        } else {
            this.health += 50;
        }
        game.heroHealth.textContent = `${this.health}/${this.initialHealth}`;
    }
    underAttack() {
        game.heroElem.classList.add('monster-attacked');
        setTimeout(() => {
            game.heroElem.classList.remove('monster-attacked');
        }, 1000);
    }
    changeHealth() {
        this.health -= this.damageValues[getRandomInt(0, this.damageValues.length - 1)];
    }
}
