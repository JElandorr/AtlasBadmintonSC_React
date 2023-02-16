import React from "react";

import ComponentsCSS from "../Components.module.css";

const Welcome = ({ handleMissionStatement }) => {
    return (
        <div className={ComponentsCSS["text-box"]}>
            <h1>ATLAS Badminton SC - Stara Zagora</h1>
            <p>{`The Official Website of the ATLAS Badminton Sport Club \n Stara Zagora.`}</p>
            <div className={ComponentsCSS["hero-btn"]} onClick={handleMissionStatement}>
                Click Here To Learn More
            </div>
        </div>
    );
};

export default Welcome;
