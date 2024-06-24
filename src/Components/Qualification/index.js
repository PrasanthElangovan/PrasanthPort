import React, { useState} from "react";
import "./index.css"

const Qualification = () => {
    const [toggleState, setToggleState]= useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <section data-aos="fade-up" data-aos-duration="1000" className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Certfication
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div data-aos="fade-right" data-aos-duration="1000" className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Meta Frontend</h3>
                                <span className="qualification__subtitle">Meta - Coursera</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2024 - ongoing
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full-stack development</h3>
                                <span className="qualification__subtitle">NxtWave Disruptive Technologies</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022 - ongoing
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Science in Computer Technology</h3>
                                <span className="qualification__subtitle">NGM College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2015 - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HSC</h3>
                                <span className="qualification__subtitle">PKD School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2014 - 2015
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div data-aos="fade-right" data-aos-duration="1000" className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Programming With JavaScript</h3>
                                <span className="qualification__subtitle">Meta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1000" className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HTML and CSS in Depth</h3>
                                <span className="qualification__subtitle">Meta</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2024
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Programming Foundation With Python</h3>
                                <span className="qualification__subtitle">NxtWave</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Qualification