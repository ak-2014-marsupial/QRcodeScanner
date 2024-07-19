import React, {useEffect, useRef} from 'react';

import css from "./BarCode.module.css"

const BarCode = () => {
    const textFieldRef=useRef(null);

    useEffect(() => {
        textFieldRef.current.focus();
    }, []);

    const handleClick=()=>{
        textFieldRef.current.focus();
        console.log("click");

    }
    const handleTouchEnd=()=>{
        textFieldRef.current.focus();
        console.log("TouchEnd");
    }

    const btnPress=(e)=>{
        e.stopPropagation()
        // textFieldRef.current.focus();

    }

    return (
        <div className={css.wrapper} onClick={handleClick} onTouchEnd={handleTouchEnd}>
            <input
                className={css.textField}
                ref={textFieldRef}
                type="text"
                placeholder="barCode"
            />
            <button className={css.btn} onClick={(e)=>btnPress(e)}>PressMe</button>
            <button className={css.btn} >focus remains</button>
        </div>
    );
};

export {BarCode};