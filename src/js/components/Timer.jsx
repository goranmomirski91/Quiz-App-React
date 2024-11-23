import React, { useEffect, useState } from 'react';

const Timer = ({ active, onTimeout }) => {
    const [time, setTime] = useState(20);

  

    useEffect(() => {
        if (!active) return;
        if (time === 0) {
            onTimeout();
            return;
        }
        const timer = setTimeout(() => setTime((prev) => prev - 1), 1000);
        return () => clearTimeout(timer);
    }, [time, active, onTimeout]);

    useEffect(() => {
        setTime(20);
    }, []);

    return <p className='timer'>{time}s</p>;
};

export default Timer;
