import React, {useEffect, useRef, useState} from 'react';

import "./QRCode.css"
import { ScanningLine} from "../components";
import {QrMessage} from "../components/QR_ScannerContainer/QR_Message";

import {startScanner, stopScanner,resumeScanner} from "../components"

const QrcodePage = () => {
    const [isEnabled, setEnabled] = useState(true);
    const [qrMessage, setQrMessage] = useState("");
    const [showQrMessage, setShowQrMessage] = useState(false);
    const [widthData, setWidthData] = useState(0);
    const [isScanning, setScanning] = useState(false)

    const html5QrCodeRef = useRef(null);

    // document.documentElement.style.setProperty("--ScannerWidth",300*(1+widthData/100));



    const pauseScanner = () => {

        if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 2) {
            html5QrCodeRef.current.pause();
            setScanning(false);
        }
    }


    const qrCodeSuccess = (decodedText) => {
        setQrMessage(decodedText);
        setShowQrMessage(true);
        pauseScanner(html5QrCodeRef, setScanning);
        console.log(`Code matched = ${decodedText}`);
    };

    useEffect(() => {

        if (isEnabled) {
            startScanner(html5QrCodeRef, setScanning, setQrMessage, setShowQrMessage, pauseScanner);
            if (html5QrCodeRef.current.getState() === 2) {

                setScanning(true)
            }
            ;
        }

        return () => {
            if (html5QrCodeRef.current && html5QrCodeRef.current.getState() !== 1) {
                stopScanner(html5QrCodeRef, setEnabled, setScanning);
            }
        }
    }, [isEnabled]);


    return (
        <div className="scaner">
            <div className={"wrapper"}>
                <div id="qrCodeContainer"/>
                <ScanningLine isScanning={isScanning} timeout={3000}/>

            </div>

            {/*<div>*/}
            {/*    <div>Width {300 * (1 + widthData / 100)}</div>*/}
            {/*    <InputTypeRange data={widthData} setData={setWidthData}/>*/}
            {/*</div>*/}

            <div className={"wrapper_message"}>
                <div className="qr-message">
                    {qrMessage && <QrMessage mess={qrMessage} isOpen={showQrMessage}/>}
                </div>
            </div>
            {isScanning ?
                <button onClick={pauseScanner}>Scanning Stop</button>
                :
                <button onClick={()=>resumeScanner(html5QrCodeRef, setScanning, setShowQrMessage)}>Scanning Run</button>
            }


        </div>
    );
};

export {QrcodePage};