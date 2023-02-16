import React from "react";

import ComponentsCSS from "../Components.module.css";

const CallToAction = ({ subpageHandler }) => {
    return (
        <>
            <section className={ComponentsCSS["cta"]}>
                <h1>
                    Enroll for our exciting training courses today!
                    <br />
                    Find us in Stara Zagora
                </h1>
                <div className={ComponentsCSS["hero-btn"]} onClick={() => subpageHandler("CONTACT")}>
                    CONTACT US
                </div>
            </section>
        </>
    );
};

export default CallToAction;
