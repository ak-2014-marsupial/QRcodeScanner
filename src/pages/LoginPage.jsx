import React, {useEffect, useState} from 'react';
import {Modal} from "../components";

const LoginPage = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
        return ()=> console.log("DEL")

    }, []);
    return (
            <Modal active={active} setActive={setActive}>
            </Modal>

    );
};

export  {LoginPage};