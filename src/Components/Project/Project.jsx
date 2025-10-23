import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

const ProjectSection = () => {
    return (
        <div id='project' className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>

            <div className="projects-grid">
                <div className="project-card">
                    <img src={ project2 } alt="Car Rental App" />
                    <h2>Car Rental App</h2>
                    <p>Full-stack Car Rental app with user auth, add/edit/delete, built with React, Node.js & MongoDB.</p>
                    <div className="project-links">
                        <a href="https://github.com/ghuglot-arun/Car_Rental" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <img src={project3} alt="Job Portal API" />
                    <h2>Job Portal API</h2>
                    <p>RESTful API for managing jobs, users, roles and authentication using Express & JWT.</p>
                    <div className="project-links">
                        <a href="https://github.com/your-username/job-portal-api" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <img src={project1} alt="Real Estate" />
                    <h2>Real Estate</h2>
                    <p>A responsive real-estate front-end web app showcasing property listings, filtering, and modern UI using React</p>
                    <div className="project-links">
                        <a href="https://github.com/ghuglot-arun/RealEstate" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://your-live-link.com" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </div>

                <div className="project-card">
                    <img src={project3} alt="Hotel booking app" />
                    <h2>Hotel Booking App</h2>
                    <p>A responsive Hotel Booking front-end web app showcasing Hotel listings, filtering, and modern UI using React and secure google Login/Register</p>
                    <div className="project-links">
                        <a href="https://github.com/ghuglot-arun/Hotel-booking-frontend" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://hotel-booking-frontend-puce.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;
