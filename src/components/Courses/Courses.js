import React from "react";

import ComponentsCSS from "../Components.module.css";

const Courses = () => {
    return (
        <>
            <section className={ComponentsCSS["courses"]}>
                <h1>Training Groups</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio deserunt illum. Deserunt
                    placeat cumque corrupti rem ad perferendis! Fugiat minima laboriosam voluptatum repudiandae! Autem
                    laborum enim modi quas earum!
                </p>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Beginners</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Advanced Players</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Professional Athletes</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
