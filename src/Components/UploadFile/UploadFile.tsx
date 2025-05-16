
interface UploadFileProps{
    handleFileChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export function UploadFile({handleFileChange}:UploadFileProps){
  return (
    <>
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
    </>
  );
}