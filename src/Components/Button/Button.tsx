import './Button.scss';
interface ButtonProps{
    text:string
    handleQrGenerate:()=>void;
}
export function Button({text , handleQrGenerate}:ButtonProps){
    return(
        <button className="btn" onClick={handleQrGenerate}>{text}</button>
    )
}