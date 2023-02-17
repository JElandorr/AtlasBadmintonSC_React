import React from "react";
import { useState, useEffect } from "react";

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

    let flagIsHome = false;
    let flagIsCourses = false;
    let flagIsBlog = false;
    let flagIsAbout = false;
    let flagIsContact = false;

    const subpage = {
        courses: "Our Courses",
        blog: "News, Events and Competitions",
        about: "About Us",
        contact: "Contact Us",
    };

    function subpageHandler(current) {
        setCurrentPage(current);
        setSubPageData({ name: current.toLowerCase(), inscr: subpage[current.toLowerCase()] });
        subPageData.inscr = subPageData[current];
    }

    if (currentPage === "HOME") {
        flagIsHome = true;
    }
    if (currentPage === "COURSES") {
        flagIsCourses = true;
    }
    if (currentPage === "BLOG") {
        flagIsBlog = true;
    }
    if (currentPage === "ABOUT") {
        flagIsAbout = true;
    }
    if (currentPage === "CONTACT") {
        flagIsContact = true;
    }

    useEffect(() => {
        if (!currentPage) {
            setCurrentPage("HOME");
        }
    }, []);

    return (
        <>
            {flagIsHome && (
                <>
                    <Header subpageHandler={subpageHandler} />
                    <Courses />
                    <Campus />
                    <Facilities />
                    <Testimonials />
                    <CallToAction subpageHandler={subpageHandler} />
                    <Footer />
                </>
            )}
            {flagIsCourses && (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />
                    <Courses />
                    <Campus />
                    <Facilities />
                    <Testimonials />
                    <CallToAction subpageHandler={subpageHandler} />
                    <Footer />
                </>
            )}
            {flagIsBlog && (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />
                    <Blog />
                    <Footer />
                </>
            )}
            {flagIsAbout && (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />

                    <About />
                    <Footer />
                </>
            )}
            {flagIsContact && (
                <>
                    <SubHeader subpageHandler={subpageHandler} subPageData={subPageData} />

                    <ContactUs />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Main;
