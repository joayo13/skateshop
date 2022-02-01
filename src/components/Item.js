import React from 'react'
import './styles/mostpopular.css'
function Item(props) {
    let item = [ <div className ='most-popular-item'>
                <div className='most-popular-item-image-container'>
                <div className ='get-it-now'>ADD TO CART</div>
                
                <img src ={props.image} alt={props.title} className='most-popular-item-image' onClick={() => {props.popup(true); props.selectImage(props.image); props.selectTitle(props.title); props.selectPrice(props.price)}}></img>
                </div>
                <div className ='most-popular-item-text'>{props.title}</div>
                <div className ='most-popular-item-price' style={props.presale ? {textDecoration: 'line-through', color: 'gray'} : null}>{props.presale ? props.presale : props.price}</div>
                <div className = 'most-popular-item-sale'>{props.presale ? <div>{props.price}</div> : null}</div>
            </div>]
    
    if (props.page === 'skateboards' || props.page === 'longboards' || props.page === 'cruisers' || props.page === 'wheels' || props.page === 'trucks' || props.page === 'griptape' || props.page === 'accessories') {
        item = [
            <div className ='most-popular-item'>
                <div className='most-popular-item-image-container'>
                <div className ='get-it-now'>ADD TO CART</div>
                
                <img src ={props.image} alt={props.title} className='most-popular-item-image' onClick={() => {props.popup(true); props.selectImage(props.image); props.selectTitle(props.title); props.selectPrice(props.price); props.selectSize(props.size)}}></img>
                </div>
                <div className ='most-popular-item-text'>{props.title}</div>
                <div className ='most-popular-item-price'>{props.price}</div>
            </div>
        ]
    }
    return (
        <>{item}</>
    )
}

export default Item
