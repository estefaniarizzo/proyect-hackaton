// Banner.jsx

import './Banner.css';
import Fondo from "../assets/banner.jpeg";
function Banner() {
  return (
    <div className="banner-container">
      <div className="overlay"></div> {/* Fondo negro o semitransparente */}
      <img src={Fondo} alt="Banner" className="banner-img" />
      <h1 className="banner-text">Bienvenidos al espacio</h1>
    </div>
  );
}

export default Banner;
