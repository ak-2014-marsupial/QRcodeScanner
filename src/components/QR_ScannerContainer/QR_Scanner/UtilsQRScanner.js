import {Html5Qrcode} from "html5-qrcode";

const startScanner = (html5QrCodeRef, setScanning, setQrMessage, setShowQrMessage, pauseScanner) => {

    const qrCodeSuccess = () => {
        return (decodedText) => {
            setQrMessage(decodedText);
            setShowQrMessage(true);
            pauseScanner();
        }
    }

    console.log(html5QrCodeRef.current && html5QrCodeRef.current.getState());

    if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 2) {
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

const stopScanner = (html5QrCodeRef, setEnabled, setScanning) => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.getState() !== 1) {
        html5QrCodeRef.current
            .stop()
            .then((ignore) => console.log("Scanner stop"))
            .catch((err) => console.log("Scanner error"));
        setEnabled(false);
        setScanning(false);
    }
}

const pauseScanner = (html5QrCodeRef, setScanning) => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 2) {
        html5QrCodeRef.current.pause();
        setScanning(false);
    }
}

const resumeScanner = (html5QrCodeRef, setScanning, setShowQrMessage) => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.getState() === 3) {
        html5QrCodeRef.current.resume();
        setScanning(true);
        setShowQrMessage(false)
    }
}

export {startScanner, stopScanner, pauseScanner, resumeScanner}


