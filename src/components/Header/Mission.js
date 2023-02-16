import React from "react";

import ComponentsCSS from "../Components.module.css";

const Mission = ({ handleMissionStatement }) => {
    return (
        <div className={ComponentsCSS["text-box"]}>
            <h1>ATLAS Badminton SC - Stara Zagora</h1>
            <h3>Our Mission</h3>
            <ul>
                <li>
                    To promote badminton as a dynamic, healthy and accessible sport for people of all ages, with a focus
                    on encouraging kids and students to get involved in physical activity.
                </li>
                <li>
                    To foster a love for badminton and a commitment to physical fitness among our members, with a goal
                    of helping them live healthy, active lives.
                </li>
                <li>
                    To provide a welcoming and inclusive environment where all kind of people can come together to enjoy
                    the sport and socialize, find friends, have fun.
                </li>
                <li>
                    To contribute to the development of the badminton community in our area by providing high-quality
                    training and instructions, providing solid support to our players and members.
                </li>
                <li>
                    To serve as a positive influence in our community through our commitment to sportsmanship,
                    friendship, inclusivity and healthy living.
                </li>
            </ul>
            <div className={ComponentsCSS["hero-btn"]} onClick={handleMissionStatement}>
                Back To Welcome Screen
            </div>
        </div>
    );
};

export default Mission;
