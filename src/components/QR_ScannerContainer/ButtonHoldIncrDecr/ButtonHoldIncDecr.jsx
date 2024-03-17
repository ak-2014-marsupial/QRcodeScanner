import React, {useEffect, useState} from 'react';
import css from "./ButtonHoldIncDec.module.css"

const ButtonHoldIncDecr = () => {
    const [value, setValue] = useState(3);
    const [intervalId, setIntervalId] = useState(null);
    const [incrementSpeed, setIncrementSpeed] = useState(200);
    const [incrementAmount, setIncrementAmount] = useState(1);

    const startIncrement = () => {
        const id = setInterval(() => {
            setValue((prev) => prev + incrementAmount)
        }, incrementSpeed);
        setIntervalId(id);
    }

    const startDecrement = () => {
        const id = setInterval(() => {
            setValue((prev) => {
                if (prev === 0) return 0

                return prev - incrementAmount;
            })
        }, incrementSpeed);
        setIntervalId(id);
    }

    const stopIncrement = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setIncrementAmount(1);
    }

    const handleIncrement = () => {
        setIncrementAmount(1);
        startIncrement();
    }
    const handleTouchIncrement = () => {
        setIncrementAmount(1);
        startIncrement();
    }
    const handleDecrement = () => {
        setIncrementAmount(1);
        startDecrement();
    }

    const handleTouchDecrement = () => {
        setIncrementAmount(1);
        startDecrement();
    }
    const handleMouseUp = () => {
        stopIncrement();
    }
    const handleTouchEnd = () => {
        stopIncrement()
    }

    const handleMouseLeave = () => {
        stopIncrement();
    }
    const handleTouchCancel = () => {
        stopIncrement();
    }


    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }

    }, [intervalId]);

    return (
        <div className={css.wrapper}>
            <input type="text" value={value} readOnly/>
            <button
                onMouseDown={handleIncrement}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchIncrement}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}

            ><h3>+</h3></button>

            <button
                onMouseDown={handleDecrement}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchDecrement}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}


            ><h3>-</h3></button>

        </div>
    );
};

export {ButtonHoldIncDecr};