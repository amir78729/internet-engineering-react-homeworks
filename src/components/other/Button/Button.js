import './Button.css';
import PropTypes from "prop-types";

export const Button = ({ title, disabled, onClick, color, background = '#fff' }) => {
    return (
        <button
            className="Button"
            disabled={disabled}
            style={{ background, color }}
            onClick={onClick}>
            {title}
        </button>
    );
};
Button.propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
    background: PropTypes.string,
};

