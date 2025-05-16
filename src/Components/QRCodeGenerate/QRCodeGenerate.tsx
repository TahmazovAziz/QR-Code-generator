import { useState, useRef } from "react";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import * as htmlToImage from "html-to-image";
import { QRCode } from "react-qrcode-logo";
import { UploadFile } from "../UploadFile/UploadFile";
export function QRCodeGenerate(){
  const [url, setUrl] = useState('')
  const [qrvisible, setqrVisible] = useState(false)
  const qrRef = useRef<HTMLDivElement | null>(null)
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
  const [file, setFile] = useState<String | null>(null);
     const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files){
            const url =  URL.createObjectURL(e.target.files[0])
            setFile(url)
        }
    }
  
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
            <div className="qrcode__image" ref={qrRef}>
              <QRCode  value={url} size={300} level="H" icon="./vite.svg" logoImage={file} ecLevel={'H'} logoWidth={90}/>
            </div>
              <UploadFile handleFileChange={handleFileChange}/>
              <Button text='Download' handleQrGenerate={downloadQRCode}/>
          </div>
        )}
        </div>
    </>
  )
}