import React, {useEffect, useState, useRef} from 'react';
import './Timer.scss'
import timerSVG from '../../assets/img/timer.svg'

function Timer ({duration}) {
    const [timer, setTimer] = useState(duration);
    let hours = Math.floor(timer / 60 / 60);
    let minutes = Math.floor(timer / 60)
    let seconds = timer % 60

    const id = useRef(null);
    const clear = () => {
        window.clearInterval(id.current);
    };
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    return (
        <div className='timer'>
            <img src={timerSVG} alt="timer"/>
            <span className='timer__text'>{`${hours}:${minutes}:${seconds}`}</span>
        </div>
    );
}

export default Timer;