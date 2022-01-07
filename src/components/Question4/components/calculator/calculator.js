import React, { useState } from 'react';
import Keypad from '../keypad/keypad';
import Screen from '../screen/screen';
import s from './calculator.module.css';

export default function Calculator() {
    const calculate = (n1, op, n2) => {
        switch (op) {
            case '+':
                return parseFloat(n1) + parseFloat(n2);
            case '-':
                return n1 - n2;
            case 'x':
                return n1 * n2;
            case '÷':
                return n1 / n2;
            case '%':
                return calculate(n1, operator, (n1 * n2) / 100);
            default:
                return;
        }
    };

    const handleClickedButton = (button) => {
        if (button === 'C') {
            setNumber1('');
            setNumber2('');
            setOperator('');
        } else if ([...Array(10).keys()].map((num) => '' + num).includes(button)) {
            if (operator === '') {
                setNumber1((number1) => number1 + button);
            } else {
                setNumber2((number2) => number2 + button);
            }
        } else if ('+-÷x'.split('').includes(button)) {
            if (number1 !== '') {
                setOperator(button);
            } else if (button === '-') {
                setNumber1('-');
            }
            if (number2 !== '') {
                setNumber1(calculate(parseFloat(number1), operator, parseFloat(number2)));
                setNumber2('');
            }
        } else if (button === '=') {
            if (number2 !== '') {
                setNumber1(calculate(number1, operator, number2));
                setNumber2('');
                setOperator('');
            }
        } else if (button === '+/-') {
            setNumber1((number1) => -1 * number1);
        } else if (button === '%') {
            if (number2 !== '' && number2 !== '' && operator !== '') {
                setNumber1(calculate(parseFloat(number1), '%', parseFloat(number2)));
                setNumber2('');
                setOperator('');
            }
        } else if (button === '.') {
            if (number2 === '') {
                setNumber1((setNumber1) => setNumber1 + '.');
            } else {
                setNumber2((setNumber2) => setNumber2 + '.');
            }
        }
    };
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operator, setOperator] = useState('');

    return (
        <div className={s.calculator}>
            <Screen text={`${number1}${operator}${number2}`} />
            <Keypad clickHandle={(btn) => handleClickedButton(btn)} />
        </div>
    );
}
