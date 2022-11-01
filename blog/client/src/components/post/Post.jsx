import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  const publicFolder = "http://localhost:4274/images/"
  return (
    <div className="post">
    <Link className="post" to={`/post/${post._id}`}>
    {post.photo && <img 
      className="postImg"
      // src="https://wallpapercave.com/wp/wp3720374.jpg"
      src={publicFolder + post.photo}
      alt="post img"
      />
    }
    </Link>
      <div className="postInfo">
        <div className="postCategories">{

          post.categories.map((c)=>(
            <Link className="postCategory" to={`/?categories=${post.categories}`}>
              <span className="postCategory">{[post.categories]}</span>
            </Link>
          ))
        }
        </div>
        <Link className="postTitle" to={`/post/${post._id}`}>
            <span className="postTitle" >{post.title}
            </span>
        </Link>
            <hr/>
            <div className="createdByWhen">
            <Link className="createdBy" to={`/?username=${post.username}`}>
              <span>{post.username}</span>
            </Link>
              <span className="createdWhen">{new Date(post.createdAt).toDateString()}</span>
            </div>
      </div>
      <Link className="postDescription" to={`/post/${post._id}`}>
        <p className="postDescription">
            {post.description}
        </p>
      </Link>
    </div>
  )
}
