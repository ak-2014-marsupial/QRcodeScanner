import React from 'react';

import css from "./Product.module.css";
import {getItemById} from "../QR_Message";

const Product = ({mess}) => {
    const item =getItemById(mess);

    return (
        <div >
            <div>{item.code}</div>
            <div className={css.name}>{item.name}</div>
            <div className={css.wrapper_img}>
                <img src={item.src} alt={item.name}/>
            </div>
        </div>
    );
};

export {Product};