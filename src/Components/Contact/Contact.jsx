import Navbar from '../NavBar/NavBar';
import { Fade, Bounce } from 'react-reveal';
import './Contact.css'; // Archivo de estilos CSS

function Contact() {
    return ( 
    <>
    <Navbar />
    <div className="contact-container">

        <div className="contact-content">
            <Fade bottom>
                <h2>Contact Us</h2>
            </Fade>
            <div className="contact-form">
                <Fade left>
                    <input type="text" placeholder="Your Name" />
                </Fade>
                <Fade right>
                    <input type="email" placeholder="Your Email" />
                </Fade>
                <Fade bottom>
                    <textarea placeholder="Your Message"></textarea>
                </Fade>
                <Bounce>
                    <button>Send Message</button>
                </Bounce>
            </div>
        </div>
    </div></>
    );
}

export default Contact;