import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae facere culpa ipsam odio accusamus, explicabo facilis enim inventore similique, quod optio molestiae soluta alias eos rerum fugiat libero perferendis excepturi.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>            
            </div>


            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Deivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>


            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 123456789</li>
                <li>conatct@tomato.com</li>
              </ul>
            </div>
        </div>

        <hr />

       <p className='footer-copyright'>
        Copyright 2024 ©Rohit Phuge - ®All Right Reserved
       </p>

      
    </div>
  )
}

export default Footer
