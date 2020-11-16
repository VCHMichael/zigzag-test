import React from 'react';
import './Button.scss'

function Button({text, onCLick}) {
    return (
        <button className='btn' onClick={onCLick}>{text}</button>
    );
}

export default Button;