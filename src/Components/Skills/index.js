import React from 'react'
import "./index.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className='skills section' id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>
            <div className='skills__container container grid'>
                <Frontend/>
                <Backend/>
            </div>
        </section>
        )
}

export default Skills