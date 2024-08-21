import React from 'react'
import { Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <div className="footer-section">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <Image src="./images/logo-white.png" alt="logo" className="web-footer-logo  Image-fluid" width={200} height={80}/>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-call">
                            <Image src="./images/icon-phone-square.svg" alt="phone" className="Image-fluid"  width={100} height={100}/>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <span className="footer-phone-number">
                                <a href="tel:+6562417119">+65 6241 7119</a>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12">
                        <div className="footer-menu-parent">
                            <div className="footer-menu">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                                <a className="nav-link" aria-current="page" href="#">About Us</a>
                                <a className="nav-link" aria-current="page" href="#">Products</a>
                                <a className="nav-link" aria-current="page" href="#">Gallery</a>
                                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
                                <a className="nav-link" aria-current="page" href="#">E-Shop</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div className="footer-2">
            <div className="container">
                <div className="footer-last-part">
                    <span className="footer-bottom-conditions">Copyright 2024 © Blinds 2 & Curtains 2. All Rights
                        Reserved. &nbsp;| &nbsp; Privacy Policy &nbsp; | &nbsp; Terms and Conditions</span>
                    <span className="footer-bottom-conditions">Web Design by Websentials
                        &nbsp;<Image src="./images/web-logo.png" alt="web-logo" className="Image-fluid"  width={30} height={20}/>
                    </span>
                </div>
            </div>
            <div className="footer-3">
                <a href="https://api.whatsapp.com/send?phone=6591999353" target="_blank">
                    <Image src="./images/icon-whatsapp.svg" alt="icon-whatsapp" className="Image-fluid" width={80} height={80}/>
                </a>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer