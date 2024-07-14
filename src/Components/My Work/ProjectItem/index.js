
import React from 'react';
import PropTypes from 'prop-types';

import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageUrl, description, title, link, tech} = projectDetails
  const isOdd = projectId % 2 === 0;

    return (
        <section data-aos="fade-right" data-aos-duration="1000" className="project-section">
            <div className="project__container">
                <div className={`project__content ${isOdd ? 'odd' : 'even'}`}>
                    <div className="project__image">
                        <a href={link} target='_blank' rel="noreferrer"><img src={imageUrl} alt={`title ${projectId}`} /></a>
                    </div>
                    <div className="project__text-box">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className='row-list-container'>
                            <ul className="row-list">
                                {tech.map((tec, index) => (
                                <li key={`${projectId}-${index}`}>- {tec}</li>
                                ))}
                            </ul>
                        </div>
                        <div  className="media-icons">
                            <a  href="https://github.com/PrasanthElangovan/JobApp"  className="icon link__bg1"><i className="uil uil-github-alt"></i></a>
                        </div>
                    </div>
                </div>
                <hr className='linethrough'/>
            </div>
            
        </section>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default ProjectItem;

