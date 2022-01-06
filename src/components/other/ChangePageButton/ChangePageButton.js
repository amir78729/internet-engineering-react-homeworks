import './ChangePageButton.css'

export const ChangePageButton = ({ isNext, hidden, onClick }) => {
    return (
        <button 
            className='Change-page-button' 
            style={{opacity: hidden ? '0' : '1'}}
            disabled={hidden}
            onClick={onClick}
        >
            {isNext ? 'سوال\nبعد' : 'سوال\nقبل'}
        </button>
    )
}