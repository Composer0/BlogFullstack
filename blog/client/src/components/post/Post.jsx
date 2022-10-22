import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  return (
    <div className="post">
    <Link className="post" to={`/post/${post._id}`}>
    {post.photo || (
      <img 
      className="postImg"
      src="https://wallpapercave.com/wp/wp3720374.jpg"
      // src={post.photo}
      alt="post img"
      />
    )}
    </Link>
      <div className="postInfo">
        <div className="postCategories">{

          post.categories.map(c=>(
            <span className="postCategory">{[post.categories]}</span>
          ))
        }
        </div>
        <Link className="postTitle" to={`/post/${post._id}`}>
            <span className="postTitle" >{post.title}
            </span>
        </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <Link className="postDescription" to={`/post/${post._id}`}>
        <p className="postDescription">
            {post.description}
        </p>
      </Link>
    </div>
  )
}
