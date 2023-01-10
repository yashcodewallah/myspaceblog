import "./write.css"
import WriteImg from "./write-img.jpg"

export default function write() {
  return (
    <div className='write'>
    <img className="write-img" src={WriteImg} alt="" />
<form className="writeform">
    <div className="write-form-group">
    <label htmlFor="fileInput">
        <i className="write-icon fas fa-plus"></i>
    </label>
        <input type="file" id="fileInput" style={{'display':'none'}} />
        <input type="text" placeholder="Title" className="write-input" autoFocus={true}/>
    </div>
    <div className="write-form-group">
       <textarea placeholder="Tell your story..." type="text" className="write-text write-input"></textarea>
    </div>
  
</form>
  <button className="write-submit">Publish</button> 
    </div>
  )
}
