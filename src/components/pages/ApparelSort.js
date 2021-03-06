import React from 'react'
import '../styles/apparelsort.css'
function ApparelSort(props) {

    

    return (
        <div className ='apparel-sort-container'>
            <div className ='price-sort'>
                
                <select name='price' className='price-select' onChange ={(event) => { props.queryString.set('price', event.target.value); props.handleQueryStringChange('price')}}>
                    <option value=''>Price</option>
                    <option value='low-to-high'>Low to High</option>
                    <option value='high-to-low'>High to Low</option>
                </select>
                </div>
            <div className ='color-sort'>
                
                <select name='color' className='color-select' onChange = {(event) => { props.queryString.set('color', event.target.value); props.handleQueryStringChange('color')}}>
                    <option value=''>Color</option>
                    <option value='red'>Red</option>
                    <option value ='pink'>Pink</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='orange'>Orange</option>
                    <option value='yellow'>Yellow</option>
                    <option value='brown'>Brown</option>
                    <option value='purple'>Purple</option>
                    <option value='black'>Black</option>
                    <option value='white'>White</option>
                    <option value='grey'>Grey</option>
                    <option value='silver'>Silver</option>
                    <option value ='natural'>Natural</option>
                    <option value='assorted'>Assorted</option>
                </select>
                </div>
            <div className = 'gender-sort'>
                
                <select name='gender' className = 'gender-select' onChange = {(event) => { props.queryString.set('gender', event.target.value); props.handleQueryStringChange('gender') }}>
                <option value=''>Gender</option>
                <option value = 'mens'>Mens</option>
                <option value = 'womens'>Womens</option>
                </select>
            </div>
        </div>
    )
}

export default ApparelSort
