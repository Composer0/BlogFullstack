import {Link} from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
    const user = false;
  return (
    <div className="nav">
        <div className="navLeft">
            <a href="https://www.linkedin.com/in/orion-palmer/" target="_blank" rel="noreferrer">
                <i className="navIcon fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ/featured" target="_blank" rel="noreferrer">
                <i className="navIcon fa-brands fa-youtube"/>
            </a>
            <a href="https://orionpalmer.hashnode.dev/" target="_blank" rel="noreferrer">
                <i className="navIcon fa-brands fa-hashnode"/>
            </a>
            <a href="https://github.com/Composer0" target="_blank" rel="noreferrer">
                <i className="navIcon fab fa-github"/>
            </a>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/contact">CONTACT</Link>
                </li>
                <li className="navListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="navListItem">
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navRight">
            {
                user ? (

                    <Link to="/settings">
                    <img 
                        className="navImg" src="https://www.orionpalmer.com/static/media/orionpalmer.ba51d754.webp" alt="user">
                    </img>
                    </Link>
                ) : (
                    <ul>

                        <Link className="navListItem link" to="/login">LOGIN</Link>
                        <Link className="navListItem link" to="/register">REGISTER</Link>
                    </ul>
                )

            }

            <i className="navSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
