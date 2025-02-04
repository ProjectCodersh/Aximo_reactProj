import React from 'react'

function AboutUs() {
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
                <img src="assets/images/logo/logo-white.svg" alt="White logo" className="light-version-logo" />
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
                    <div>
                      <a href="#" className="nav-link-item drop-trigger">
                        Demo <i className="fas fa-angle-down" />
                      </a>
                    </div>


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
                    <a href="#" className="nav-link-item drop-trigger">
                      Pages <i className="fas fa-angle-down" />
                    </a>

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
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          blog <i className="fas fa-angle-down" />
                        </a>

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
                        <a href="#" data-menu-get="h3" className="drop-trigger">
                          Service <i className="fas fa-angle-down" />
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
          <h1 className="post__title">About Us</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li aria-current="page"> About Us</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

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
                      <img src="assets/images/v1/star2.png" alt="Star Icon" />

                    </span>
                  </span>
                  business stand out
                </h2>
              </div>
              <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
                <p>We work closely with our clients to know their objectives, target audience, unique needs, and practical
                  design solutions.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-video-wrap wow fadeInUpX" data-wow-delay="0.1s">
                <img src="assets/images/v1/video-bg.png" alt="Video Background" />


                <a className="aximo-video-popup video-init" href="https://www.youtube.com/watch?v=Vx2aLNgGoAE">
                  <img src="assets/images/v1/play-btn.svg" alt="Play Button" />


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

      <div className="section aximo-section-padding6">
        <div className="container">
          <div className="aximo-section-title center title-description">
            <h2>
              <span className="aximo-title-animation">
                We think our story is
                <span className="aximo-title-icon">
                  <img src="assets/images/v1/star2.png" alt="Star Icon" />
                </span>
              </span>
              worth sharing with you
            </h2>
            <p>Established in 2008, we began as a small but ambitious team. We understood the importance of creative and
              tech-savvy solutions to help businesses succeed in the ever-changing digital landscape.</p>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.1s">
                <img src="assets/images/about/story1.png" alt="story1" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.2s">
                <img src="assets/images/about/story2.png" alt="story2" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.3s">
                <img src="assets/images/about/story3.png" alt="story3" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.4s">
                <img src="assets/images/about/story4.png" alt="story4" />
              </div>
            </div>
          </div>
          <div className="aximo-story-content">
            <div className="row">
              <div className="col-lg-6">
                <h3>Our core vision</h3>
                <p>Empowering businesses to create impactful and visually stunning brand experiences that captivate
                  audiences and drive success in the digital age. </p>
                <p>Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds,
                  allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and
                  innovation.</p>
              </div>
              <div className="col-lg-6">
                <h3>Our main mission</h3>
                <p>Our mission is to collaborate with businesses of all sizes, from startups to established brands, to
                  provide innovative and creative design solutions. </p>
                <p>We are committed to creating designs that inspire, connect &amp; our clients in the marketplace. Our focus is
                  on understanding. Our clients' unique needs and delivery designs that not only meet but exceed their
                  expectations.</p>
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
                <img src="assets/images/v1/star3.png" alt="Star Icon" />

              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3>Let's create new experiences</h3>
                <img src="assets/images/v1/star3.png" alt="Star Icon" />
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
                  <img src="assets/images/v1/star2.png" alt="Star Icon" />

                </span>
              </span>
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team1.png" alt="Team Icon" />
                  <div className="aximo-social-icon team-social">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          Twitter
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
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.1s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team2.png" alt="Team Icon" />
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
                    <h3>Jack Taylor</h3>
                  </a>
                  <p>Senior Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.2s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team3.png" alt="Team Icon" />
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
                    <h3>Martine Joy</h3>
                  </a>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.3s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team4.png" alt="Team Icon" />
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
                    <h3>Adam Straw</h3>
                  </a>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.4s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team5.png" alt="Team Icon" />
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
                    <h3>William Jack</h3>
                  </a>
                  <p>Creative Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.5s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team6.png" alt="Team Icon" />
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
                    <h3>Alex Tom</h3>
                  </a>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.6s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team7.png" alt="Team Icon" />
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
                    <h3>Robin Lesser</h3>
                  </a>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.7s">
                <div className="aximo-team-thumb">
                  <img src="assets/images/team/team8.png" alt="Team Icon" />
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
                    <h3>Sheikh David</h3>
                  </a>
                  <p>HR Director</p>
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
                        <img src="assets/images/v1/star2.png" alt="Star icon" />
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
                    <img src="assets/images/v1/shape1.png" alt="Shape icon" />
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
                    <button id="aximo-submit-btn" type="submit">
                      Send message <span><img src="assets/images/icon/arrow-right3.svg" alt="Arrow Right" /></span>
                    </button>
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
                    <img src="assets/images/logo/logo-white.svg" alt="logo-white" />
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

export default AboutUs