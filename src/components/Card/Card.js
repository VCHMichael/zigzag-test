import React from 'react';
import './Card.scss'
import checkSVG from '../../assets/img/check.svg'

function Card({depAmount, recAmount, getValue, active, click, id}) {


    const handleClick = () => {
        click(id)
        getValue(depAmount+recAmount)
    }
    return (
        <div className={`card-main${active ? '--active': ''}`} onClick={handleClick}>
            <div className="card-main__deposit-block">
                <span className='card-main__deposit-block__text'>Пополнить на</span>
                <span className='card-main__deposit-block__amount'>$ {depAmount}</span>
            </div>
            <div className="card-main__receive-block">
                <span className='card-main__receive-block__text'>Получить</span>
                <span className='card-main__receive-block__amount'>$ {recAmount}</span>
            </div>
            <div className="card-main__round">
                {active ? <img src={checkSVG}/> : '' }
            </div>
        </div>
    );
}

export default Card;