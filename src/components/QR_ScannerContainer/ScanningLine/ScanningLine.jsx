import React from 'react';
import {Transition} from "react-transition-group";

import "./ScanningLine.css";
const ScanningLine = ({isScanning,timeout}) => {
    return (
        <div>
            <Transition in={isScanning} timeout={timeout}>
                {(state)=> (
                    <div className={`scanning scanning--${state}`}>
                        <div className={"scanning_inner"}></div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export  {ScanningLine};