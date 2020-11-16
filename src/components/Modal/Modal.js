import React, {useRef, useState} from 'react';
import './Modal.scss'
import Timer from "../Timer/Timer";
import Card from "../Card/Card";
import Button from "../Button/Button";

function Modal({closeFn}) {
    let selectRef = useRef('')
    const [cardValue, setCardValue] = useState(300)
    const [isActive, setActive] = useState({id: 2, active: true})

    const handleSubmit = () => {
        alert(`Метод: ${selectRef.current.value}, Сумма: ${cardValue}`)
    }
    const handleActive = id => {
        setActive({
            id,
            active: true
        })
    }
    return (
        <>
            <div className='main-modal'>
                <div className='main-modal__header'>
                    <div className='main-modal__header__topPercent'>+100%</div>
                    <Timer duration={960}/>
                    <h2 className='main-modal__header__title'>Увеличьте свой депозит!</h2>
                    <button className='main-modal__close-btn' onClick={closeFn}>×</button>
                    <select name="payment" id="payment" className='main-modal__select-payment' ref={selectRef}>
                        <option value="Банковская карта">Банковская карта</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Выставить счет">Выставить счет</option>
                    </select>
                </div>
                <div className='main-modal__body'>
                    <div className='main-modal__body__cards'>
                        <Card depAmount={50} recAmount={100} getValue={setCardValue} id={1} click={handleActive}
                              active={isActive.id === 1}/>
                        <Card depAmount={100} recAmount={200} getValue={setCardValue} id={2} click={handleActive}
                              active={isActive.id === 2}/>
                        <Card depAmount={500} recAmount={1000} getValue={setCardValue} id={3} click={handleActive}
                              active={isActive.id === 3}/>
                    </div>
                    <span className='main-modal__body__result-text'><span
                        style={{color: '#83F6B1'}}>$ {cardValue}</span> будет зачисленно вам на счет</span>
                    <Button text='Пополнить' onCLick={handleSubmit}/>

                </div>
                <div className='main-modal__footer'>
                    <span className='main-modal__footer__text'>При пополнении счета с банковской карты списание средств происходит по курсу банка клиента</span>
                    <a className='main-modal__footer__link' href="#">Подробнее</a>

                </div>
            </div>
            <div className="overlay" onClick={closeFn}>
            </div>
        </>
    );
}

export default Modal;