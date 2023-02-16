import React from "react";

import ComponentsCSS from "../Components.module.css";

const Facilities = () => {
    return (
        <>
            <section className={ComponentsCSS["facilities"]}>
                <h1>Our Programme</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img
                            src="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                            alt="library.png"
                        ></img>
                        <h3>Learn</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img
                            src="https://images.unsplash.com/photo-1525518936950-b26ba153a5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxiYXNrZXRiYWxsJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            alt="basketball.png"
                        ></img>
                        <h3>Play</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXRlcmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            alt="cafeteria.png"
                        ></img>
                        <h3>Have Fun</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Facilities;
