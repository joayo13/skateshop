import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../SideNav'
import SideNavMobile from '../SideNavMobile'
import '../styles/apparel.css'
function Apparel(props) {


    return (
        <div className ='page-background'>
        <div>
        <div className='apparel-background'>
        <SideNav/>
        <div className ='most-popular'>
        <SideNavMobile/> 
        <div className ="background-apparel">
            <ul className='ul1'>
                <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/apparel/tees'>SHOP TEES</Link></button>
                    <img className="image" src={'https://cdn.shopify.com/s/files/1/1005/6270/articles/t-shirt-to-work_1200x.jpg?v=1507763016'} />
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/apparel/hoodies'>SHOP HOODIES</Link></button>
                    <img className="image" src={'https://assets.teenvogue.com/photos/5fda092a0128002c07f6f21a/16:9/w_2560%2Cc_limit/Style_Hoodies_Dec14_HEADER.jpg'}/>
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/apparel/jeans'>SHOP JEANS</Link></button>
                    <img className="image" src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F606220240b2453fe70cafcb2%2FA-rack-of-second-hand-jeans%2F960x0.jpg%3Ffit%3Dscale'}/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}>SHOP SHOES</button>
                    <img className="image" src={'https://media.walkjogrun.net/wp-content/uploads/2015/07/Best-Skate-Shoes.jpg'}/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}>SHOP ACCESSORIES</button>
                    <img className="image" src={'http://www.vuskateboardshop.com/vu/wp-content/uploads/2018/09/IMG_4910-e1538087729893.jpg'}/>
                    </li>
            </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Apparel
