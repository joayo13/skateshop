import {React, useState} from 'react'
import reactDom from 'react-dom'
import './styles/navbar.css'
import {BrowserRouter, Link} from "react-router-dom"
import HamburgerNavbar from './HamburgerNavbar'
function Navbar(props) {
    let [visible, setVisible] = useState(false)
    return (
        <div className = 'nav-container'>
            <div className='header-container'>
            <img className = 'hamburger' src='https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-3.jpg' onClick={() => setVisible(true)}></img>
            <div className ='joayo-text'>The Skate Shop</div>
            <div className='cart-container'>
            <img className ='cart' src='https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-11.jpg' onClick={() => props.setCartVisible(true)}></img>
            <div className='cart-count'>{props.cartCount}</div>
            </div>
            </div>
            <nav className="navbar"> 
                <li ><Link to="/" className = "nav-button">HOME</Link></li>
                <li ><Link to="/apparel" className = "nav-button">APPAREL</Link></li>
                <li ><Link to="/boards" className = "nav-button">BOARDS</Link></li>
                <li ><Link to="/accessories" className = "nav-button">ACCESSORIES</Link></li>
                <li ><Link to="/sales" className = "nav-button">SALES</Link></li>
            </nav>
            <div className = 'header-sale'>SUMMER SALE!! | GET UP TO 75% OFF </div>
            <HamburgerNavbar visible={visible} setVisible ={setVisible}/>
        </div>
    )
}

export default Navbar

