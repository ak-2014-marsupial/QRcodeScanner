import {createContext} from "react";

const QrCodeContext = createContext({
    mess:"",
    resumeScanner:()=>{},
    showQrMessage:false,
    setShowQrMessage:()=>{},
    value:0,
    setValue:()=>{}
})

export  {QrCodeContext};