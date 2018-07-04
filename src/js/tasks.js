import { getRandomInt } from './app';
import { vocabulary } from '../data/vocabulary';
import { dragAndDropWords } from '../data/dragAndDropWords';
import { listeningWords } from '../data/listeningWords';

export default class Task {
    constructor() {
        this.taskHeading = document.querySelector('.task-heading');
        this.taskBody = document.querySelector('.task-body');
        this.tasks = [this.basicArithmetic, this.translation, this.dragAndDrop, this.listening];
        // this.tasks = [this.listening];
    }
    performRandomTask() {
        this.randomTask = this.tasks[getRandomInt(0, this.tasks.length - 1)];
        this.randomTask();
    }
    basicArithmetic() {
        // array with math operations
        const mathOperations = ['+', '-', '×', '/'];

        // get rangom math operation
        const operation = mathOperations[getRandomInt(0, mathOperations.length - 1)];

        let number1;
        let number2;

        // set reasonable values for different math operations
        if (operation === '×' || operation === '/') {
            if (operation === '×') {
                number1 = getRandomInt(2, 25);
                number2 = getRandomInt(2, 25);
                this.taskResult = number1 * number2;
            } else {
                number1 = getRandomInt(2, 200);
                number2 = getRandomInt(2, 30);
                while (number1 / number2 !== Math.round(number1 / number2)) {
                    number1 = getRandomInt(2, 200);
                    number2 = getRandomInt(2, 30);
                }
                this.taskResult = number1 / number2;
            }
        } else if (operation === '+') {
            number1 = getRandomInt(2, 100);
            number2 = getRandomInt(2, 99);
            this.taskResult = number1 + number2;
        } else {
            number1 = getRandomInt(2, 100);
            number2 = getRandomInt(2, 99);
            this.taskResult = number1 - number2;
        }

        // set the heading of the task
        this.taskHeading.textContent = 'Perform the following arithmetic operation';

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
        resultElem.classList.add('task-input', 'calculation-result');

        // add all created elements to the page
        this.taskBody.appendChild(number1Elem);
        this.taskBody.appendChild(operationElem);
        this.taskBody.appendChild(number2Elem);
        this.taskBody.appendChild(equalSignElem);
        this.taskBody.appendChild(resultElem);

        resultElem.focus();
    }
    translation() {
        const engWord = Object.keys(vocabulary)[getRandomInt(0, Object.keys(vocabulary).length)];

        this.taskBody.style.flexDirection = 'column';

        // set the heading of the task
        this.taskHeading.textContent = 'Translate the word into Russian';

        // create DOM element for the word in English
        const engWordElem = document.createElement('div');
        engWordElem.classList.add('english-word');
        engWordElem.textContent = `${engWord} (${vocabulary[engWord][0]})`;

        // create field for answer
        const resultElem = document.createElement('input');
        resultElem.type = 'text';
        resultElem.classList.add('task-input');

        // add all created elements to the page
        this.taskBody.appendChild(engWordElem);
        this.taskBody.appendChild(resultElem);

        resultElem.focus();
        [, this.taskResult] = vocabulary[engWord];
    }
    dragAndDrop() {
        // set the heading of the task
        this.taskHeading.textContent = 'Reorder the letters to get a right word';

        const randomWord = Object.keys(dragAndDropWords)[getRandomInt(0, Object.keys(dragAndDropWords).length - 1)];
        const shuffledRandomWordArray = randomWord.split('').sort(() => {
            return 0.5 - Math.random();
        });

        const sortableDiv = document.createElement('div');
        sortableDiv.classList.add('sortable-block');

        shuffledRandomWordArray.forEach((letter) => {
            const letterElem = document.createElement('div');
            letterElem.classList.add('sortable-letter');
            letterElem.textContent = letter;
            sortableDiv.appendChild(letterElem);
        });

        // create empty field for answer
        const resultElem = document.createElement('input');
        resultElem.classList.add('hidden');
        resultElem.classList.add('task-input');

        // add all created elements to the page
        this.taskBody.appendChild(sortableDiv);
        this.taskBody.appendChild(resultElem);

        $(() => {
            $(sortableDiv).sortable();
            $(sortableDiv).disableSelection();
        });

        this.taskResult = dragAndDropWords[randomWord];
    }
    listening() {
        // set the heading of the task
        this.taskHeading.textContent = 'Write the word you hear';

        this.taskBody.style.flexDirection = 'column';

        // create audio element
        const randomAudio = Object.keys(listeningWords)[getRandomInt(0, Object.keys(listeningWords).length - 1)];
        const audioElem = new Audio(randomAudio);
        audioElem.setAttribute('controls', true);
        audioElem.style.margin = '50px';

        // create empty field for answer
        const resultElem = document.createElement('input');
        resultElem.type = 'text';
        resultElem.classList.add('task-input');

        // add all created elements to the page
        this.taskBody.appendChild(audioElem);
        this.taskBody.appendChild(resultElem);

        this.taskResult = listeningWords[randomAudio];
        audioElem.focus();
    }
    getTaskResult() {
        if (this.randomTask === this.basicArithmetic) {
            return [String(this.taskResult)];
        }
        if (this.randomTask === this.translation) {
            return this.taskResult;
        }
        if (this.randomTask === this.dragAndDrop) {
            const letterElements = document.querySelectorAll('.sortable-letter');
            const resultElem = document.querySelector('.task-input');
            letterElements.forEach((letterElem) => {
                resultElem.value += letterElem.textContent;
            });
            return this.taskResult;
        }
        if (this.randomTask === this.listening) {
            return [this.taskResult];
        }
    }
    clearBody() {
        this.taskBody.innerHTML = '';
        this.taskBody.style.flexDirection = 'row';
    }
}
