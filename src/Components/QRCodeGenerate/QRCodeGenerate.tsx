import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import * as htmlToImage from "html-to-image";
export function QRCodeGenerate(){
  const [url, setUrl] = useState('')
  const [qrvisible, setqrVisible] = useState(false)
  const qrRef = useRef<HTMLElement | null>(null)
  const handleQrGenerate = () =>{
    if(!url){
      return;
    }
    setqrVisible(true)
    
  };


  const downloadQRCode = () => {
    if(qrRef.current){
      htmlToImage
      .toPng(qrRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
      
    }
  };
  
  return (
    <>
        <div className="wrapper">
          <Header/>
          <div className="generate__wrapper">
            <Input value={url} InputChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setUrl(e.target.value);setqrVisible(false)}} />
            <Button text='generate' handleQrGenerate={handleQrGenerate}/>
          </div>
      {qrvisible && (
          <div  className="qrcode__download">
            <div className="qrcode__image">
              <QRCode ref={qrRef} value={url} size={300} />
              <Button text='Download' handleQrGenerate={downloadQRCode}/>
            </div>
          </div>
        )}
        </div>
    </>
  )
}