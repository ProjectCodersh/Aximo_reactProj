import React from 'react'

function Blog() {
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

            <div className="aximo-breadcrumb">
                <div className="container">
                    <h1 className="post__title">Our Blog</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li aria-current="page"> Our Blog</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* End breadcrumb */}

            <div className="section aximo-section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-post-item wow fadeInUpX" data-wow-delay="0.1s">
                                <div className="post-thumbnail">
                                    <img src="assets/images/blog/blog3.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <div className="post-category">
                                            <a href>Marketing</a>
                                        </div>
                                        <div className="post-date">
                                            June 18, 2024
                                        </div>
                                    </div>
                                    <a href="single-blog.html">
                                        <h3 className="entry-title">
                                            Learn these five high-income skills to build your one-person business and get rich
                                        </h3>
                                    </a>
                                    <p>As a first-generation immigrant, money and networks weren’t given to me. So instead of going through the front door, I tried a back door approach...</p>
                                    <a className="post-read-more" href="single-blog.html">read more <img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="single-post-item wow fadeInUpX" data-wow-delay="0.2s">
                                <div className="post-thumbnail">
                                    <img src="assets/images/blog/blog4.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <div className="post-category">
                                            <a href>Business</a>
                                        </div>
                                        <div className="post-date">
                                            June 18, 2024
                                        </div>
                                    </div>
                                    <a href="single-blog.html">
                                        <h3 className="entry-title">
                                            I run a $10,000/month business with 0 employees, here's how I use AI tools
                                        </h3>
                                    </a>
                                    <p>Making more money with the help of AI tools. — Up until now, I’ve shared two posts discussing the AI tools I’ve incorporated into my...</p>
                                    <a className="post-read-more" href="single-blog.html">read more <img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="single-post-item wow fadeInUpX" data-wow-delay="0.3s">
                                <div className="post-thumbnail">
                                    <img src="assets/images/blog/blog5.png" alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <div className="post-category">
                                            <a href>Technology</a>
                                        </div>
                                        <div className="post-date">
                                            June 18, 2024
                                        </div>
                                    </div>
                                    <a href="single-blog.html">
                                        <h3 className="entry-title">
                                            Technical loan, product loan or business loan: different types and how to deal withit
                                        </h3>
                                    </a>
                                    <p>Tech debt part two — a deeper dive into product and business debt and the ripple effect on organizations — in part one...</p>
                                    <a className="post-read-more" href="single-blog.html">read more <img src="assets/images/icon/arrow-right.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="aximo-navigation">
                                <nav className="navigation pagination" aria-label="Posts">
                                    <div className="nav-links">
                                        <span aria-current="page" className="page-numbers current">1</span>
                                        <a className="page-numbers" href>2</a>
                                        <a className="next page-numbers" href>
                                            <img src="assets/images/icon/arrow-right8.svg" alt="" />
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-sidebar">
                                <div className="widget">
                                    <div className="wp-block-search__inside-wrapper">
                                        <input type="search" placeholder="Type keyword here" className="wp-block-search__input" />
                                        <button id="wp-block-search__button" type="submit">
                                            <img src="assets/images/icon/search.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h3 className="wp-block-heading">Categories:</h3>
                                    <ul>
                                        <li><a href>Business</a></li>
                                        <li><a href>Development</a></li>
                                        <li><a href>Technology</a></li>
                                        <li><a href>Creative Director</a></li>
                                        <li><a href>Uncategorized</a></li>
                                    </ul>
                                </div>
                                <div className="widget aximo_recent_posts_Widget">
                                    <h3 className="wp-block-heading">Recent Posts:</h3>
                                    <div className="post-item">
                                        <div className="post-thumb">
                                            <a href>
                                                <img src="assets/images/blog/blog1.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-text">
                                            <div className="post-date">
                                                June 18, 2024
                                            </div>
                                            <a className="post-title" href>7 businesses for easy money</a>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-thumb">
                                            <a href>
                                                <img src="assets/images/blog/blog2.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-text">
                                            <div className="post-date">
                                                June 18, 2024
                                            </div>
                                            <a className="post-title" href>My 3 tips for business ideas</a>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <div className="post-thumb">
                                            <a href>
                                                <img src="assets/images/blog/blog3.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-text">
                                            <div className="post-date">
                                                June 18, 2024
                                            </div>
                                            <a className="post-title" href>12 Halloween costume ideas</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h3 className="wp-block-heading">Tags:</h3>
                                    <div className="wp-block-tag-cloud">
                                        <a href>Marketing</a>
                                        <a href>Business</a>
                                        <a href>Solutions</a>
                                        <a href>Studio</a>
                                        <a href>Brand</a>
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

export default Blog