import React from "react";

import ComponentsCSS from "../Components.module.css";

const Testimonials = () => {
    return (
        <>
            <section className={ComponentsCSS["testimonials"]}>
                <h1>What Our Players Say:</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nam illum fugiat cum ipsa, possimus
                    consequatur, eveniet atque est necessitatibus, ea placeat nesciunt illo. Veritatis aspernatur odit
                    cumque quia iusto?
                </p>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["testimonials-col"]}>
                        <img
                            src="https://api.time.com/wp-content/uploads/2021/05/Cruella-GlennClose-EmmaStone-2.jpg"
                            alt="user1.jpg"
                        ></img>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita molestiae accusamus,
                                sapiente aperiam voluptatem incidunt quia blanditiis corporis, quisquam, fugit rem
                                maxime. Cumque commodi quo atque laudantium minima corrupti quae!
                            </p>
                            <h3>Cruella deVille</h3>
                            <div className={ComponentsCSS["icons"]}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                        </div>
                    </div>

                    <div className={ComponentsCSS["testimonials-col"]}>
                        <img
                            src="https://c.ndtvimg.com/gws/ms/10-actors-to-have-played-sherlock-holmes/assets/20.jpeg?1667977918"
                            alt="user2.jpg"
                        ></img>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita molestiae accusamus,
                                sapiente aperiam voluptatem incidunt quia blanditiis corporis, quisquam, fugit rem
                                maxime. Cumque commodi quo atque laudantium minima corrupti quae!
                            </p>
                            <h3>Sherlock Holmes</h3>
                            <div className={ComponentsCSS["icons"]}>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
