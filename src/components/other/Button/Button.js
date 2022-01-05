import './Button.css'

export const Button = ({ title, disabled, onClick, color, background = '#fff' }) => {
    return (
        <button 
            className='Button' 
            disabled={disabled}
            style={{background, color}}
            onClick={onClick}
        >
            {title}
        </button>
    )
}