import React, { useState, useEffect, useRef } from 'react';

// import Countdown from '../Countdown';

function Comingsoon() {


    const deadlineDate = new Date('December 31, 2023 23:59:59').getTime();
    // State to hold the countdown values
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const intervalIdRef = useRef(null);

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = deadlineDate - currentDate;  // Distance to deadline

            const days = Math.floor(Math.abs(distance) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((Math.abs(distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((Math.abs(distance) % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((Math.abs(distance) % (1000 * 60)) / 1000);

            // Update countdown with a negative sign if the deadline is passed
            setCountdown({
                days: distance < 0 ? -days : days,
                hours: distance < 0 ? -hours : hours,
                minutes: distance < 0 ? -minutes : minutes,
                seconds: distance < 0 ? -seconds : seconds,
            });
        }, 1000); // Update every second

        // Cleanup on component unmount
        return () => clearInterval(intervalIdRef.current);
    }, [deadlineDate]);



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
                    <a href="/">
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
                                <div className="number"> {countdown.days} </div>
                            </div>
                            <p>Days</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-hours">
                                <div className="number">{countdown.hours} </div>
                            </div>
                            <p>Hours</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-minutes">
                                <div className="number">{countdown.minutes} </div>
                            </div>
                            <p>Minutes</p>
                        </div>
                        <div className="aximo-countdown-item">
                            <div className="countdown-seconds">
                                <div className="number">{countdown.seconds} </div>
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
                                                <li><a href=" ">(123) 456-7890</a></li>
                                            </ul>
                                        </div>
                                        <div className="aximo-info">
                                            <ul>
                                                <li>Send us an email:</li>
                                                <li><a href=" ">info@mthemeus.com</a></li>
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
                                    <a href='/'>
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

export default Comingsoon