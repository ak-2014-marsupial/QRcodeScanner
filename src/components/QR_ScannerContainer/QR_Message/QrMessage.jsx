import React from 'react';

import css from "./QrMessage.module.css"

const QrMessage = ({mess,isOpen}) => {

    return (
        <>
            {isOpen ? <div className={css.qr_message}>{mess}</div>:null}
        </>
    );
};

export {QrMessage};