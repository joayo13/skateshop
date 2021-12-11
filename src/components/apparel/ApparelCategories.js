import React, { useState, useEffect} from 'react'
import ApparelSort from './ApparelSort'
import Item from '../Item'
import SideNav from '../SideNav'
import SideNavMobile from '../SideNavMobile'
import '../styles/apparel.css'
import uniqid from 'uniqid'
import {apparel} from './productsArrays/tshirts'
import { Link } from 'react-router-dom'

const apparelFactory = apparel()


function ApparelCategories(props) {

    let [currentContent, setCurrentContent] = useState([])
    let [popup, setpopup] = useState(false)
    let [selectedImage, setSelectedImage] = useState('')
    let [selectedTitle, setSelectedTitle] = useState('')
    let [selectedPrice, setSelectedPrice] = useState('')
    let [selectedSize, setSelectedSize] = useState('')

    const href = window.location.href
    let split = href.split('')
    if(split.includes('?')) {
        let querySplit = split.join('').split('?')[0]
        split = querySplit.split('')
    }
    const currentPage = split.splice(30, (split.length - 30)).join('')


    let thisPage = apparelFactory?.[currentPage]()
    const priceRef = React.createRef()
    const colorRef = React.createRef()
    const genderRef = React.createRef()

    const queryString = '?p=1&sort=&color='
    const sp = new URLSearchParams(queryString)
    
    useEffect(() => {

        setCurrentContent(thisPage.map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        })
        )
    }, [])

    const popUp = [
    <div className = 'wrapper'>
        <div className ='modal'>
            <div className ='exit-modal-wrapper'>
                <img className ='exit-modal' src ='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/cancel.png' alt ='exit-icon' onClick={() => { setpopup(false); setSelectedSize('none')}}></img>
            </div>
            <img className ='selected-image' src={selectedImage} alt='product'></img>
            <div className ='selected-title'>{selectedTitle}</div>
            <div className ='selected-price'>{selectedPrice}</div>
            <div className ='sizes-container'>
                <div className='sizes' style ={{backgroundColor: selectedSize === 'small' ? 'black' : 'rgb(70, 70, 70)'}} onClick={() => {setSelectedSize('small')}}>S</div>
                <div className='sizes' style ={{backgroundColor: selectedSize === 'medium' ? 'black' : 'rgb(70, 70, 70)'}} onClick={() => {setSelectedSize('medium')}}>M</div>
                <div className='sizes' style ={{backgroundColor: selectedSize === 'large' ? 'black' : 'rgb(70, 70, 70)'}} onClick={() => {setSelectedSize('large')}}>L</div>
                <div className='sizes' style ={{backgroundColor: selectedSize === 'x-large' ? 'black' : 'rgb(70, 70, 70)'}} onClick={() => {setSelectedSize('x-large')}}>XL</div>
            </div>
            <button className ='add-to-cart' onClick={() => {
                props.setCartItems(props.cartItems.concat({image: selectedImage, title: selectedTitle, price: selectedPrice, size: selectedSize, id: uniqid()}));
                props.setCartCount(props.cartItems.length + 1);}}>ADD TO CART</button>
        </div>
    </div>
    ]

    const sortPrice = (event) => {
        if(event.target.value === 'high-to-low') {
            if(colorRef.current.value === 'Select' && genderRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(colorRef.current.value !== 'Select' && genderRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === colorRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(genderRef.current.value !== 'Select' && colorRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.gender === genderRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(genderRef.current.value !== 'Select' && colorRef.current.value !== 'Select') {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.gender === genderRef.current.value).filter((x) => x.color === colorRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))    
            }
        
        } else if (event.target.value === 'low-to-high') {
            if(colorRef.current.value === 'Select' && genderRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            if(colorRef.current.value !== 'Select' && genderRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === colorRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(genderRef.current.value !== 'Select' && colorRef.current.value === 'Select') {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.gender === genderRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(genderRef.current.value !== 'Select' && colorRef.current.value !== 'Select') {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.gender === genderRef.current.value).filter((x) => x.color === colorRef.current.value).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))    
            }
        }
        }
    

    const sortColor = (event) => {
        if (priceRef.current.value === 'Select' && genderRef.current.value === 'Select') {
        setCurrentContent(thisPage.filter(x => x.color === colorRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        else if(priceRef.current.value === 'Select' && genderRef.current.value !== 'Select') {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event.target.value).filter(x => x.gender === genderRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        else if(priceRef.current.value === 'low-to-high' && genderRef.current.value === 'Select') {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event.target.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(priceRef.current.value === 'low-to-high' && genderRef.current.value !== 'Select') {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event.target.value).filter((x) => x.gender === genderRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(priceRef.current.value === 'high-to-low' && genderRef.current.value === 'Select') {
        setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === event.target.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(priceRef.current.value === 'high-to-low' && genderRef.current.value !== 'Select') {
        setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === event.target.value).filter((x) => x.gender === genderRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        }
        
    const sortGender = (event) => {
        if(event.target.value === 'womens' && priceRef.current.value === 'Select' && colorRef.current.value === 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event.target.value === 'womens' && priceRef.current.value === 'Select' && colorRef.current.value !== 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').filter(x => x.color === colorRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event.target.value === 'womens' && priceRef.current.value === 'high-to-low' && colorRef.current.value === 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => b.price - a.price).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event.target.value === 'womens' && priceRef.current.value === 'low-to-high' && colorRef.current.value === 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => a.price - b.price).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))   
        } else if (event.target.value === 'womens' && priceRef.current.value === 'high-to-low' && colorRef.current.value !== 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => b.price - a.price).filter(x => x.color === colorRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event.target.value === 'womens' && priceRef.current.value === 'low-to-high' && colorRef.current.value !== 'Select') {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => a.price - b.price).filter(x => x.color === colorRef.current.value).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(event.target.value === 'mens' && priceRef.current.value === 'Select' && colorRef.current.value === 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }  else if (event.target.value === 'mens' && priceRef.current.value === 'Select' && colorRef.current.value !== 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').filter(x => x.color === colorRef.current.value).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event.target.value === 'mens' && priceRef.current.value === 'high-to-low' && colorRef.current.value === 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => b.price - a.price).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event.target.value === 'mens' && priceRef.current.value === 'low-to-high' && colorRef.current.value === 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => a.price - b.price).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))   
            } else if (event.target.value === 'mens' && priceRef.current.value === 'high-to-low' && colorRef.current.value !== 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => b.price - a.price).filter(x => x.color === colorRef.current.value).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event.target.value === 'mens' && priceRef.current.value === 'low-to-high' && colorRef.current.value !== 'Select') {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => a.price - b.price).filter(x => x.color === colorRef.current.value).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
        }

    return (
    <div className='apparel-background'>
        <div>{popup === true ? popUp : false}</div>
        <SideNav />
        <div className ='most-popular'>
        <ApparelSort sp = {sp} sortPrice ={sortPrice} sortColor ={sortColor} sortGender = {sortGender} priceRef = {priceRef} colorRef = {colorRef} genderRef = {genderRef}/>
        <SideNavMobile /> 
        {currentContent}
        <div className = 'pageNavBreak'>
            <div className = 'pageNavContainer'>
            <button className = 'pageNavButton'>1</button>
            <button className = 'pageNavButton'>2</button>
            <button className = 'pageNavButton'>3</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ApparelCategories