import './Contact.css'
import { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Contact = () => {

 const [status, setStatus] = useState("Send");
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus("Sending...");
 
     const form = new FormData(e.target);
 
     const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
       method: "POST",
       body: form,
       headers: {
         Accept: "application/json",
       },
     });
 
     if (res.ok) {
       setStatus("Sent!");
       e.target.reset();
     } else {
       setStatus("Failed. Try again");
     }
   };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="underline" />
            </div>

            <div className="contact-content">
                <div className="contact-left">
                    <h2>Let’s work together!</h2>
                    <p>If you have a project in mind, a question, or just want to say hi, feel free to reach out. I’m always open to chat about exciting opportunities!</p>
                    

                    <div className="contact-links">
                        <a href="https://github.com/ghuglot-arun" target="_blank" rel="noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/arunghuglot04/" target="_blank" rel="noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>

                <form  onSubmit={handleSubmit} className="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
  <button type="submit">{status}</button>
</form>

            </div>
        </div>
    )
}

export default Contact;
 