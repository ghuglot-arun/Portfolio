import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about_sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about_right">
                    <div className="about-para">
                        <p>Hello! I'm Arun Ghuglot, a passionate Full Stack Developer.</p>
                        <p>I enjoy working with both frontend and backend technologies — from designing clean user interfaces with React to building powerful backend systems with Node.js and MongoDB. I like solving real-world problems through code and turning ideas into working apps.
                        Let’s connect and build something awesome together!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p> Javascript & React Js</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Node Js & Express Js</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Mongo DB</p><hr style={{width:"60%"}} /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;