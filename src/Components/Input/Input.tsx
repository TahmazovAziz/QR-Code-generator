import './Input.scss'
interface inputProps{
    value:string;
    InputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

export function Input({value, InputChange}:inputProps){
    return(
        <div className="input-container">
            <input type="text" value={value} onChange={InputChange} placeholder="Enter url site"/>
        </div>
    )
}