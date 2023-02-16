import React from "react";

import ComponentsCSS from "../Components.module.css";

const About = () => {
    return (
        <section className={ComponentsCSS["about-us"]}>
            <div className={ComponentsCSS["row"]}>
                <div className={ComponentsCSS["about-col"]}>
                    <h1>We are 1</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum incidunt minima consequuntur
                        itaque earum maxime voluptatem, mollitia distinctio quaerat eveniet ad vero quod numquam
                        accusantium temporibus. Nemo velit aut quo.
                    </p>
                    <div className={`${ComponentsCSS["hero-btn"]} ${ComponentsCSS["red-btn"]}`}>EXPLORE</div>
                </div>
                <div className={ComponentsCSS["about-col"]}>
                    <img
                        src="https://media.istockphoto.com/id/654106834/photo/badminton-mixed-doubles.jpg?s=612x612&w=0&k=20&c=M2Unv8wit1nfOriRvgSiJQS9UcQYM9K-1773ogNmR8Q="
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
