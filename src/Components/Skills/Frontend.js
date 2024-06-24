import React from 'react'

const Frontend = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className='skills__content'>
            <h3 className='skills__title'>Frontend Developer</h3>

            <div className='skills__box'>
                <div className='skills_group'>

                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>HTML</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>CSS</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>JavaScript</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
                </div>
                <div className='skills_group'>
                    
                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Libraries and FrameWorks</h3>
                            <span className='skills__level'>React</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Version Control</h3>
                            <span className='skills__level'>Git, GitHub</span>
                        </div>
                    </div>
                    <div className='skills_data'>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Package Manager</h3>
                            <span className='skills__level'>npm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Frontend