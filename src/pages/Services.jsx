import React from 'react'

function Services() {
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
            {/*End landex-header-section */}

            <div className="aximo-breadcrumb">
                <div className="container">
                    <h1 className="post__title">Our Services</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li aria-current="page"> Our Services</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding3">
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
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-design-tools" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>UI/UX Design</h3>
                                    <p>Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products &amp; app.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-branding" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Graphic Design</h3>
                                    <p>Creating visual elements such as logos, branding materials, page layout techniques, brochures, &amp; other marketing collateral.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-web" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Web Design</h3>
                                    <p>Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-design-thinking" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Motion Graphics</h3>
                                    <p>Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-layers" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Packaging Design</h3>
                                    <p>Creating packaging solutions for products that not only protect them but also attract customers on store shelves.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.5s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-rating-stars-1" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Logo and Branding</h3>
                                    <p>Creating or refreshing a company's logo and developing a cohesive visual identity, business card, letterhead, &amp; style guides.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.6s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-chef" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Illustration</h3>
                                    <p>Producing custom illustrations for editorial content, books, websites, marketing materials, magazines and more.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.7s">
                                <div className="aximo-iconbox-icon">
                                    <i className="icon-target-1" />
                                </div>
                                <div className="aximo-iconbox-data">
                                    <h3>Product Design</h3>
                                    <p>Developing the look and feel of physical products, considering ergonomics, aesthetics, and functionality.</p>
                                    <a className="aximo-icon" href="single-/Services"><img src="assets/images/icon/arrow-right.svg" alt="" /></a>
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
                                <div className="aximo-accordion-wrap wow fadeInUpX" data-wow-delay="0.1s" id="aximo-accordion">
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

            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            These FAQs help
                            <span className="aximo-title-animation">
                                clients learn about us
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap responsive-margin">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What services does agency offer?</h3>
                                        <p>Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What is your design process like?</h3>
                                        <p>Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>How much does design work cost?</h3>
                                        <p>The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-accordion-normal-wrap">
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>What's your design process like?</h3>
                                        <p>Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>How do you handle user feedback?</h3>
                                        <p>We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.</p>
                                    </div>
                                </div>
                                <div className="aximo-accordion-normal-item">
                                    <div className="aximo-accordion-normal-icon">
                                        <img src="assets/images/icon/question.svg" alt="" />
                                    </div>
                                    <div className="aximo-accordion-normal-data">
                                        <h3>Can we see samples of your work?</h3>
                                        <p>Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.</p>
                                    </div>
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

export default Services