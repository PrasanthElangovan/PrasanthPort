import React from "react";

import "./index.css";

import AboutImg from "../../Assets/prasanth.jpg";


import Info from "./Info";

const About = () => {
  return (
    <section data-aos="fade-up" className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img data-aos="fade-right" data-aos-duration="1000" src={AboutImg} alt="PrasanthProfile" className="about__img" />
        <div data-aos="fade-left" data-aos-duration="1000" className="about__data">
          <Info />
          <p className="about__description">
          As a newly certified front-end developer with training in full-stack development, I am
eager to apply my technical skills in HTML, CSS, JavaScript, and React to create
responsive and engaging user interfaces. With a solid understanding of both frontend and back-end frameworks, I aim to contribute to a dynamic team by utilizing
modern development practices and a strong commitment to collaborative problemsolving.
          </p>
          <a download="" href="https://drive.google.com/file/d/1uGrdFYWrOkcmyqyoUWvcAHCgEjaW7txN/view?usp=sharing" className="button button--flex">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
