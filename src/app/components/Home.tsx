import React from 'react'
import { Image } from 'react-bootstrap'

const HomePage = () => {
  return (
   <>
       <section className="blind-curtain" id="home-1">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="./images/hero.png" className="d-block w-100" alt="slide-1" width={1000} height={1000}/>
                        <div className="carousel-caption  d-md-block">
                            <h5 className="hero-slide-title">BLINDS 2 & CURTAINS 2</h5>
                            <p className="hero-slide-content">The Window Wardrobe</p>
                            <div className="discover-btn-hero">
                                <a href="#" className="transparent-btn">DISCOVER PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="./images/hero.png" className="d-block w-100" alt="slide-2" width={1000} height={1000}/>
                        <div className="carousel-caption  d-md-block">
                            <h5 className="hero-slide-title">BLINDS 2 & CURTAINS 2</h5>
                            <p className="hero-slide-content">The Window Wardrobe</p>
                            <div className="discover-btn-hero">
                                <a href="#" className="transparent-btn">DISCOVER PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="./images/hero.png" className="d-block w-100" alt="slide-3" width={1000} height={1000}/>
                        <div className="carousel-caption  d-md-block">
                            <h5 className="hero-slide-title">BLINDS 2 & CURTAINS 2</h5>
                            <p className="hero-slide-content">The Window Wardrobe</p>
                            <div className="discover-btn-hero">
                                <a href="#" className="transparent-btn">DISCOVER PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        {/* <!-- ------------section-2-----------p --> */}

        <section className="blind-curtain1" id="home-2">
            <div className="home-parent-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <Image src="./images/about-Image.png" alt="home-about-Image" className="home-about-bg Image-fluid" width={100} height={100}/>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-about-section">
                                <h1 className="home-about-title"><span>Premium</span><span>Blinds & Curtains
                                        Solutions</span></h1>
                                <p className="home-about-description m-0">
                                    Established in 1995, Blinds 2 & Curtains 2 has been a trusted name in premium window
                                    treatments for nearly three decades. We pride ourselves on offering an extensive
                                    range of high-quality blinds and curtains, all available in-stock for your
                                    convenience. Our in-house workshop ensures that every product is crafted with
                                    meticulous attention to detail and tailored to meet your specific needs.
                                </p>
                                <p className="home-about-description pt-0">
                                    With a commitment to exceptional craftsmanship and customer satisfaction, Blinds 2 &
                                    Curtains 2 is your go-to destination for stylish, functional, and reliable window
                                    solutions.
                                </p>
                                <div className="blue-btn-parent">
                                    <a href="#" className="dark-blue-btn">DISCOVER MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* <!--------------section-3---------------------> */}

        <section className="blind-curtain1" id="home-3">
            <div className="home-quality-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 material-card-parent">
                            <div className="home-material-card">
                                <Image src="./images/icon-curtain.svg" className="Image-fluid" alt="slide-2" width={100} height={100}/>
                                <h5 className="home-material-title">
                                    Custom Designs
                                </h5>
                                <p className="home-material-description">
                                    Tailor-made blinds and curtains to fit your unique style and window dimensions.
                                </p>
                                <div className="blue-bottom-border"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 material-card-parent">
                            <div className="home-material-card color-card">
                                <Image src="./images/icon-materials.svg" className="Image-fluid" alt="slide-2" width={100} height={100}/>
                                <h5 className="home-material-title">
                                    Premium <br />Quality Materials
                                </h5>
                                <p className="home-material-description">
                                    We use only the highest quality fabrics and materials for lasting elegance and
                                    durability.
                                </p>
                                <div className="light-bottom-border"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 material-card-parent">
                            <div className="home-material-card">
                                <Image src="./images/icon-installation.svg" className="Image-fluid" alt="slide-2" width={100} height={100}/>
                                <h5 className="home-material-title">
                                    Expert Installation
                                </h5>
                                <p className="home-material-description">
                                    Professional installation services to ensure a perfect fit and finish every time.
                                </p>
                                <div className="blue-bottom-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        {/* <!-- ------------section-4------------------------- --> */}

        {/* <section className="blind-curtain1" id="home-4">
            <div className="home-quality-section">
                <div className="product-slider-home">
                    <h1 className="home-about-title text-center">Featured Products</h1>
                    <div className="home-slider">
                        <div className="wrapper">
                            <div className="my-slider">
                                <div className="product-slider">
                                    <div className="hover-image">
                                        <Image src="./images/home-product-01.png" alt="slide-1"
                                            className="Image-fluid feature-products" width={100} height={100}/>
                                        <div className="blue-btn-parent">
                                            <a href="#" className="dark-blue-btn">View Product</a>
                                        </div>
                                    </div>
                                    <h6 className="product-slider-title">
                                        Turquoise Curtains
                                    </h6>
                                    <p className="product-slider-price">
                                        $55.99 - $60.99
                                    </p>
                                </div>
                                <div className="product-slider">
                                    <div className="hover-image">
                                        <Image src="./images/home-product-02.png" alt="slide-1"
                                            className="Image-fluid feature-products" width={100} height={100}/>
                                        <div className="blue-btn-parent">
                                            <a href="#" className="dark-blue-btn">View Product</a>
                                        </div>
                                    </div>

                                    <h6 className="product-slider-title">
                                        Brown Curtains
                                    </h6>
                                    <p className="product-slider-price">
                                        $55.99 - $60.99
                                    </p>
                                </div>
                                <div className="product-slider">
                                    <div className="hover-image">
                                        <Image src="./images/home-product-03.png" alt="slide-1"
                                            className="Image-fluid feature-products" width={100} height={100}/>
                                        <div className="blue-btn-parent">
                                            <a href="#" className="dark-blue-btn">View Product</a>
                                        </div>
                                    </div>
                                    <h6 className="product-slider-title">
                                        Wood Blinds
                                    </h6>
                                    <p className="product-slider-price">
                                        $55.99 - $60.99
                                    </p>
                                </div>
                                <div className="product-slider">
                                    <div className="hover-image">
                                        <Image src="./images/home-product-01.png" alt="slide-1"
                                            className="Image-fluid feature-products" width={100} height={100}/>
                                        <div className="blue-btn-parent">
                                            <a href="#" className="dark-blue-btn">View Product</a>
                                        </div>
                                    </div>
                                    <h6 className="product-slider-title">
                                        Turquoise Curtains
                                    </h6>
                                    <p className="product-slider-price">
                                        $55.99 - $60.99
                                    </p>
                                </div>

                                <div className="product-slider">
                                    <div className="hover-image">
                                        <Image src="./images/home-product-02.png" alt="slide-1"
                                            className="Image-fluid feature-products" width={100} height={100}/>
                                        <div className="blue-btn-parent">
                                            <a href="#" className="dark-blue-btn">View Product</a>
                                        </div>
                                    </div>
                                    <h6 className="product-slider-title">
                                        Brown Curtains
                                    </h6>
                                    <p className="product-slider-price">
                                        $55.99 - $60.99
                                    </p>
                                </div>

                            </div>
                            <div className="blue-btn-parent text-center pt-3">
                                <a href="#" className="dark-blue-btn">VIEW ALL PRODUCTS</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section> */}

        {/* <!-- ------------section-4------------------------- --> */}

        <section className="home-contact-section" id="home-5">
            <div className="home-quality-section "   style={{ backgroundImage: "url(./images/home-contact-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-contact-section">
                                <p className="hero-slide-content text-start">Get In Touch</p>
                                <p className="home-material-description ">
                                    For personalized assistance, expert advice, and to explore our full range, contact
                                    us today!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-contact-section1">
                                <div className="footer-call">
                                    <Image src="./images/icon-phone-square.svg" alt="phone" className="Image-fluid" width={100} height={100}/>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <span className="footer-phone-number">
                                        <a href="tel:+6562417119">+65 6241 7119</a>
                                    </span>
                                </div>
                                <span className="or"> OR</span>

                                <div className="nav-item call-btn">
                                    <a className="nav-link m-0" aria-current="page" href="#">

                                        <span>CONTACT US</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
  )
}

export default HomePage