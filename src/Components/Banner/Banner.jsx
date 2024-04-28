// Banner.jsx
import './Banner.css';
import Video from "../assets/espacio.mp4";
import Navbar from '../NavBar/NavBar'; // Importa el componente Navbar

function Banner() {
  return (
    <div className="banner-container">
      <Navbar /> {/* Coloca el Navbar dentro del contenedor del Banner */}
      <video autoPlay loop muted className="banner-video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div> {/* Fondo negro o semitransparente */}
      <h1 className="banner-text">Welcome to Space!</h1>
    </div>
  );
}

export default Banner;


