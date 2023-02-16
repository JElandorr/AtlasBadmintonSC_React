import React from "react";
import { useState } from "react";

import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import About from "./About/About";
import Blog from "./Blog/Blog";
import CallToAction from "./CallToAction/CallToAction";
import Campus from "./Campus.js/Campus";
import Courses from "./Courses/Courses";
import Facilities from "./Facilities.js/Facilities";
import Footer from "./ZZFooter/Footer";
import Testimonials from "./Testimonials/Testimonials";
import ContactUs from "./ContactUs/ContactUs";

// import "./App.css";

const Main = () => {
    let [currentPage, setCurrentPage] = useState("");
    let [subPageData, setSubPageData] = useState({});

    const subpage = {
        about: "About Us",
        blog: "News, Events and Competitions",
        contact: "Contact Us",
        courses: "Our Courses",
    };

    function subpageHandler(current) {
        console.log(current, " is clicked!");

        setCurrentPage(current);
        setSubPageData({ name: current.toLowerCase(), inscr: subpage[current.toLowerCase()] });
        subPageData.inscr = subPageData[current];
    }

    console.log("subPageData", subPageData);

    switch (currentPage) {
        case "COURSES":
            return (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />
                    <Courses />
                    <Campus />
                    <Facilities />
                    <Testimonials />
                    <CallToAction subpageHandler={subpageHandler} />
                    <Footer />
                </>
            );

        case "BLOG":
            return (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />

                    <Blog />
                    <Footer />
                </>
            );

        case "ABOUT":
            return (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />

                    <About />
                    <Footer />
                </>
            );

        case "CONTACT":
            return (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />

                    <ContactUs />
                    <Footer />
                </>
            );
        default:
            return (
                <>
                    <Header subpageHandler={subpageHandler} />
                    <Courses />
                    <Campus />
                    <Facilities />
                    <Testimonials />
                    <CallToAction subpageHandler={subpageHandler} />
                    <Footer />
                </>
            );
    }
};

export default Main;
