import React from 'react'
import '../styles/apparelsort.css'
function ApparelSort(props) {

    

    return (
        <div className ='apparel-sort-container'>
            <div className ='price-sort'>
                Price
                <select name='price' ref = {props.priceRef} className='price-select' onChange ={(event) => {props.sortPrice(event); props.sp.set('sort', event.target.value); console.log(props.sp.toString())}}>
                    <option>Select</option>
                    <option value='low-to-high'>Low to High</option>
                    <option value='high-to-low'>High to Low</option>
                </select>
                </div>
            <div className ='color-sort'>
                Color
                <select name='color' ref = {props.colorRef} className='color-select' onChange = {(event) => props.sortColor(event)}>
                    <option>Select</option>
                    <option value='red'>Red</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='orange'>Orange</option>
                    <option value='yellow'>Yellow</option>
                    <option value='brown'>Brown</option>
                    <option value='purple'>Purple</option>
                    <option value='black'>Black</option>
                    <option value='white'>White</option>
                    <option value='grey'>Grey</option>
                </select>
                </div>
            <div className = 'gender-sort'>
                Gender
                <select name='gender' ref = {props.genderRef} className = 'gender-select' onChange = {(event) => props.sortGender(event) }>
                <option>Select</option>
                <option value = 'mens'>Mens</option>
                <option value = 'womens'>Womens</option>
                </select>
            </div>
        </div>
    )
}

export default ApparelSort
