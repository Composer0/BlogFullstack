import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import './singlePost.css'
import axios from "axios"
import {Link} from "react-router-dom"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
      console.log(res)
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && 
        <img 
        src={post.photo}
        alt=""
        className="singlePostImg"
        />
        }
        <h1 className="singlePostTitle">{
          post.title}
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span>
            Author:
            <Link to={`/?username=${post.username}`} className="singlePostAuthor" >
                <b>{post.username}</b>
            </Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDescription">
        {post.description}
        </p>
      </div>
    </div>
  )
}
