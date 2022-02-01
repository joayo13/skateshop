import React, { useState, useEffect, useLayoutEffect} from 'react'
import ApparelSort from './ApparelSort'
import Item from '../Item'
import SideNav from '../SideNav'
import SideNavMobile from '../SideNavMobile'
import '../styles/apparel.css'
import uniqid from 'uniqid'
import {apparel} from './apparelArray'
import { Link, useLocation } from 'react-router-dom'




function CurrentPage(props) {

    

    let [currentContent, setCurrentContent] = useState([])
    let [popup, setpopup] = useState(false)
    let [selectedImage, setSelectedImage] = useState('')
    let [selectedTitle, setSelectedTitle] = useState('')
    let [selectedPrice, setSelectedPrice] = useState('')
    let [selectedSize, setSelectedSize] = useState('')

    const apparelFactory = apparel()

    let pagesArray = ['tees', 'longsleeves', 'hoodies', 'jeans', 'joggers', 'shorts', 'skateshoes', 'hightops', 'rollerskates', 'hats', 'socks', 'underwear', 'skateboards', 'longboards', 'cruisers', 'wheels', 'trucks', 'griptape', 'helmets', 'kneepads', 'elbowpads', 'accessories']

    let thisPage = []

    if(props.page !== 'sales') {
        thisPage = apparelFactory?.[props.page]()
    }
    

    let qs = window.location.search
    let queryString = new URLSearchParams(qs)
    
    if(props.page === 'sales') {
        for(let i = 0; i < pagesArray.length; i++) {
            thisPage.push(apparelFactory?.[pagesArray[i]]().filter(x => x.presale !== undefined))
        }
        thisPage = thisPage.flat()
    }
    
    useLayoutEffect(() => {
        
        setCurrentContent(thisPage.map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} key = {uniqid()} size ={item.size} presale = {item.presale}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice} selectSize={setSelectedSize} page ={props.page}/>
        })
        )
        if(queryString.get('price') === 'high-to-low' || queryString.get('price') === 'low-to-high') {
        sortPrice(queryString.get('price'))
        }
        if(queryString.get('color') !== null) {
            sortColor(queryString.get('color'))
        }
        if(queryString.get('gender') !== null) {
            sortGender(queryString.get('gender'))
        }
    }, [])

    const handleQueryStringChange = (sort) => {
        window.history.pushState({}, null, window.location.pathname + '?' + queryString.toString());
        if(sort === 'price') {
        sortPrice(queryString.get('price'))
        }
        if(sort === 'color') {
        sortColor(queryString.get('color'))
        }
        if(sort === 'gender') {
            sortGender(queryString.get('gender'))
        }
    }

    let popUp = [
    <div className = 'wrapper'>
        <div className ='modal'>
            <div className ='exit-modal-wrapper'>
                <img className ='exit-modal' src ='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/cancel.png' alt ='exit-icon' onClick={() => { setpopup(false); setSelectedSize('none')}}></img>
            </div>
            <img className ='selected-image' src={selectedImage} alt='product'></img>
            <div className ='selected-title'>{selectedTitle}</div>
            <div className ='selected-price'>{selectedPrice}</div>
            <div className ='sizes-container'>
                <div className='sizes' style ={{backgroundColor: selectedSize === 'x-small' ? 'black' : 'rgb(70, 70, 70)'}} onClick={() => {setSelectedSize('x-small')}}>XS</div>
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
    if (props.page === 'jeans' ) {
        popUp = [
        <div className = 'wrapper'>
        <div className ='modal'>
            <div className ='exit-modal-wrapper'>
                <img className ='exit-modal' src ='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/cancel.png' alt ='exit-icon' onClick={() => { setpopup(false); setSelectedSize('none')}}></img>
            </div>
            <img className ='selected-image' src={selectedImage} alt='product'></img>
            <div className ='selected-title'>{selectedTitle}</div>
            <div className ='selected-price'>{selectedPrice}</div>
            <div className ='sizes-container'>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '28' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('28')}}>28</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '30' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('30')}}>30</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '32' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('32')}}>32</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '33' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('33')}}>33</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '34' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('34')}}>34</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '36' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('36')}}>36</div>
                <div className='jeans-sizes' style ={{backgroundColor: selectedSize === '38' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('38')}}>38</div>
            </div>
            <button className ='add-to-cart' onClick={() => {
                props.setCartItems(props.cartItems.concat({image: selectedImage, title: selectedTitle, price: selectedPrice, size: selectedSize, id: uniqid()}));
                props.setCartCount(props.cartItems.length + 1);}}>ADD TO CART</button>
        </div>
    </div>
        ]
    }
    if (props.page === 'skateshoes' || props.page === 'hightops' || props.page === 'rollerskates') {
        popUp = [
        <div className = 'wrapper'>
        <div className ='modal'>
            <div className ='exit-modal-wrapper'>
                <img className ='exit-modal' src ='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/cancel.png' alt ='exit-icon' onClick={() => { setpopup(false); setSelectedSize('none')}}></img>
            </div>
            <img className ='selected-image' src={selectedImage} alt='product'></img>
            <div className ='selected-title'>{selectedTitle}</div>
            <div className ='selected-price'>{selectedPrice}</div>
            <div className ='sizes-container'>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M3 / W5' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M3 / W5')}}>M3 / W5</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M5 / W7' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M5 / W7')}}>M5 / W7</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M6 / W8' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M6 / W8')}}>M6 / W8</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M8 / W10' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M8 / W10')}}>M8 / W10</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M9 / W11' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M9 / W11')}}>M9 / W11</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M10 / W12' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M10 / W12')}}>M10 / W12</div>
                <div className='shoes-sizes' style ={{backgroundColor: selectedSize === 'M11 / W13' ? 'rgb(70, 70, 70)' : 'white'}} onClick={() => {setSelectedSize('M11 / W13')}}>M11 / W13</div>
            </div>
            <button className ='add-to-cart' onClick={() => {
                props.setCartItems(props.cartItems.concat({image: selectedImage, title: selectedTitle, price: selectedPrice, size: selectedSize, id: uniqid()}));
                props.setCartCount(props.cartItems.length + 1);}}>ADD TO CART</button>
        </div>
    </div>
        ]
    }

    if (props.page === 'skateboards' || props.page === 'longboards' || props.page === 'cruisers' || props.page === 'wheels' || props.page === 'trucks' || props.page === 'griptape' || props.page === 'accessories') {
         popUp = [
        <div className = 'wrapper'>
        <div className ='modal'>
            <div className ='exit-modal-wrapper'>
                <img className ='exit-modal' src ='https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/cancel.png' alt ='exit-icon' onClick={() => { setpopup(false); setSelectedSize('none')}}></img>
            </div>
            <img className ='selected-image' src={selectedImage} alt='product'></img>
            <div className ='selected-title'>{selectedTitle}</div>
            <div className ='selected-price'>{selectedPrice}</div>
            <button className ='add-to-cart' onClick={() => {
                props.setCartItems(props.cartItems.concat({image: selectedImage, title: selectedTitle, price: selectedPrice, size: selectedSize, id: uniqid()}));
                props.setCartCount(props.cartItems.length + 1);}}>ADD TO CART</button>
        </div>
    </div>
        ]
    }


    let price = queryString.get('price')
    let color = queryString.get('color')
    let gender = queryString.get('gender')
    const sortPrice = (order) => {
        
        if(order === '') {
            return
        }
        if(order === 'high-to-low') {
            if(!color && !gender) {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale}key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(color && !gender) {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === color).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(gender && !color) {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.gender === gender).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(gender && color) {
            setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.gender === gender).filter((x) => x.color === color).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))    
            }
        
        } else if (order === 'low-to-high') {
            if(!color && !gender) {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            if(color && !gender) {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === color).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(gender && !color) {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.gender === gender).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
            else if(gender && color) {
            setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.gender === gender).filter((x) => x.color === color).map( item => { 
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))    
            }
        }
        }
    

    const sortColor = (event) => {
        if(event === '') {
            return
        }
        if (!price && !gender) {
        setCurrentContent(thisPage.filter(x => x.color === event).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        else if(!price && gender) {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event).filter(x => x.gender === gender).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        else if(price === 'low-to-high' && !gender) {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(price === 'low-to-high' && gender) {
        setCurrentContent(thisPage.sort((a, b) => a.price - b.price).filter((x) => x.color === event).filter((x) => x.gender === gender).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(price === 'high-to-low' && !gender) {
        setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === event).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(price === 'high-to-low' && gender) {
        setCurrentContent(thisPage.sort((a, b) => b.price - a.price).filter((x) => x.color === event).filter((x) => x.gender === gender).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()}
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        }
        }
        
    const sortGender = (event) => {
        if(event === 'womens' && !price && !color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event === 'womens' && !price && color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').filter(x => x.color === color).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event === 'womens' && price === 'high-to-low' && !color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => b.price - a.price).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event === 'womens' && price === 'low-to-high' && !color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => a.price - b.price).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))   
        } else if (event === 'womens' && price === 'high-to-low' && color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => b.price - a.price).filter(x => x.color === color).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if (event === 'womens' && price === 'low-to-high' && color) {
        setCurrentContent(thisPage.filter((x) => x.gender === 'womens').sort((a, b) => a.price - b.price).filter(x => x.color === color).map( item => {
        return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
        popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
        }))
        } else if(event === 'mens' && !price && !color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }  else if (event === 'mens' && !price && color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').filter(x => x.color === color).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event === 'mens' && price === 'high-to-low' && !color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => b.price - a.price).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event === 'mens' && price === 'low-to-high' && !color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => a.price - b.price).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))   
            } else if (event === 'mens' && price === 'high-to-low' && color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => b.price - a.price).filter(x => x.color === color).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            } else if (event === 'mens' && price === 'low-to-high' && color) {
            setCurrentContent(thisPage.filter((x) => x.gender === 'mens').sort((a, b) => a.price - b.price).filter(x => x.color === color).map( item => {
            return <Item image ={item.image} title ={item.title} price ={item.price} presale ={item.presale} key = {uniqid()} 
            popup={setpopup} selectImage ={setSelectedImage} selectTitle={setSelectedTitle} selectPrice={setSelectedPrice}/>
            }))
            }
        }

    return (
        <div className = 'page-background'>
    <div className='apparel-background'>
        <div>{popup === true ? popUp : false}</div>
        <SideNav type ={props.type}/>
        <div className ='most-popular'>
        <SideNavMobile type = {props.type}/>
        <ApparelSort handleQueryStringChange = {handleQueryStringChange} queryString ={queryString}sortPrice ={sortPrice} sortColor ={sortColor} sortGender = {sortGender} price = {price} color = {color} gender = {gender}/>
        {currentContent}
        </div>
        
    </div>
    
    </div>
    )
}

export default CurrentPage