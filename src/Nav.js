import "./Nav.css";
import logo from "./images/netflixlogo.png";
import avatar from "./images/netflix-avatar.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
function Nav() {

    const history= useHistory();
    const [show,handleShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }


    useEffect(() => {
         window.addEventListener("scroll",transitionNavBar)
        return()=> window.removeEventListener('scroll',transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img onClick={()=>history.push("/")} className="nav__logo" src={logo} alt="no" />
        <img onClick={()=>history.push('/profile')} className="nav__avatar" src={avatar} alt="no" />
      </div>
    </div>
  );
}

export default Nav;
