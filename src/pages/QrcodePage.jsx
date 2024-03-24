import React, {useEffect, useRef, useState} from 'react';

import "./QRCode.css"
import {QrCodeContext, QrMessage, ScanningLine} from "../components";
import {Html5Qrcode} from "html5-qrcode";


const QrcodePage = () => {
    const [isEnabled, setEnabled] = useState(true);
    const [qrMessage, setQrMessage] = useState("");
    const [showQrMessage, setShowQrMessage] = useState(false);
    const [isScanning, setScanning] = useState(false);
    const [value, setValue] = useState(3);

    const html5QrCodeRef = useRef(null);

    // document.documentElement.style.setProperty("--ScannerWidth",300*(1+widthData/100));
    console.log(showQrMessage);
    const startScanner = () => {

        if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 2) {
            // console.log("Здесь можно выключить кнопку камеры и сканирования");
            return
        }

        const config = {fps: 10, qrbox: {width: 200, height: 200}};
        let html5QrCode = new Html5Qrcode("qrCodeContainer");
        html5QrCodeRef.current = html5QrCode;

        html5QrCode.start({facingMode: "environment"}, config, qrCodeSuccess)
            .then(() => {
                setScanning(true)

            })
            .catch((err) => {
                console.log("Scanner error", err)
            });

    }

    const stopScanner = () => {
        if (html5QrCodeRef.current && html5QrCodeRef.current.getState() !== 1) {
            html5QrCodeRef.current
                .stop()
                .then((ignore) => console.log("Scanner stop"))
                .catch((err) => console.log("Scanner error"));
            setEnabled(false);
            setScanning(false);

        }
    };

    const pauseScanner = () => {
        console.log("Pause", html5QrCodeRef.current.getState());

        if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 2) {
            html5QrCodeRef.current.pause();
            setScanning(false);
        }
    }

    const resumeScanner = () => {
        if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 3) {
            html5QrCodeRef.current.resume();
            setScanning(true);
            setShowQrMessage(false)
        }
    }

    const qrCodeSuccess = (decodedText) => {
        setQrMessage(decodedText);
        setShowQrMessage(true);
        pauseScanner();
        console.log(`Code matched = ${decodedText}`);

    };

    useEffect(() => {
        if (isEnabled) {
            startScanner();
            if (html5QrCodeRef.current.getState() === 2) setScanning(true);
        }

        return () => {
            if (html5QrCodeRef.current && html5QrCodeRef.current.getState() !== 1) {
                stopScanner();
            }
        }
    }, [isEnabled]);
    const qrCodeCtxValue = {
        mess: qrMessage,
        resumeScanner,
        showQrMessage,
        setShowQrMessage,
        value,
        setValue

    };

    return (
        <div className="scaner">
            <div className={"wrapper"}>
                <div id="qrCodeContainer"/>
                <ScanningLine isScanning={isScanning} timeout={3000}/>
            </div>

            <div className={"wrapper_message"}>
                <div className="qr-message">
                    <QrCodeContext.Provider value={qrCodeCtxValue}>
                        <QrMessage/>
                    </QrCodeContext.Provider>

                </div>
            </div>


            {isScanning ?
                <button onClick={pauseScanner}>Scanning Stop</button>
                :
                <button onClick={resumeScanner}>Scanning Run</button>
            }


        </div>
    );
};

export {QrcodePage};