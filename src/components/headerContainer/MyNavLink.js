import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const MyNavLink = ({to,children}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Выполните действия после задержки
            console.log('Выполняется после 2-секундной задержки');
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <NavLink to={to}>{children}</NavLink>
    );
};

export  {MyNavLink};