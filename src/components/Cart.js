import React, {useState, useEffect} from 'react'
import './styles/cart.css'
import firebase from '../firebase'
import {doc, deleteDoc, getFirestore} from "firebase/firestore";
import uniqid from 'uniqid'
const db = getFirestore()

function Cart(props) {
    let x = 0
    let cartItemsReduce = props.cartItems.forEach(element => {
        x += element.price
    });
    let cartItems = [...props.cartItems]
    const removeCartItem = async (title, size, id) => {
        cartItems.splice(cartItems.findIndex(x => x.title === title && x.size === size), 1)
        props.setCartItems(cartItems)
        await deleteDoc(doc(db, "items", title + id ));
    }
    return (
        <div className ='cart-wrapper' style={{transform: props.cartVisible ? 'translateX(0)' : 'translateX(100%)'}}>
        <div className ='cart-header'>YOUR CART({props.cartCount})<img 
        src ='https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close' 
        alt = 'exit cart'
        style={{height: '20px', width: '20px', marginLeft: '20px', cursor: 'pointer'}}
        onClick ={() => {props.setCartVisible(false)}}/>
        </div>
        {props.cartItems.map((item, index) =>
                <div className ='item-container' id ={index} key ={uniqid()}>
                    <img className = 'remove-item' src = 'https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/close.png' onClick ={() => {removeCartItem(item.title, item.size, item.id); props.setCartCount(props.cartItems.length - 1)} }></img>
                    <img className = 'item-image'src={item.image}>
                    </img>
                    <div className = 'item-title'>{item.title}</div>
                    <div className = 'item-size'>SIZE:{item.size.toUpperCase()}</div>
                    <div className = 'item-price'>{item.price}</div>
                </div>
            )}
        <div className='checkout-container'>
            <button className = 'checkout-button'>CHECKOUT {Math.round(x * 100) / 100}$</button>
        </div>
        </div>
    )
    
    }

export default Cart
