import React from 'react'
import "./sidebar.css"
import Pic1 from "./pic1.jpg"
export default function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <div className='sidebar-title'>ABOUT ME</div>
                <img className='sidePics' src={Pic1} alt='' />
                <p>sukacbvbacc ksuvwdb dsgia bvae kjbiusbuvgb khdsbkvnw bkdbv kviugqwj cbuvwsdcyiv cbuiwcvcyw;ocdn xhdvuysv cywfbwcs shigaucxnash wsbugsdhc sgswvhcvwslnsakvycvwegdiccw cwewyvcd cvywvc ydwcwsns jvwdcvcy.</p>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-title'>CATEGORIES</div>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>Life</li>
                    <li className='sidebar-list-item'>Music</li>
                    <li className='sidebar-list-item'>Style</li>
                    <li className='sidebar-list-item'>Tech</li>
                    <li className='sidebar-list-item'>Sport</li>
                    <li className='sidebar-list-item'>Cinema</li>
                </ul>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-title'>FOLLOW US</div>
                <div className='sidebar-social'>
                    <i className="sidebar-icon fa-brands fa-facebook-f"></i>
                    <i className="sidebar-icon fa-brands fa-square-instagram"></i>
                    <i className="sidebar-icon fa-brands fa-pinterest"></i>
                    <i className="sidebar-icon fa-brands fa-twitter"></i>
                </div>
            </div>

        </div>
    )
}
