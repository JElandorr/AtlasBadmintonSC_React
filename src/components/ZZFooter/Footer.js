import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import FooterCSS from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <section className={FooterCSS["footer"]}>
                <h4>About Us</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero numquam quibusdam suscipit
                    voluptates laboriosam rerum veniam, <br /> ebitis ullam, provident similique et voluptatum doloribus
                    ut officia. Qui sed non soluta?
                </p>
                <div className={FooterCSS["icons"]}>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100089348267985" target={"_blank"}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/Atlas_BdmntnSC" target={"_blank"}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/atlas_bdmntn_sc/" target={"_blank"}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com" target={"_blank"}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <p>
                    WebCoded by JElandorr
                    <i className={FooterCSS["fa fa-copyright"]}></i>
                </p>
            </section>
        </>
    );
};

export default Footer;
