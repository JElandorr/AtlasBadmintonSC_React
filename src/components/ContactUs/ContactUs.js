import React from "react";

import ComponentsCSS from "../Components.module.css";

const ContactUs = () => {
    return (
        <>
            <section className={ComponentsCSS["location"]}>
                <iframe
                    title="contact-form-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47126.32995004854!2d25.58984231196305!3d42.419313184243215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8690b30e83935%3A0x74baed1462879fb1!2z0KHRgtCw0YDQsCDQl9Cw0LPQvtGA0LA!5e0!3m2!1sbg!2sbg!4v1673593556102!5m2!1sbg!2sbg"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section className={ComponentsCSS["contactus"]}>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["contact-col"]}>
                        <div className={ComponentsCSS["icons"]}>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>100 General Gurko Str.</h5>
                                <p>Stara Zagora, 6000, Bulgaria</p>
                            </span>
                        </div>
                        <div className={ComponentsCSS["icons"]}>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>+1 234 567 890</h5>
                                <p>Workdays between 10AM and 6PM</p>
                            </span>
                        </div>
                        <div className={ComponentsCSS["icons"]}>
                            <i className="fa fa-envelope-o"></i>
                            <span>
                                <h5>atlas.bdmntn.sportclub@gmail.com</h5>
                                <p>Feel free to e-mail us</p>
                            </span>
                        </div>
                    </div>
                    <div className={ComponentsCSS["contact-col"]}>
                        <form action="form-handler.php" method="post">
                            <input name="name" type="text" placeholder="Enter your name" rewuired="true" />
                            <input name="email" type="email" placeholder="Enter email address" rewuired="true" />
                            <input name="subject" type="text" placeholder="Enter subject" rewuired="true" />
                            <textarea name="message" rows="8" placeholder="Your message" required></textarea>
                            <button type="submit" className={ComponentsCSS["hero-btn"]}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
