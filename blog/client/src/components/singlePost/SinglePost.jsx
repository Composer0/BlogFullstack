import { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router"
import './singlePost.css'
import axios from "axios"
import {Link} from "react-router-dom"
import { Context} from "../../context/Context"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const publicFolder = "https://orionblogserver.up.railway.app/images/"
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [updateMode, setUpdateMode] = useState(false)

  
  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get("https://orionblogserver.up.railway.app/api/posts/" + path);
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
      console.log(res)
    };
    getPost();
  }, [path]);


  const handleDelete = async() => {
    try {

      await axios.delete(`https://orionblogserver.up.railway.app/api/posts/${post._id}`, {data: {username:user.username}})
      window.location.replace("/")
    } catch(err) {

    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`https://orionblogserver.up.railway.app/api/posts/${post._id}`, {
        username:user.username,
        title,
        description
      })
      window.location.reload()
      setUpdateMode(false)
    } catch (err) {}
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && 
        <img 
        src={publicFolder + post.photo}
        alt=""
        className="singlePostImg"
        />
        }{
          updateMode ? (
            
            <input 
              type="text" 
              value={title} 
              className="singlePostTitleInput" 
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            ) : (

          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square" onClick = {() => setUpdateMode(true)}></i>
              <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
              </div>
          )} 
        </h1>
          )} 
          {/* // end of updateMode */}
        <div className="singlePostInfo">
            <span>
            Author:
            <Link to={`/?username=${post.username}`} className="singlePostAuthor" >
                <b className="singlePostAuthor">{post.username}</b>
            </Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (

          <textarea 
            type="text" 
            className="singlePostDescriptionInput" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />) : (
          
          <p className="singlePostDescription">
          {post.description}
          {/* {post.sanitizedHtml} */}
          </p>
        )}
        {updateMode && (
        <button className="singleUpdateButton" onClick={handleUpdate}>Update</button>
        )}
        <div className="singlePostEditMobile">
              <i className="singlePostIcon fa-regular fa-pen-to-square" onClick = {() => setUpdateMode(true)}></i>
              <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
              </div>
      </div>
    </div>
  )
}