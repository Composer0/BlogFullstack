import {Link} from "react-router-dom";
import "./navbar.css"
import {useContext} from "react";
import { Context} from "../../context/Context"
import {FaBars} from "react-icons/fa"

export default function NavBar({toggle}) {
    const {user, dispatch} = useContext(Context);
    const pictureFolder = "https://orionblogserver.up.railway.app/images/"

    const handleLogout =() => {
        dispatch({type: "LOGOUT"})
    }



  return (
    <div className="nav">
        {
                user ? (

                    <Link to="/settings">
                    <img 
                        className="navImgMobile" src={pictureFolder+user.profilePicture} alt="profilePicture">
                    </img>
                    </Link>
                ) : (
                    <ul className="navSigninMobile">
                        <Link className="navListItemMobile link" to="/login">LOGIN</Link>
                        <Link className="navListItemMobile link" to="/register">REGISTER</Link>
                    </ul>
                )

            }
            
           <FaBars className="fabars" onClick={toggle}></FaBars>
            
        <div className="navLeft">
            <a href="https://www.linkedin.com/in/orion-palmer/" target="_blank" rel="noreferrer">
                <i className="navIcon navIconMobile fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ/featured" target="_blank" rel="noreferrer">
                <i className="navIcon navIconMobile fa-brands fa-youtube"/>
            </a>
            <a href="https://orionpalmer.hashnode.dev/" target="_blank" rel="noreferrer">
                <i className="navIcon navIconMobile fa-brands fa-hashnode"/>
            </a>
            <a href="https://github.com/Composer0" target="_blank" rel="noreferrer">
                <i className="navIcon navIconMobile fab fa-github"/>
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
                <li className="navListItem" onClick={(handleLogout)}>
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="navRight">
            {
                user ? (

                    <Link to="/settings">
                    <img 
                        className="navImg" src={pictureFolder+user.profilePicture} alt="profilePicture">
                    </img>
                    </Link>
                ) : (
                    <ul>

                        <Link className="navListItem link" to="/login">LOGIN</Link>
                        <Link className="navListItem link" to="/register">REGISTER</Link>
                    </ul>
                )

            }

            {/* <i className="navSearchIcon fas fa-search"></i> */}
        </div>
    </div>
  )
}