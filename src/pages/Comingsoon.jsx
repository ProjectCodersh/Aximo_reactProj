import React from 'react'

function Comingsoon() {
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

            <div className="aximo-logo-section">
                <div className="container">
                    <a href="index.html">
                        <img src="assets/images/logo/logo-white.svg" alt='' />
                    </a>
                </div>
            </div>
            {/* end */}

            <div className="section aximo-section-padding">
                <div className="container">
                    <div className="aximo-coming-title">
                        <h2>
                            Exciting things are
                            <span className="aximo-title-animation">
                                coming soon!
                                <span className="aximo-title-icon">
                                    <img src="assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                        <p>Get notified when we launch something new for you! Enter your email address here and stay tuned with us.</p>
                    </div>
                    <div className="aximo-countdown-wrap">
                        <div className="aximo-countdown-item">
                            <div className="countdown-days">
                                <div className="number" />
                            </div>
                            <p>Days</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-hours">
                                <div className="number" />
                            </div>
                            <p>Hours</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-minutes">
                                <div className="number" />
                            </div>
                            <p>Minutes</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-seconds">
                                <div className="number" />
                            </div>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <form action="#">
                        <div className="aximo-coming-newsletter wow fadeInUpX" data-wow-delay="0.1s">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit" id="aximo-notified-btn">Get Notified</button>
                            <p>We do not share your information with any third party &amp; no spam*</p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer  */}
            <footer className="aximo-footer-section dark-bg">
                <div className="container">
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
                                <div className="aximo-copywright">
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

export default Comingsoon