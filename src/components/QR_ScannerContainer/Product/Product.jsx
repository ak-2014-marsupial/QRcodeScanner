import React from 'react';

import css from "./Product.module.css";

const Product = ({item}) => {

    return (
        <div>
            <div>{item.code}</div>
            <div className={css.name}>{item.name}</div>
            <div className={css.wrapper_img}>
                <img src={item.src} alt={item.name}/>
            </div>
        </div>
    );
};

export {Product};