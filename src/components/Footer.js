import React from 'react'
import './styles/footer.css'

function Footer() {
    return (
        <div>
             <footer className ='home-footer'>
            <span className= 'footer-top'> Joayo</span>
                <ul className='links'>
                    <h2 className='links-header'>Follow us!</h2>
                    <img className = 'facebook-logo' src ='https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png'alt = 'facebook logo'>
                    </img>
                    <img className = 'instagram-logo' src ='http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png' alt = 'instagram logo'>
                    </img>
                    <img className = 'youtube-logo' src='https://cdn.iconscout.com/icon/free/png-256/youtube-66-114609.png' alt = 'utube logo'>
                    </img>
                </ul>
                <div className ='email-signup'>
                    <h2>Sign up for email, get the latest deals and trends</h2>
                    <button className='signup-button'>SIGN UP</button>
                </div>
                <div className ='footer-bottom'>
                    <h3>Contact</h3>
                    <h3>|</h3>
                    <h3>Privacy policy</h3>
                    <h3>|</h3>
                    <h3>Terms and Conditions</h3>
                    <h4>©2021 Joayo</h4>
                </div>
        </footer>
        </div>
    )
}

export default Footer
