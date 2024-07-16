import {Component} from 'react'

import ProjectItem from './ProjectItem'
import TabItem from './TabItem'
import "./index.css"



const tabsList = [
    {tabId: 'MAIN', displayText: 'Main Work'},
    {tabId: 'RESPONSIVE', displayText: 'Responsive'},
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
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1721130463/money_manager_f9kvir.png',
      title: 'Money Manager',
      description:
        'Developed a Money Manager App using React.js, enabling users to track income, expenses, and balance with dynamic updates. Implemented functionality for adding and deleting transactions, ensuring real-time calculation of financial summaries. Utilized responsive design principles and React state management for a seamless user experience.',
      link:'https://moneymanger822.ccbp.tech/',
      githubLink:'https://github.com/PrasanthElangovan/moneymanager',
      tech: ['HTML','CSS','Reactjs','Javascript'],
    },
    {
      projectId: 5,
      category: 'RESPONSIVE',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1721134053/IPL_vhnhwc.png',
      title: 'IPL DashBoard',
      description: 'Developed an IPL Dashboard App using React.js, incorporating RESTful API calls to display team details and recent match information. Implemented responsive design with custom CSS and used React Router for seamless navigation. Enhanced user experience by integrating animated loaders and dynamic content updates.',
      link:'https://ipldashboard822.ccbp.tech/',
      githubLink:'https://github.com/PrasanthElangovan/IPL',
      tech: ['React','HTML','CSS','JS','Reactjs'],
    },
    {
      projectId: 6,
      category: 'RESPONSIVE',
      imageUrl: 'https://res.cloudinary.com/dmzv0pa0g/image/upload/v1720472230/Screenshot_2024-07-09_015839_p1ydh5.png',
      title: 'Food Munch',
      description:
        'Food Munch is a responsive web project that showcases a variety of delicious food options. It features a sleek, modern design with sections highlighting why to choose us, menu exploration, delivery and payment options, and customer appreciation. The project includes interactive elements like modals, buttons, and smooth navigation. Built with Bootstrap, it ensures a seamless user experience across devices.',
      link:'https://nxtwatch822.ccbp.tech/',
      githubLink:'',
      tech: ['HTML','CSS','JS','Bootstrap'],
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
          I have developed a diverse range of web applications using React.js, focusing on dynamic content, user authentication, and responsive design. My projects include platforms for job searching, e-commerce, video streaming, food delivery, sports dashboards, and financial management. These projects demonstrate my proficiency in modern web development techniques, including REST API integration, state management, and responsive UI design.
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