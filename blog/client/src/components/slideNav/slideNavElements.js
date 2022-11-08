import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'
// import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa';

export const SideBarContainer = styled.aside`
    position: fixed;
    margin: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #061c29;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    transition: 0.2s;

    &:hover {
    color: #b5c99a;
    }
;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    z-index: 2;
`

export const SideBarWrapper = styled.div`
    color:#fff;
    margin: 0;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    transform: translateX(-1.25rem);

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
        margin: 0 2rem;
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    ${'' /* text-align: center; */}
    margin: 2rem 1rem;
    ${'' /* padding-inline-start: 0; */}
    

    &:hover {
        color: #b5c99a;
        transition: 0.2s ease-in-out;
    }
`

export const NavIcon = styled.li`
    display: flex;
    flex-direction: rox;
    z-index: 3;
`


export const SideBarLinkResume = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    background: #11cdd4;
    background-image: -webkit-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -moz-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -ms-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -o-linear-gradient(top, #7d90ae, #807cb5);
    background-image: linear-gradient(to bottom, #7d90ae, #807cb5);
    -webkit-border-radius: 8;
    -moz-border-radius: 8;
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
    border-radius: 1rem;
    margin: 0 15rem;
    padding: 0 1rem;
    text-decoration: none;

    &:hover {
        transition: all 0.4s ease-in-out;
        background-image: -webkit-linear-gradient(top, #807cb5, #884676);
        background-image: -moz-linear-gradient(top, #807cb5, #884676);
        background-image: -ms-linear-gradient(top, #807cb5, #884676);
        background-image: -o-linear-gradient(top, #807cb5, #884676);
        background-image: linear-gradient(to bottom, #807cb5, #884676);
        color: #fff;
    }

    &:active {
        padding: 0;
        font-size: 1.2rem;
    }
    &, a {
        color: #fff;
        text-decoration: none;
    }
`

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`