import React, { useEffect, useState } from 'react';

export const Timer = ({ setStop, questionNumber }) => {
    const [timer, setTimer] = useState(20);

    useEffect(() => {
        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [ timer]);

    useEffect(() => {
        setTimer(20);
    }, [questionNumber]);
    return timer;
};