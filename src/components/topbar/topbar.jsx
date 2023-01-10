import React from 'react'
import Topimg from "./my-photo.jpg";
import { Link } from "react-router-dom";
import "./topbar.css"
export default function topbar() {
  const user = false;
  return (
    <div className='tb-cont'>
      <div className='tb-lf'>
        <i className="top-icon fa-brands fa-facebook-f"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
        <i className="top-icon fa-brands fa-pinterest"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
      </div>

      <div className='tb-mid'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className="link" to="/">HOME</Link></li>
          <li className='topListItem'> <Link to="/">ABOUT</Link></li>
          <li className='topListItem' ><Link to="/contact">CONTACT</Link></li>
          <li className='topListItem'><Link className="link" to="/write">WRITE</Link></li>
          <li className='topListItem'>{user ? "LOGOUT" : " "}</li>
        </ul>
      </div>
      <div className='tb-rg' style={user?{'justifyContent':'center','gap':'20px'}:{}}>
        {user ?
            <img className='top-img' src={Topimg} alt="top img"></img>
             :
         <>
          <li className='topListItem'><Link className="link" to="/login">LOGIN</Link></li>
          <li className='topListItem'><Link className="link" to="/register">REGISTER</Link></li>
         </>
      }
      <i className="fa-solid fa-magnifying-glass top-search"></i>

      </div>
    </div>
  )
}
