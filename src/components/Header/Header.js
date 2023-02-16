import React, { useState } from "react";

import ComponentsCSS from "../Components.module.css";

import Mission from "./Mission";
import Welcome from "./Welcome";

const Header = ({ subpageHandler }) => {
    let [mission, setMission] = useState(null);

    // console.log("mission:", mission);

    // let showMissionStatement = false;

    function handleMissionStatement() {
        console.log("CLICK!");
        if (mission) {
            setMission(false);
        } else {
            setMission(true);
        }
    }

    return (
        <>
            <section className={ComponentsCSS["header"]}>
                <nav>
                    <div className={ComponentsCSS["logo"]}>
                        <img src="https://cdn-icons-png.flaticon.com/512/8952/8952532.png" alt="logo" />
                        <p>Atlas Badminton SC - Stara Zagora</p>
                    </div>
                    <div id="navLinks" className={ComponentsCSS["nav-links"]}>
                        <i className={`${ComponentsCSS["mobile-only"]} fa fa-times`}></i>
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
                    <div className={ComponentsCSS["mobile-menu-btn"]}>
                        <i className={`${ComponentsCSS["mobile-only"]} fa fa-bars`}></i>
                    </div>
                </nav>

                {!mission && <Welcome handleMissionStatement={handleMissionStatement} />}
                {mission && <Mission handleMissionStatement={handleMissionStatement} />}
            </section>
        </>
    );
};

export default Header;
