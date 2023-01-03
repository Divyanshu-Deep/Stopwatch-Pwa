import React from 'react'
import { useRef, useState } from 'react';
import * as S from './styles';
const Watch = () => {
    const [time, setTime] = useState(0);
    const [pause, setPause] = useState(false);
    let intervalId = useRef();
    const startWatch = () => {
        setPause(!pause);
        intervalId.current = setInterval(() => {
                setTime((time) => time + 1);
        }, 1000)
    }
    const minuteValue = `${Math.floor(time / 60)}` 

    const formatTime = () => {
        const seconds = `0${time % 60}`.slice(-2)
        const minutes = `0${minuteValue % 60}`.slice(-2)
        const hours = `0${Math.floor(time / 3600 )}`.slice(-2)
        return `${hours}:${minutes}:${seconds}`
    }
    const pauseWatch = () => {
        clearInterval(intervalId.current);
        setPause(!pause);
    }
    const stopWatch = () => {
        setPause(!pause);
        clearInterval(intervalId.current);
        setTime(0)
    }
    return (
        <S.Main>
        <S.Container>
            <S.Clock>
                {formatTime()}
            </S.Clock> 
        </S.Container>
        <S.Container>
        <S.Buttons>
               {!pause ? <S.Button onClick={startWatch}>Start</S.Button> : <S.Button className='pause' onClick={pauseWatch}>Pause</S.Button> }
                <S.Button onClick={stopWatch}>Reset</S.Button>
            </S.Buttons>
        </S.Container>
        </S.Main>
    )
}

export default Watch