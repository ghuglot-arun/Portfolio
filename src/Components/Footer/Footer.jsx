import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h2>Arun Ghuglot</h2>
                <p>Thanks for visiting my portfolio. Let’s connect and build something awesome together!</p>
                <div className="footer-socials">
                    <a href="https://github.com/ghuglot-arun" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/arunghuglot04" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <hr />
            <p className="footer-copy">© {new Date().getFullYear()} Arun Ghuglot. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
