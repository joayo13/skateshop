import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styles/sidenav.css'
function SideNav(props) {

    let [topsDisplay, setTopsDisplay] = useState('none')
    let [bottomsDisplay, setBottomsDisplay] = useState('none')
    let [shoesDisplay, setShoesDisplay] = useState('none')
    let [accessoriesDisplay, setAccessoriesDisplay] = useState('none')
    let [topsArrow, setTopsArrow] = useState('rotate(0deg)')
    let [bottomsArrow, setBottomsArrow] = useState('rotate(0deg)')
    let [shoesArrow, setShoesArrow] = useState('rotate(0deg)')
    let [accessoriesArrow, setAccessoriesArrow] = useState('rotate(0deg)')

    const toggleAccordionTops = () => {
        if(topsDisplay === 'none') {
            setTopsArrow('rotate(180deg)')
            setTopsDisplay('block')
        }
        else {
            setTopsDisplay('none')
            setTopsArrow('rotate(0deg)')
        }
    }
    const toggleAccordionBottoms = () => {
        if(bottomsDisplay === 'none') {
            setBottomsArrow('rotate(180deg)')
            setBottomsDisplay('block')
        }
        else {
            setBottomsDisplay('none')
            setBottomsArrow('rotate(0deg)')
        }
    }
    const toggleAccordionShoes = () => {
        if(shoesDisplay === 'none') {
            setShoesArrow('rotate(180deg)')
            setShoesDisplay('block')
        }
        else {
            setShoesDisplay('none')
            setShoesArrow('rotate(0deg)')
        }
    }
    const toggleAccordionAccessories = () => {
        if(accessoriesDisplay === 'none') {
            setAccessoriesArrow('rotate(180deg)')
            setAccessoriesDisplay('block')
        }
        else {
            setAccessoriesDisplay('none')
            setAccessoriesArrow('rotate(0deg)')
        }
    }
    return (
        <div className='side-nav'>
            <div className='side-nav-categories'><div className='tops'>TOPS<img className = 'down-arrow' style={{transform: `${topsArrow}`}} onClick={() =>  toggleAccordionTops() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='tops-accordion' style={{display: `${topsDisplay}`}}>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/tees'>T-Shirts</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/longsleeves'>Longsleeves</Link></div>
            <div className='tops-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hoodies'>Hoodies</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='bottoms'>BOTTOMS<img className = 'down-arrow' style={{transform: `${bottomsArrow}`}} onClick={() =>  toggleAccordionBottoms() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='bottoms-accordion' style={{display: `${bottomsDisplay}`}}>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/jeans'>Jeans</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/joggers'>Joggers</Link></div>
            <div className='bottoms-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/shorts'>Shorts</Link></div>
            </div>
            </div>
            <div className='side-nav-categories'><div className='shoes'>SHOES<img className = 'down-arrow' style={{transform: `${shoesArrow}`}} onClick={() =>  toggleAccordionShoes() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='shoes-accordion' style={{display: `${shoesDisplay}`}}>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/skateshoes'>Skate Shoes</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hightops'>High-tops</Link></div>
            <div className='shoes-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/crocs'>Crocs</Link></div>
            </div></div>
            <div className='side-nav-categories'><div className='accessories'>ACCESSORIES<img className = 'down-arrow' style={{transform: `${accessoriesArrow}`}} onClick={() =>  toggleAccordionAccessories() } src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'/></div>
            <div className='accessories-accordion' style={{display: `${accessoriesDisplay}`}}>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/hats'>Hats</Link></div>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/socks'>Socks</Link></div>
            <div className='accessories-accordion-categories'><Link style={{textDecoration: 'none', color:'black'}} to='/apparel/underwear'>Underwear</Link></div>
            </div></div>
            <div className='side-nav-categories'>SHOP ALL<img className = 'down-arrow' src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'  style={{transform: 'rotate(-90deg)'}}/></div>
        </div>
    )
}

export default SideNav
