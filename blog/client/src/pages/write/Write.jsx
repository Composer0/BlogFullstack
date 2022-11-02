import "./write.css"
import {useState, useContext} from 'react'
import axios from 'axios'
import {Context} from "../../context/Context" 


export default function Write() {
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [categories, setCategories] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      categories,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name; //Date was chosen to help make each image unique upon submitting.
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try{
        await axios.post("/upload", data);
      }catch(err){

      }
    }
    try {
  
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (err) {
  
    }
  }
  
  return (
    <div className="write">
    {file && 
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
    }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            {/* this section allows for the file to be selected from your folders. Pretty nifty. Looks good too. */}
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            {/* autoFocus ensures that upon page load that the cursor is already active within the input field. */}
        </div>
        <div className="writeFormGroup2">
        <div className="writeCategories">
        <label className="categoryLabel">Category</label>
        <select class="categoriesSelector" type="text" onChange={e=>setCategories(e.target.value)}>
          <option value="blank"></option>
          <option value="Life">Life</option>
          <option value="Code">Code</option>
          <option value="Music">Music</option>
          <option value="Food">Food</option>
        </select>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Share what you've learned..." type="text" className="writeText" onChange={e=>setDescription(e.target.value)}></textarea>
        </div>
      </form>
    </div>
  )
}
