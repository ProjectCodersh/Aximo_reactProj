import React from 'react'

function index() {
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
                            <a href="/">
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
                                                <a href="/">
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
                                        <a href="/About" className="nav-link-item">About Us</a>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down" /></a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="/About">
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
                                                        <a href="/Blog">
                                                            <span className="menu-item-text">Our Blog</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Bloggrid">
                                                            <span className="menu-item-text">Blog grid</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-/Blog">
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
                                                        <a href="/Services">
                                                            <span className="menu-item-text">service</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="single-/Services">
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
                                                        <a href="/Faq">
                                                            <span className="menu-item-text">faq</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Error404">
                                                            <span className="menu-item-text">Error 404</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="testimonial.html">
                                                            <span className="menu-item-text">testimonial</span>
                                                        </a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="/Comingsoon">
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
                                                <a href="/Blog">
                                                    <span className="menu-item-text">blog</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="/Bloggrid">
                                                    <span className="menu-item-text">Blog grid</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="single-/Blog">
                                                    <span className="menu-item-text">blog Details</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Contact" className="nav-link-item">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                            <a className="aximo-default-btn pill aximo-header-btn" href="/Contact">
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
            {/*End landex - header - section-- >*/}

            <div className="aximo-hero-section dark-bg">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-hero-content">
                                <h1>
                                    <span className="aximo-title-animation">
                                        A creative
                                        <img src="assets/images/v1/star.png" alt="" />
                                    </span>
                                    design studio
                                </h1>
                                <p>We're a creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in today's fast-paced.</p>
                                <div className="aximo-hero-user-wrap">
                                    <div className="aximo-hero-user-thumb">
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0s">
                                            <img src="assets/images/v1/user1.png" alt="" />
                                        </div>
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0.25s">
                                            <img src="assets/images/v1/user3.png" alt="" />
                                        </div>
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0.4s">
                                            <img src="assets/images/v1/user2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="aximo-hero-user-data">
                                        <p>Believed by more than a thousand people</p>
                                    </div>
                                </div>
                                <a className="aximo-call-btn" href="/Contact">Book a free consultation <i className="icon-call" /></a>
                                <div className="aximo-hero-shape">
                                    <img src="assets/images/v1/shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="aximo-hero-thumb wow fadeInRight" data-wow-delay="0s">
                                <img src="assets/images/v1/hero-thumb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section aximo-section-padding4">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We provide effective
                            <span className="aximo-title-animation">
                                design solutions
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="aximo-service-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-design-tools" />
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>UI/UX Design</h3>
                                        <p>Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products &amp; app.</p>
                                        <a className="aximo-icon" href="/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-branding" />
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Graphic Design</h3>
                                        <p>Creating visual elements such as logos, branding materials, page layout techniques, brochures, &amp; other marketing collateral.</p>
                                        <a className="aximo-icon" href="/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-web" />
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Web Design</h3>
                                        <p>Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.</p>
                                        <a className="aximo-icon" href="/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-design-thinking" />
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Motion Graphics</h3>
                                        <p>Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.</p>
                                        <a className="aximo-icon" href="/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section aximo-section-padding">
                <div id="aximo-counter" />
                <div className="container">
                    <div className="aximo-section-title">
                        <div className="row">
                            <div className="col-lg-7">
                                <h2>
                                    <span className="aximo-title-animation">
                                        We make your
                                        <span className="aximo-title-icon">
                                            <img src="assets/images/v1/star2.png" alt="" />
                                        </span>
                                    </span>
                                    business stand out
                                </h2>
                            </div>
                            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
                                <p>We work closely with our clients to know their objectives, target audience, unique needs, and practical design solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-video-wrap wow fadeInUpX" data-wow-delay="0s">
                                <img src="assets/images/v1/video-bg.png" alt="" />
                                <a className="aximo-video-popup play-btn1 video-init" href="https://www.youtube.com/watch?v=Vx2aLNgGoAE">
                                    <img src="assets/images/v1/play-btn.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="aximo-counter-wrap">
                                <div className="aximo-counter-data">
                                    <h2 className="aximo-counter-number"><span data-percentage={15} className="aximo-counter" />+</h2>
                                    <p>Years of experience</p>
                                </div>
                                <div className="aximo-counter-data">
                                    <h2 className="aximo-counter-number"><span data-percentage={120} className="aximo-counter" />k</h2>
                                    <p>Successful projects</p>
                                </div>
                                <div className="aximo-counter-data">
                                    <h2 className="aximo-counter-number"><span data-percentage={100} className="aximo-counter" />%</h2>
                                    <p>Client satisfaction rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section dark-bg aximo-section-padding">
                <div className="container">
                    <div className="aximo-section-title center light">
                        <h2>
                            Have a wide range of
                            <span className="aximo-title-animation">
                                creative projects
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="swiper aximo-project-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project1.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>Product Design</h3>
                                        </a>
                                        <p>Developing the look and feel of physical products, aesthetics, and functionality.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project2.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>Logo and Branding</h3>
                                        </a>
                                        <p>Creating or refreshing a company's logo and developing a cohesive visual identity.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project3.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>App UI/UX Design</h3>
                                        </a>
                                        <p>Designing the UI/UXe for mobile apps and web applications to ensure usability &amp; engagement.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project4.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>Packaging Design</h3>
                                        </a>
                                        <p>Creating packaging solutions for products that not only protect attract customers on store.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project1.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>Product Design</h3>
                                        </a>
                                        <p>Developing the look and feel of physical products, aesthetics, and functionality.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-project-thumb">
                                <img src="assets/images/v1/project2.png" alt="" />
                                <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <a href="single-portfolio.html">
                                            <h3>Logo and Branding</h3>
                                        </a>
                                        <p>Creating or refreshing a company's logo and developing a cohesive visual identity.</p>
                                    </div>
                                    <a className="aximo-project-icon" href="single-portfolio.html">
                                        <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#FDFDE1" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </div>
            {/* End section */}

            <div className="section">
                <div className="container">
                    <div className="aximo-faq-wrap">
                        <div className="row">
                            <div className="col-lg-7 d-flex align-items-center">
                                <div className="aximo-default-content">
                                    <h2>
                                        <span className="aximo-title-animation">
                                            Our high-quality
                                            <span className="aximo-title-icon">
                                                <img src="assets/images/v1/star2.png" alt="" />
                                            </span>
                                        </span>
                                        working processes
                                    </h2>
                                    <p>We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.</p>
                                    <p>It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="aximo-accordion-wrap wow fadeInUpX" data-wow-delay="0s" id="aximo-accordion">
                                    <div className="aximo-accordion-item open">
                                        <div className="aximo-accordion-header">
                                            <h3>01/ Project idea</h3>
                                        </div>
                                        <div className="aximo-accordion-body">
                                            <p>The process starts with a detailed discussion with the client to understand their idea &amp; goals.</p>
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-item">
                                        <div className="aximo-accordion-header">
                                            <h3>02/ Brainstorming</h3>
                                        </div>
                                        <div className="aximo-accordion-body">
                                            <p>Brainstorming is a group creativity technique in which members attempt to find a conclusion.</p>
                                        </div>
                                    </div>
                                    <div className="aximo-accordion-item">
                                        <div className="aximo-accordion-header">
                                            <h3>03/ Launch</h3>
                                        </div>
                                        <div className="aximo-accordion-body">
                                            <p>The completed design assets or final product are delivered with necessary documentation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            Clients are always
                            <span className="aximo-title-animation">
                                satisfied with us
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Super customer service!</h3>
                                    <p>Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb1.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>William Jack <span>Founder@XYZ</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Exceptional creativity and vision</h3>
                                    <p>Working Mthemeus was a game-changer for our brand. Their exceptional creativity &amp; vision breathed new life into our visual. The logo they perfectly captures our essence &amp; has become instantly recognizable. We couldn't be happier the results!</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb2.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Smith Align <span>Businessman</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Innovative and professional</h3>
                                    <p>I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb3.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Milano Joe <span>Creative Director</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-testimonial-rating">
                                    <ul>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                        <li><i className="icon-star" /></li>
                                    </ul>
                                </div>
                                <div className="aximo-testimonial-data">
                                    <h3>Transformed our brand</h3>
                                    <p>Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <img src="assets/images/v1/t_thumb4.png" alt="" />
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <p>Danial Mark <span>Marketing Director</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="aximo-auto-slider-section">
                <div className="swiper aximo-auto-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="aximo-auto-slider-item">
                                <h3>Let's create new experiences</h3>
                                <img src="assets/images/v1/star3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We have a team of
                            <span className="aximo-title-animation">
                                creative people
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-team-thumb">
                                    <img src="assets/images/team/team1.png" alt="" />
                                    <div className="aximo-social-icon team-social">
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
                                </div>
                                <div className="aximo-team-data">
                                    <a href="single-team.html">
                                        <h3>Andrew Mark</h3>
                                    </a>
                                    <p>Creative Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-team-thumb">
                                    <img src="assets/images/team/team2.png" alt="" />
                                    <div className="aximo-social-icon team-social">
                                        <ul>
                                            <li>
                                                <a href>
                                                    <i className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aximo-team-data">
                                    <a href="single-team.html">
                                        <h3>Jack Taylor</h3>
                                    </a>
                                    <p>Senior Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-team-thumb">
                                    <img src="assets/images/team/team3.png" alt="" />
                                    <div className="aximo-social-icon team-social">
                                        <ul>
                                            <li>
                                                <a href>
                                                    <i className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aximo-team-data">
                                    <a href="single-team.html">
                                        <h3>Martine Joy</h3>
                                    </a>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-team-thumb">
                                    <img src="assets/images/team/team4.png" alt="" />
                                    <div className="aximo-social-icon team-social">
                                        <ul>
                                            <li>
                                                <a href>
                                                    <i className="icon-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    <i className="icon-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aximo-team-data">
                                    <a href="single-team.html">
                                        <h3>Adam Straw</h3>
                                    </a>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End section */}

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
                                    <p>We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.</p>
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
    )
}

export default index