import React from 'react';

import css from "./Order.module.css"
const Order = ({order}) => {
    const {code, name, kol, src} = order
    return (
        <div className={css.order}>
            <div className={css.code}>  {code}</div>
            <div className={css.name}>  {name}</div>
            <div className={css.kol}>  {kol}</div>
        </div>
    );
};

export {Order};