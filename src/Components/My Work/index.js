import {Component} from 'react'

import ProjectItem from './ProjectItem'
import TabItem from './TabItem'
import "./index.css"



const tabsList = [
    {tabId: 'MAIN', displayText: 'Main Work'},
    {tabId: 'RESPONSIVE', displayText: 'Responsive'},
    {tabId: 'STATIC', displayText: 'Static'},
  ]
  
  const projectsList = [
    {
      projectId: 0,
      category: 'MAIN',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474799/Jobby_l0wnie.png',
      title: 'Jobby App',
      description:
        'Developed "Jobby," an advanced job search platform with a mobile-first UI, secure JWT-based authentication, personalized job recommendations, and real-time feedback mechanisms for enhanced user experience and efficiency.',
      link:'https://jobby822.ccbp.tech/',
      githubLink:'https://github.com/PrasanthElangovan/JobApp',
      tech: ['React JS','JS','CSS','JWT','API','Routing',],
    },
    {
      projectId: 1,
      category: 'MAIN',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474800/nxtTrendz_sdkd7g.png',
      title: 'Nxt Trendz',
      description:
        'Developed "NxtTrendz," an e-commerce platform replicating the functionalities of industry leaders, featuring a responsive user interface, secure JWT-based authentication, efficient routing, and optimized database management. Implemented server-side logic and API integrations to ensure smooth data flow and application functionality.',
      link:'https://nxttrend82.ccbp.tech/',
      githubLink:'https://github.com/PrasanthElangovan/NxtTrends',
      tech: ['React JS','JS','CSS','JWT','API','Routing'],
    },
    {
      projectId: 2,
      category: 'MAIN',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474804/nxtwatch_se7dvj.png',
      title: 'NxtWatch',
      description:
        'Led the development of "NxtWatch," a YouTube clone featuring a seamless user interface, secure authentication with JWT, sophisticated video categorization, dynamic recommendations, and efficient routing.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'https://github.com/PrasanthElangovan/Nxtwatch',
      tech: ['React JS','JS','CSS','JWT','API','Routing'],
    },
    {
      projectId: 4,
      category: 'RESPONSIVE',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720472230/Screenshot_2024-07-09_015839_p1ydh5.png',
      title: 'Food Munch',
      description:
        'VR Website enables users to explore AR and VR Products and Industry happenings.',
      link:'https://foodmunch822.ccbp.tech/',
      githubLink:'',
      tech: ['HTML','CSS','Bootstrap'],
    },
    {
      projectId: 5,
      category: 'RESPONSIVE',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474800/nxtTrendz_sdkd7g.png',
      title: 'Food Munch',
      description: 'Food Much Website is a user-centric food tech website.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['React','HTML','CSS','JS'],
    },
    {
      projectId: 6,
      category: 'RESPONSIVE',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474804/nxtwatch_se7dvj.png',
      title: 'Portfolio',
      description:
        'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['React','HTML','CSS','JS'],
    },
  
    {
      projectId: 8,
      category: 'STATIC',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720472230/Screenshot_2024-07-09_015839_p1ydh5.png',
      title: 'Speed Typing Test',
      description:
        'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['Bootstrap','HTML','CSS'],
    },
    {
      projectId: 9,
      category: 'STATIC',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720473600/yoga_ck2hup.png',
      title: 'Random Joke Page',
      description:
        'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['Bootstrap','HTML','CSS'],
    },
    {
      projectId: 10,
      category: 'STATIC',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720474309/flatpage_yx2z2m.png',
      title: 'Sizing An Image',
      description:
        'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['Bootstrap','HTML','CSS'],
    },
  ]
  
  class Work extends Component {
    state = {
      activeTabId: tabsList[0].tabId,
    }
  
    updateActiveTabId = tabId => {
      this.setState({activeTabId: tabId})
    }
  
    getFilteredProject = () => {
      const {activeTabId} = this.state
      const filteredProjectsList = projectsList.filter(
        eachProjectDetails => eachProjectDetails.category === activeTabId,
      )
      return filteredProjectsList
    }
  
    render() {
      const filteredProjectsList = this.getFilteredProject()
      const {activeTabId} = this.state
      return (
        <div data-aos="fade-up" data-aos-duration="2000" className="about section container" id='projects'>
          <h1 className="section__title">My Work</h1>
          <p className="section__subtitle">
            Your skills and achievements showcase your strengths and abilities.
            Speak about any new skills or software you learnt to perform the
            project responsibilities.
          </p>
  
          <ul className="tabs-container">
            {tabsList.map(tabDetails => (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                updateActiveTabId={this.updateActiveTabId}
                isActive={activeTabId === tabDetails.tabId}
              />
            ))}
          </ul>
  
          
            {filteredProjectsList.map(projectDetails => (
              <ProjectItem
                key={projectDetails.projectId}
                projectDetails={projectDetails}
              />
            ))}
          
        </div>
      )
    }
  }
  
  export default Work