import React from 'react'

function Error404() {
    return (
        <div>

            <div className="aximo-preloader-wrap">
                <div className="aximo-preloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
                <div className="container">
                    <nav className="navbar site-navbar">
                        {/* Brand Logo*/}
                        <div className="brand-logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo-white.svg" alt="" className="light-version-logo" />
                            </a>
                        </div>
                        <div className="menu-block-wrapper">
                            <div className="menu-overlay" />
                            <nav className="menu-block" id="append-menu-header">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left" />
                                    </div>
                                    <div className="current-menu-title" />
                                    <div className="mobile-menu-close">×</div>
                                </div>
                                <ul className="site-menu-main">
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Demo <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-1">
                                            <li className="sub-menu--item">
                                                <a href="index.html">
                                                    <span className="menu-item-text">Design Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-02.html">
                                                    <span className="menu-item-text">Startup Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-03.html">
                                                    <span className="menu-item-text">SEO Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-04.html">
                                                    <span className="menu-item-text">Business Consultation</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-05.html">
                                                    <span className="menu-item-text">Digital Marketing</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-06.html">
                                                    <span className="menu-item-text">Interior Design Agency</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-07.html">
                                                    <span className="menu-item-text">Advertising agency</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-us.html" className="nav-link-item">About Us</a>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="about-us.html">
                                                    <span className="menu-item-text">About Us</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="pricing.html">
                                                    <span className="menu-item-text">Pricing</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">blog <i className="fas fa-angle-down" /></a>
                                                <ul className="sub-menu shape-none" id="submenu-3">
                                                    <li className="sub-menu--item">
                                                        <a href="blog.html">
                                                            <span className="menu-item-text">Our Blog</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="blog-grid.html">
                                                            <span className="menu-item-text">Blog grid</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-blog.html">
                                                            <span className="menu-item-text">blog details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Service<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-4">
                                                    <li className="sub-menu--item">
                                                        <a href="service.html">
                                                            <span className="menu-item-text">service</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-service.html">
                                                            <span className="menu-item-text">service details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Team<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-5">
                                                    <li className="sub-menu--item">
                                                        <a href="team.html">
                                                            <span className="menu-item-text">team</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-team.html">
                                                            <span className="menu-item-text">team details</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Portfolio<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-6">
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-02.html">
                                                            <span className="menu-item-text">Portfolio One Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-01.html">
                                                            <span className="menu-item-text">Portfolio Two Column</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-portfolio.html">
                                                            <span className="menu-item-text">Single Portfolio</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Utility<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-7">
                                                    <li className="sub-menu--item">
                                                        <a href="faq.html">
                                                            <span className="menu-item-text">faq</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="errors-404.html">
                                                            <span className="menu-item-text">Error 404</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="testimonial.html">
                                                            <span className="menu-item-text">testimonial</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="coming-soon.html">
                                                            <span className="menu-item-text">Coming Soon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Account<i className="fas fa-angle-down" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-8">
                                                    <li className="sub-menu--item">
                                                        <a href="sign-up.html">
                                                            <span className="menu-item-text">sign up</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="sign-in.html">
                                                            <span className="menu-item-text">sign in</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="reset-password.html">
                                                            <span className="menu-item-text">reset password</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Blog <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-9">
                                            <li className="sub-menu--item">
                                                <a href="blog.html">
                                                    <span className="menu-item-text">blog</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-grid.html">
                                                    <span className="menu-item-text">Blog grid</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="single-blog.html">
                                                    <span className="menu-item-text">blog Details</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact-us.html" className="nav-link-item">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                            <a className="aximo-default-btn pill aximo-header-btn" href="contact-us.html">
                                Contact Us
                            </a>
                        </div>
                        {/* mobile menu trigger */}
                        <div className="mobile-menu-trigger light">
                            <span />
                        </div>
                        {/*/.Mobile Menu Hamburger Ends*/}
                    </nav>
                </div>
            </header>
            {/*End landex-header-section */}

            <div className="section">
                <div className="container">
                    <div className="aximo-errors-wrap">
                        <div className="aximo-errors-thumb">
                            <img src="assets/images/about/404.png" alt="" />
                        </div>
                        <div className="aximo-errors-title">
                            <h2>
                                We can’t find the page
                                <span className="aximo-title-animation">
                                    you are looking for
                                    <span className="aximo-title-icon">
                                        <img src="assets/images/v1/star2.png" alt="" />
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <a className="aximo-errors-btn wow fadeInUpX" data-wow-delay="0.1s" href="index.html">Return to homepage <span><img src="assets/images/icon/arrow-right.svg" alt="" /></span></a>
                    </div>
                </div>
            </div>
            {/* End section */}
            <div>

                {/* Footer  */}
                <footer className="aximo-footer-section dark-bg">
                    <div className="container">
                        <div className="aximo-footer-top aximo-section-padding">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="aximo-default-content light position-relative">
                                        <h2>
                                            <span className="aximo-title-animation">
                                                Let's start a
                                                <span className="aximo-title-icon">
                                                    <img src="assets/images/v1/star2.png" alt="" />
                                                </span>
                                            </span>
                                            project together
                                        </h2>
                                        <p>We work closely with our clients to understand their objectives, target audience, and unique needs. We
                                            use our creative skills to translate these requirements and practical design solutions.</p>
                                        <div className="aximo-info-wrap">
                                            <div className="aximo-info">
                                                <ul>
                                                    <li>Give us a call:</li>
                                                    <li><a href>(123) 456-7890</a></li>
                                                </ul>
                                            </div>
                                            <div className="aximo-info">
                                                <ul>
                                                    <li>Send us an email:</li>
                                                    <li><a href>info@mthemeus.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="aximo-social-icon social-large">
                                            <ul>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="icon-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="icon-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="icon-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="icon-linkedin" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="aximo-hero-shape aximo-footer-shape">
                                            <img src="assets/images/v1/shape1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="aximo-form-wrap">
                                        <h4>Send us a message</h4>
                                        <form action="#">
                                            <div className="aximo-form-field">
                                                <input type="text" placeholder="Your name" />
                                            </div>
                                            <div className="aximo-form-field">
                                                <input type="email" placeholder="Your email address" />
                                            </div>
                                            <div className="aximo-form-field">
                                                <input type="text" placeholder="+088-234-6849" />
                                            </div>
                                            <div className="aximo-form-field">
                                                <textarea name="textarea" placeholder="Write your message here..." defaultValue={""} />
                                            </div>
                                            <button id="aximo-submit-btn" type="submit">Send message <span><img src="assets/images/icon/arrow-right3.svg" alt="" /></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aximo-footer-bottom">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="aximo-footer-logo">
                                        <a href>
                                            <img src="assets/images/logo/logo-white.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="aximo-copywright one">
                                        <p> © Copyright 2024, All Rights Reserved by Mthemeus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Error404