import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box about_bg1">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title"> Experience</h3>
        <span className="about__subtitle">Fresher</span>
      </div>
      <div className="about__box about_bg2">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle"> 3+ Main Projects</span>
      </div>
      <div className="about__box about_bg3">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Mini Projects</span>
      </div>
    </div>
  );
};

export default Info;
