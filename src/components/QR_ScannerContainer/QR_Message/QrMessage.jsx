import React from 'react';

import css from "./QrMessage.module.css"
import {ButtonHoldIncDecr} from "../ButtonHoldIncrDecr";
import {Product} from "../ Product";
import {normalizeMess} from "./UtilsQrMessage";

const QrMessage = ({mess, showQrMessage, resumeScanner, setShowQrMessage}) => {

    if (!showQrMessage) return null;

    const handleClick = () => {
        resumeScanner();
        console.log(showQrMessage);

        setShowQrMessage(false);
    }

    return (
        <>
            <div className={css.qr_message}>
                {normalizeMess(mess)}
                <Product str={normalizeMess(mess)}/>
                <ButtonHoldIncDecr/>
                <button onClick={handleClick}>NEXT</button>
            </div>

        </>
    );
};

export {QrMessage};