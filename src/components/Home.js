import React from 'react'
import './styles/home.css'
function Home() {
    return (
        <div>
        <div className ="background">
            <ul className='ul1'>
                <li className = 'list-item'>
                    <button className = 'home-buttons'>SHOP MEN'S</button>
                    <img className="image" src={'https://www.toptrendsguide.com/wp-content/uploads/2020/09/Skater-Style-Shirts.jpg'} alt ='mens shop'/>
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons'>SHOP WOMEN'S</button>
                    <img className="image" src={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2019%2F03%2F04%2Fpro-women-skaters3-2000.jpg'} alt ='womens shop'/>
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons'>SKATEBOARDS</button>
                    <img className="image" src={'https://img.redbull.com/images/c_crop,x_439,y_0,h_550,w_413/c_fill,w_400,h_540/q_auto,f_auto/redbullcom/2020/3/25/k92hawmu55dpxxma0fl0/skate-skateshop-tradicional'} alt = 'skateboard shop'/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons'>LONGBOARDS</button>
                    <img className="image" src={'https://www.toxicworldskatesurf.com/wp-content/uploads/2017/08/longboard-brands.jpg'} alt = 'longboard shop'/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons'>ACCESSORIES</button>
                    <img className="image" src={'https://i.pinimg.com/originals/d9/78/ac/d978accc219138a7eece38188ce98bd2.jpg'} alt = 'accessories shop'/>
                    </li>
            </ul>
        </div>
       
        </div>
    )
}

export default Home
