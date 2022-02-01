import React from 'react'
import '../styles/home.css'
function Home() {
    return (
        <div>
        <div className ="background">
            <ul className='ul1'>
                <li className = 'list-item'>
                    <a className = 'home-buttons' href='/apparel'>APPAREL</a>
                    <img className="image" src={'https://i0.heartyhosting.com/skateboarding.transworld.net/wp-content/uploads/2017/10/HO17_MAP_Crockett_Collection-3.jpg?w=2000&ssl=1'} alt ='mens shop'/>
                </li>
                <li className = 'list-item'>
                <a className = 'home-buttons' href='/boards/skateboards'>SKATEBOARDS</a>
                    <img className="image" src={'https://img.redbull.com/images/c_crop,x_439,y_0,h_550,w_413/c_fill,w_400,h_540/q_auto,f_auto/redbullcom/2020/3/25/k92hawmu55dpxxma0fl0/skate-skateshop-tradicional'} alt = 'skateboard shop'/>
                    </li>
                    <li className = 'list-item'>
                    <a className = 'home-buttons' href ='/boards/longboards'>LONGBOARDS</a>
                    <img className="image" src={'https://www.toxicworldskatesurf.com/wp-content/uploads/2017/08/longboard-brands.jpg'} alt = 'longboard shop'/>
                    </li>
                    <li className = 'list-item'>
                    <a className = 'home-buttons' href='/accessories'>ACCESSORIES</a>
                    <img className="image" src={'https://i.pinimg.com/originals/d9/78/ac/d978accc219138a7eece38188ce98bd2.jpg'} alt = 'accessories shop'/>
                    </li>
                    <li className = 'list-item'>
                    <a className = 'home-buttons' href='/sales'>SALES</a>
                    <img className="image" src={'https://images.milledcdn.com/2021-06-10/2z2a5_kdaU0xPq6n/dom96Q3MvyyS.gif'} alt = 'sales'/>
                    </li>
            </ul>
        </div>
       
        </div>
    )
}

export default Home
