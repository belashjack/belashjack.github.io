import { game, getRandomInt } from './app';

export default function basicArithmetic() {
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
    game.taskHeading.textContent = 'Perform the following arithmetic operation';

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
    resultElem.classList.add('task-input');

    // add all created elements to the page
    game.taskBody.appendChild(number1Elem);
    game.taskBody.appendChild(operationElem);
    game.taskBody.appendChild(number2Elem);
    game.taskBody.appendChild(equalSignElem);
    game.taskBody.appendChild(resultElem);

    resultElem.focus();

    return result;
}
