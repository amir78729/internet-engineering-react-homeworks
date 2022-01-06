import React from 'react';
import s from './keypad.module.css';
import Button from '../button/button';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function Keypad({ clickHandle }) {
    const handleButtonClick = (button) => {
        // TODO: handle clicking here.
        clickHandle(button);
    };

    const buttons = [
        { text: 'C', isDark: true },
        { text: '+/-', isDark: true },
        { text: '%', isDark: true },
        { text: '÷', isDark: true },
        { text: '7' },
        { text: '8' },
        { text: '9' },
        { text: 'x', isDark: true },
        { text: '4' },
        { text: '5' },
        { text: '6' },
        { text: '-', isDark: true },
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '+', isDark: true },
        { text: '0', isLarge: true },
        { text: '.' },
        { text: '=', isDark: true }
    ];

    return (
        <div className={s.keypad}>
            {buttons.map((button) => (
                <Button
                    key={button.text}
                    text={button.text}
                    onClick={handleButtonClick}
                    className={cx(button.isLarge && s['button-2x'], button.isDark && s.dark)}
                />
            ))}
        </div>
    );
}

Keypad.propTypes = {
    clickHandle: PropTypes.func
};
