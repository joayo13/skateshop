import {React, useState} from 'react'
import './styles/hamburgerNav.css'
import { Link } from 'react-router-dom'


function HamburgerNavbar(props) {
    
    return (
        <div className = 'mobile-nav-container' style={ props.visible === true ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'}}>
        <img className = 'exit-icon' src ='https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close' onClick={() => props.setVisible(false)}></img>
        <a className = 'mobile-link' href="/">HOME</a>
        <a className = 'mobile-link' href="/apparel">APPAREL</a> 
        <a className = 'mobile-link' href="/boards">BOARDS</a>
        <a className = 'mobile-link' href="/accessories">ACCESSORIES</a>
        <a className = 'mobile-link' href="/sales">SALES</a>
        </div>
    )
}

export default HamburgerNavbar
