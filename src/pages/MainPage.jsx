import React from 'react';

import css from "./Pages.module.css";
import {ButtonHoldIncDecr} from "../components/QR_ScannerContainer/ButtonHoldIncrDecr/ButtonHoldIncDecr";

const MainPage = () => {
    return (
        <div className={css.page} >
            <ButtonHoldIncDecr/>
        </div>
    );
};

export  {MainPage};