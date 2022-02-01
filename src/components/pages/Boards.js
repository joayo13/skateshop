import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../SideNav'
import SideNavMobile from '../SideNavMobile'

function Boards() {
    return (
        <div className ='page-background'>
        <div>
        <div className='apparel-background'>
        <SideNav type='boards'/>
        <div className ='most-popular'>
        <SideNavMobile type ='boards'/> 
        <div className ="background-apparel">
            <ul className='ul1'>
                <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/boards/skateboards'>SKATEBOARDS</Link></button>
                    <img className="image" src={'https://www.havocskateboards.com/uploads/1/3/2/0/132023423/s500745904395577779_p312_i8_w3024.jpeg?width=2560'} />
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/boards/longboards'>LONGBOARDS</Link></button>
                    <img className="image" src={'https://www.cnet.com/a/img/4OWbT2e1H0fncTaE1HjQAJZDyyo=/940x0/2021/01/29/4b1e44d1-46aa-4b41-8f31-046b68f1d285/longboard-my-rides.jpg'}/>
                </li>
                <li className = 'list-item'>
                <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}><Link to ='/boards/helmets'>HELMETS</Link></button>
                    <img className="image" src={'https://pyxis.nymag.com/v1/imgs/08b/32a/fae4bb0a7593b580cba11acf1331bbdab1-skating-helmets.2x.rsocial.w600.jpg'}/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}>TRUCKS</button>
                    <img className="image" src={'https://www.skatedeluxe.com/blog/wp-content/uploads/2017/01/trucks-skateboard-wiki-600x400.jpg'}/>
                    </li>
                    <li className = 'list-item'>
                    <button className = 'home-buttons' style ={{backgroundColor: 'rgb(0, 0, 0, 0.50)'}}>WHEELS</button>
                    <img className="image" src={'https://www.skateboardershq.com/wp-content/uploads/2020/12/skateboard-wheels-for-beginners.jpg'}/>
                    </li>
            </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Boards
