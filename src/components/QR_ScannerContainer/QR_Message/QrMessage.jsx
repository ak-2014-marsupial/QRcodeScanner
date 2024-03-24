import React, {useContext} from 'react';

import css from "./QrMessage.module.css"
import {Counter} from "../OrderContainer/Counter";
import {Product} from "../Product";
import {getItemById} from "./UtilsQrMessage";
import {useLocalStorage} from "../../../hooks";
import {QrCodeContext} from "../store";

const QrMessage = () => {
    const {mess, showQrMessage, resumeScanner, setShowQrMessage,value} = useContext(QrCodeContext);
    const [order, setOrder] = useLocalStorage([], "order")

    if (!showQrMessage) return null;

    const item = getItemById(mess);
    const handleNext = () => {
        const newItem = {...item, "kol": value};
        setOrder([...order, newItem]);
        resumeScanner();
        setShowQrMessage(false);
    }

    return (
        <div className={css.qr_message}>
            <Product item={item}/>
            <Counter/>
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
};

export {QrMessage};