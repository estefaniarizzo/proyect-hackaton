// Banner.jsx

import './Banner.css';
import Video from "../assets/espacio.mp4";

function Banner() {
  return (
    <div className="banner-container">
      <div className="overlay"></div> {/* Fondo negro o semitransparente */}
      <video autoPlay loop muted className="banner-video">
        <source src={Video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <h1 className="banner-text">Welcome to Space!</h1>
    </div>
  );
}

export default Banner;

