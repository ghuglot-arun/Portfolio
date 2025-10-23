import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Arun Ghuglot,</span> full stack developer based in India</h1>
            <p>I’m a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I enjoy turning ideas into scalable and efficient digital solutions</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero;