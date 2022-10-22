import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://wallpaper.dog/large/20414995.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            {/* this section allows for the file to be selected from your folders. Pretty nifty. Looks good too. */}
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            {/* autoFocus ensures that upon page load that the cursor is already active within the input field. */}
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Share what you've learned..." type="text" className="writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
