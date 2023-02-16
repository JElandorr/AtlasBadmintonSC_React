import React from "react";

import ComponentsCSS from "../Components.module.css";

const SubHeader = ({ subpageHandler, subPageData }) => {
    if (subPageData.name === "courses") {
        subPageData.name = "shcourses";
    }

    if (subPageData.name === "contact") {
        subPageData.name = "contact_us";
    }

    // console.log("subPageData", subPageData);

    // console.log("ComponentsCSS", ComponentsCSS);

    const sectionClassName = `${ComponentsCSS["sub-header"]} ${ComponentsCSS[`${subPageData.name}`]}`;

    // console.log("sectionClassName", sectionClassName);

    return (
        <section className={sectionClassName}>
            <nav>
                <div className={ComponentsCSS["logo"]}>
                    <div className={ComponentsCSS["logo-script"]} onClick={() => subpageHandler("HOME")}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/8952/8952532.png"
                            alt="logo"
                            width="80px"
                            height="80px"
                        />
                        <p>Atlas Badminton SC - Stara Zagora</p>
                    </div>
                </div>
                <div className={ComponentsCSS["nav-links"]} id="navLinks">
                    <i className={`${ComponentsCSS["mobile-only"]} "fa fa-times"`}></i>
                    <ul>
                        <li>
                            <div onClick={() => subpageHandler("HOME")}>HOME</div>
                        </li>
                        {/* <li>
                                <div>NEWS</div>
                            </li>
                            <li>
                                <div>EVENTS</div>
                            </li> */}
                        <li>
                            <div onClick={() => subpageHandler("COURSES")}>COURSES</div>
                        </li>
                        <li>
                            <div onClick={() => subpageHandler("BLOG")}>BLOG</div>
                        </li>
                        <li>
                            <div onClick={() => subpageHandler("ABOUT")}>ABOUT</div>
                        </li>
                        <li>
                            <div onClick={() => subpageHandler("CONTACT")}>CONTACT</div>
                        </li>
                    </ul>
                </div>
                <i className={`${ComponentsCSS["mobile-only"]} "fa fa-bars"`}></i>
            </nav>
            <h1>{subPageData.inscr}</h1>
        </section>
    );
};

export default SubHeader;
