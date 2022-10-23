import './sidebar.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    const getCategories = async () => {
      const res = await axios.get("/categories")
      setCategories(res.data)
    }
    getCategories();
  })
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://www.orionpalmer.com/static/media/orionpalmer.ba51d754.webp" alt=""></img>
        <p>
          HI! I'm Orion Palmer, a Fullstack Developer, Music Educator, Husband, Cook, and an all round chill guy. Feel free to email or message me if you have questions or just want to chat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {categories.map((categories)=>(
          <Link to={`/?categories=${categories.name}`}>
            <li className="sidebarListItem">{categories.name}</li>
          </Link>
        ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
          <a href="https://www.linkedin.com/in/orion-palmer/" target="_blank" rel="noreferrer">
                <i className="sidebarIcon fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ/featured" target="_blank" rel="noreferrer">
                <i className="sidebarIcon fa-brands fa-youtube"/>
            </a>
            <a href="https://orionpalmer.hashnode.dev/" target="_blank" rel="noreferrer">
                <i className="sidebarIcon fa-brands fa-hashnode"/>
            </a>
            <a href="https://github.com/Composer0" target="_blank" rel="noreferrer">
                <i className="sidebarIcon fab fa-github"/>
            </a>
          </div>
      </div>
    </div>
  )
}
