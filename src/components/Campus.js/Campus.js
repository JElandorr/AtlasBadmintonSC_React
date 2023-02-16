import React from "react";

import ComponentsCSS from "../Components.module.css";

const Campus = () => {
    return (
        <>
            <section className={ComponentsCSS["campus"]}>
                <h1>Our Istructors Are The Best In The World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio deserunt illum. Deserunt
                    placeat cumque corrupti rem ad perferendis! Fugiat minima laboriosam voluptatum repudiandae! Autem
                    laborum enim modi quas earum!
                </p>

                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/640px-London_Big_Ben_Phone_box.jpg"
                            alt="London.png"
                        ></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>LONDON</h3>
                        </div>
                    </div>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img
                            src="https://handluggageonly.co.uk/wp-content/uploads/2016/02/HandLuggageOnly-26.jpg"
                            alt="London.png"
                        ></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>NEW YORK</h3>
                        </div>
                    </div>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img
                            src="https://ber.berlin-airport.de/en/news/2022-11-03-washington/_jcr_content/root/stagecontent/portrait.coreimg.jpeg/1667379904632/2022-11-01-washington-header-hoch.jpeg"
                            alt="London.png"
                        ></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>WASHINGTON</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Campus;
