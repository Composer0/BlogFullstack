import React from 'react';
import '../NavBar/navbar.css';
import {Link} from "react-router-dom"
import {useContext} from "react";
import { Context} from "../../context/Context"
import {
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink, 
    // SlideBtnWrap, 
    } from './slideNavElements';

//  import {Pdf} from "../../../assets/resume/OrionPalmer-CV.docx";

const SlideNav = ({isOpen, toggle}) => {
    const {user, dispatch} = useContext(Context);
    const handleLogout =() => {
        dispatch({type: "LOGOUT"})
    }



    return (
        <>

        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                <SideBarLink onClick={toggle}>
                    <Link className="link" to="/">HOME</Link>
                </SideBarLink>
                <SideBarLink onClick={toggle}>
                    <Link className="link" to="/about">ABOUT</Link>
                </SideBarLink>
                <SideBarLink onClick={toggle}>
                    <Link className="link" to="/contact">CONTACT</Link>
                </SideBarLink>
                <SideBarLink onClick={toggle}>
                    <Link className="link" to="/write">WRITE</Link>
                </SideBarLink>
                <SideBarLink className="navListItem" onClick={(handleLogout)}>
                {user && "LOGOUT"}
                </SideBarLink>
                    <br/>
                    <br/>
                <SideBarLink>
                    <div>
                        <a href="https://www.linkedin.com/in/orion-palmer/" target="_blank" rel="noreferrer">
                            <i className="navIcon slideIconSize fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UC1PLqeZnOUcLVteRSYwk1WQ/featured" target="_blank" rel="noreferrer">
                            <i className="navIcon slideIconSize fa-brands fa-youtube"/>
                        </a>
                        <a href="https://orionpalmer.hashnode.dev/" target="_blank" rel="noreferrer">
                            <i className="navIcon slideIconSize fa-brands fa-hashnode"/>
                        </a>
                        <a href="https://github.com/Composer0" target="_blank" rel="noreferrer">
                            <i className="navIcon slideIconSize fab fa-github"/>
                        </a>
                    </div>
                </SideBarLink>
                </SideBarMenu>
                <SideBarWrapper>
                </SideBarWrapper>
            </SideBarWrapper>
        </SideBarContainer>
        </>
    )
}

export default SlideNav;