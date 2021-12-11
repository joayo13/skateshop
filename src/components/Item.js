import React from 'react'
import './styles/mostpopular.css'
function Item(props) {
    return (
        <div className ='most-popular-item'>
                <div className='most-popular-item-image-container'>
                <div className ='get-it-now'>ADD TO CART</div>
                
                <img src ={props.image} alt={props.title} className='most-popular-item-image' onClick={() => {props.popup(true); props.selectImage(props.image); props.selectTitle(props.title); props.selectPrice(props.price)}}></img>
                </div>
                <div className ='most-popular-item-text'>{props.title}</div>
                <div className ='most-popular-item-price'>{props.price}</div>
            </div>
    )
}

export default Item
