import React from 'react'

const Backend = () => {
    return (
        <div data-aos="fade-left" data-aos-duration="1000" className='skills__content skills__bg2'>
        <h3 className='skills__title'>Backend Developer</h3>

        <div className='skills__box'>
            <div className='skills_group'>

                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__level'>Node.js</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>python</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>FrameWorks</h3>
                        <span className='skills__level'>Express.js</span>
                    </div>
                </div>
            </div>
            <div className='skills_group'>
                
                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>Database</h3>
                        <span className='skills__level'>SQL</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>API</h3>
                        <span className='skills__level'>RESTfull APIs</span>
                    </div>
                </div>
                <div className='skills_data'>
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>Authentication</h3>
                        <span className='skills__level'>JWT</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
}

export default Backend