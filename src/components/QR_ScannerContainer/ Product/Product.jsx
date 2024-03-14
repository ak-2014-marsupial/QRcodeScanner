import React from 'react';
import goods from "../../../tovar.json";

import css from "./Product.module.css";

const Product = ({str}) => {
    const index =str? str[0][0]:"3";

    return (
        <div >
            <div className={css.name}>{goods[index].name}</div>
            <div className={css.wrapper_img}>

                <img src={goods[index].src} alt=""/>
            </div>
        </div>
    );
};

export {Product};