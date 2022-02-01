import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styles/sidenav.css'
function SideNav(props) {
    let [topsAccordionAnimation, setTopsAccordionAnimation] = useState(false)
    let [bottomsAccordionAnimation, setBottomsAccordionAnimation] = useState(false)
    let [shoesAccordionAnimation, setShoesAccordionAnimation] = useState(false)
    let [accessoriesAccordionAnimation, setAccessoriesAccordionAnimation] = useState(false)
    let [topsArrow, setTopsArrow] = useState('rotate(0deg)')
    let [bottomsArrow, setBottomsArrow] = useState('rotate(0deg)')
    let [shoesArrow, setShoesArrow] = useState('rotate(0deg)')
    let [accessoriesArrow, setAccessoriesArrow] = useState('rotate(0deg)')

    const toggleAccordionTops = () => {
        if(topsAccordionAnimation === false || topsAccordionAnimation === 'ease-in 0.2s slideup') {
            setTopsAccordionAnimation('ease-in 0.2s slidedown')
            setTopsArrow('rotate(180deg)')
        } else {
            setTopsAccordionAnimation('ease-in 0.2s slideup')
            setTopsArrow('rotate(0)')
        }
    }
    const toggleAccordionBottoms = () => {
        if(bottomsAccordionAnimation === false || bottomsAccordionAnimation === 'ease-in 0.2s slideup') {
            setBottomsArrow('rotate(180deg)')
            setBottomsAccordionAnimation('ease-in 0.2s slidedown')
        }
        else {
            setBottomsAccordionAnimation('ease-in 0.2s slideup')
            setBottomsArrow('rotate(0deg)')
        }
    }
    const toggleAccordionShoes = () => {
        if(shoesAccordionAnimation === false || shoesAccordionAnimation === 'ease-in 0.2s slideup') {
            setShoesArrow('rotate(180deg)')
            setShoesAccordionAnimation('ease-in 0.2s slidedown')
        }
        else {
            setShoesAccordionAnimation('ease-in 0.2s slideup')
            setShoesArrow('rotate(0deg)')
        }
    }
    const toggleAccordionAccessories = () => {
        if(accessoriesAccordionAnimation === false || accessoriesAccordionAnimation === 'ease-in 0.2s slideup') {
            setAccessoriesArrow('rotate(180deg)')
            setAccessoriesAccordionAnimation('ease-in 0.2s slidedown')
        }
        else {
            setAccessoriesAccordionAnimation('ease-in 0.2s slideup')
            setAccessoriesArrow('rotate(0deg)')
        }
    }
    let currentSideNav; 

    let apparelSideNav = [
        <div className='side-nav'>
            <div className='side-nav-categories'><div className='tops' onClick={() =>  toggleAccordionTops() }>TOPS<img className = 'down-arrow' style={{transform: `${topsArrow}`}} onClick={() =>  toggleAccordionTops() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='tops-accordion' style ={{animation: topsAccordionAnimation}}>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/tees'>T-Shirts</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/longsleeves'>Longsleeves</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hoodies'>Hoodies</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='bottoms' onClick={() => toggleAccordionBottoms()}>BOTTOMS<img className = 'down-arrow' style={{transform: `${bottomsArrow}`}} onClick={() =>  toggleAccordionBottoms() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='bottoms-accordion' style={{animation: bottomsAccordionAnimation}}>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/jeans'>Jeans</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/joggers'>Joggers</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/shorts'>Shorts</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='shoes' onClick={() => toggleAccordionShoes()}>SHOES<img className = 'down-arrow' style={{transform: `${shoesArrow}`}} onClick={() =>  toggleAccordionShoes() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='shoes-accordion' style={{animation: shoesAccordionAnimation}}>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/skateshoes'>Skate Shoes</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hightops'>High-tops</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/rollerskates'>Rollerskates</Link></div>
            </div></div>
            <div className='side-nav-categories'><div className='accessories' onClick={() => toggleAccordionAccessories()}>ACCESSORIES<img className = 'down-arrow' style={{transform: `${accessoriesArrow}`}} onClick={() =>  toggleAccordionAccessories() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='accessories-accordion' style={{animation: accessoriesAccordionAnimation}}>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hats'>Hats</Link></div>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/socks'>Socks</Link></div>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/underwear'>Underwear</Link></div>
            </div></div>
            
        </div>
    ]

    const boardsSideNav = [
        <div className='side-nav'>
            <div className='side-nav-categories'><div className='tops' onClick={() =>  toggleAccordionTops() }>BOARDS<img className = 'down-arrow' style={{transform: `${topsArrow}`}} onClick={() =>  toggleAccordionTops() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='tops-accordion' style ={{animation: topsAccordionAnimation}}>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/skateboards'>Skateboards</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/longboards'>Longboards</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/cruisers'>Cruisers</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='bottoms' onClick={() => toggleAccordionBottoms()}>ACCESSORIES<img className = 'down-arrow' style={{transform: `${bottomsArrow}`}} onClick={() =>  toggleAccordionBottoms() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='bottoms-accordion' style={{animation: bottomsAccordionAnimation}}>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/wheels'>Wheels</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/trucks'>Trucks</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/griptape'>Grip-tape</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='shoes' onClick={() => toggleAccordionShoes()}>GEAR<img className = 'down-arrow' style={{transform: `${shoesArrow}`}} onClick={() =>  toggleAccordionShoes() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='shoes-accordion' style={{animation: shoesAccordionAnimation}}>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/helmets'>Helmets</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/kneepads'>Knee-pads</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/boards/elbowpads'>Elbow-pads</Link></div>
            </div></div>
        </div>
    ]
    if(props.type === 'boards') {
        currentSideNav = boardsSideNav
    } else if (props.type === 'apparel') {
        currentSideNav = apparelSideNav
    } else {
        currentSideNav = null
    }
    return (
        <>{currentSideNav}</>
    )
}

export default SideNav
