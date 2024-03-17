import React, {useEffect, useState} from 'react';

import css from "./QrMessage.module.css"
import {Counter} from "../OrderContainer/Counter";
import {Product} from "../Product";
import {getItemById} from "./UtilsQrMessage";
import {useLocalStorage} from "../../../hooks";

const QrMessage = ({mess, showQrMessage, resumeScanner, setShowQrMessage}) => {
    const [value, setValue] = useState(3);
    const [order, setOrder] = useLocalStorage([], "order")

    if (!showQrMessage) return null;

    const item = getItemById(mess);
    const handleClick = () => {
        const newItem = {...item, "kol": value};
        setOrder([...order, newItem]);
        resumeScanner();
        setShowQrMessage(false);
    }

    return (
        <div className={css.qr_message}>
            <Product item={item}/>
            <Counter value={value} setValue={setValue}/>
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
};

export {QrMessage};