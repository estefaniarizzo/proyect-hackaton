import { useState, useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import { Fade, Bounce } from 'react-reveal';
import Loader from '../Loader/Loder'; // Importa el componente Loader
import './Contact.css'; // Archivo de estilos CSS

function Contact() {
    const [isLoading, setIsLoading] = useState(true); // Estado local para controlar la visibilidad del loader

    useEffect(() => {
        // Simula una carga asincrónica
        const timer = setTimeout(() => {
            setIsLoading(false); // Cambia el estado del loader a falso después de un tiempo de espera (simulando que la carga ha finalizado)
        }, 2000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <>
            {isLoading && <Loader />} {/* Muestra el loader solo cuando isLoading es verdadero */}
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
            </div>
        </>
    );
}

export default Contact;
