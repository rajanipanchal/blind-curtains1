import Image from 'next/image'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
    <header>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Image src="/Images/blind-curtain-logo.png" alt="logo" className="img-fluid" width={100} height={100}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">E-Shop</a>
                            </li>

                        </ul>
                        <div>
                            <ul className="navbar-nav list-item-second ms-auto align-items-center ">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">
                                        <img src="/Images/user.svg" alt="user" className="img-fluid"width={100} height={100}/>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">
                                        <img src="/Images/shopping.svg" alt="shopping" className="img-fluid"width={100} height={100}/>
                                    </a>
                                </li>
                                <li className="nav-item call-btn">
                                    <a className="nav-link m-0" aria-current="page" href="#">
                                        <img src="/Images/phone-icon.svg" alt="phone" className="img-fluid"width={100} height={100}/>
                                        &nbsp; &nbsp;
                                        <span>+65 6241 7119</span>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
    </header>





    </>

  )
}

export default Header