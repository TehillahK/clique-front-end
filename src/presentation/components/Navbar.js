
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Logo from '../assets/logos/logo-transparent.png'
import {  isMobile,isDesktop } from 'react-device-detect';
function Links(){
    return(
        <ul className={'flex nav-links'}>
            <li>
                <Link className={'nav-link'} to={"/"}>Home</Link>
            </li>
            <li>
                <Link className={'nav-link'} to={"/"}>About Us</Link>
            </li>
            <li>
                <Link className={'nav-link'} to={"/"}>Services</Link>
            </li>
            <li>
                <button>Sign in</button>
            </li>
            <li>
                <button>Contact us</button>
            </li>
        </ul>
    )
}
function Toggle(props){
    const hasPressed=props.hasPressed;
    const pressed=props.pressed;
    return(
        <button className={'toggle'} onClick={
            ()=>{
                pressed(!hasPressed)
                console.log(hasPressed)
            }
        }>
           <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
    )
}

const Navbar = () => {
    const desktop=isDesktop;
    const [showMenu ,setShowMenu]= useState(desktop)

    return ( 
        <header >
            <nav className={'navbar cols-two-md'}>
                <Link to={"/"}>
                  <img className={'logo'} src={Logo} />
                </Link>   
                <div className={''}>
                    <Toggle hasPressed={showMenu} pressed={setShowMenu} />
                    {
                       
                        showMenu &&  <Links />
                      
                    }
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;