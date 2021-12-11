import React from 'react'
import reactDom from 'react-dom'
import './styles/navbar.css'
import {BrowserRouter, Link} from "react-router-dom"
import logo from '../Screenshot_2021-10-10_15-33-14.png';
function Navbar(props) {
    return (
        <div className = 'nav-container'>
            <div className='cart-container'><img className ='cart' src='https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-11.jpg' onClick={() => props.setCartVisible(true)}></img>
            <div className='cart-count'>{props.cartCount}</div>
            </div>
            <div className = 'header'>
            <img src = {logo} className ={'joayo-logo'} alt={'joayo logo'}/>
            </div>
            <nav className="navbar">
                
                <li ><Link to="/" className = "nav-button">HOME</Link></li>
                <li ><Link to="/apparel" className = "nav-button">APPAREL</Link></li>
                <li ><Link to="/boards" className = "nav-button">BOARDS</Link></li>
                <li ><Link to="/accessories" className = "nav-button">ACCESSORIES</Link></li>
                <li ><Link to="/sales" className = "nav-button">SALES</Link></li>
            </nav>
            <div className = 'header-sale'> FLASH SALE!!! | BUY ONE ITEM UNDER $20 GET ONE FREE</div>
        </div>
    )
}

export default Navbar

