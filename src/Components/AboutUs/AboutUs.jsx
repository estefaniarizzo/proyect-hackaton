
import Navbar from '../NavBar/NavBar';
import { Fade, Slide, Zoom } from 'react-reveal';
import './AboutUs.css'; // Archivo de estilos CSS

function AboutUs() {
    return (
    <>
    <Navbar />
    <div className="about-container">

            <div className="about-content">
                <Fade bottom>
                    <h2>About Us</h2>
                </Fade>
                <div className="about-description">
                    <Slide left>
                        <p>Welcome to our space exploration platform! We are passionate about the wonders of the universe and aim to bring the excitement of space to everyone.</p>
                    </Slide>
                    <Slide right>
                        <p>Our mission is to inspire curiosity, educate, and spark the imagination of people of all ages through captivating images, fascinating facts, and interactive experiences.</p>
                    </Slide>
                </div>
                <div className="about-features">
                    <Zoom>
                        <div className="feature">
                            <h3>Discover</h3>
                            <p>Explore breathtaking images captured by NASA telescopes and spacecraft, revealing the beauty and mysteries of distant planets, stars, and galaxies.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="feature">
                            <h3>Learn</h3>
                            <p>Dive into educational articles and videos that explain the science behind space phenomena, from black holes to the formation of new stars.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="feature">
                            <h3>Interact</h3>
                            <p>Engage with interactive simulations and games that let you experience the challenges and excitement of space exploration firsthand.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div></>
    );
}

export default AboutUs;

