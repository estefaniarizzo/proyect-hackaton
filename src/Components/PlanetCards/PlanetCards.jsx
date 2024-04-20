// PlanetCards.jsx

import './PlanetCards.css';
import fondo from '../assets/banner.jpeg'
function PlanetCards() {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <img src={fondo} alt="Planet 1" className="card-img" />
        <div className="card-content">
          <h2 className="card-title">Planeta 1</h2>
          <p className="card-description">Descripción del planeta 1...</p>
        </div>
      </div>
      <div className="card">
        <img src={fondo} alt="Planet 1" className="card-img" />
        <div className="card-content">
          <h2 className="card-title">Planeta 1</h2>
          <p className="card-description">Descripción del planeta 1...</p>
        </div>
      </div>
      <div className="card">
        <img src={fondo} alt="Planet 1" className="card-img" />
        <div className="card-content">
          <h2 className="card-title">Planeta 1</h2>
          <p className="card-description">Descripción del planeta 1...</p>
        </div>
      </div>
    </div>
    <div className="card-container">
    <div className="card">
      <img src={fondo} alt="Planet 1" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Planeta 1</h2>
        <p className="card-description">Descripción del planeta 1...</p>
      </div>
    </div>
    <div className="card">
      <img src={fondo} alt="Planet 1" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Planeta 1</h2>
        <p className="card-description">Descripción del planeta 1...</p>
      </div>
    </div>
    <div className="card">
      <img src={fondo} alt="Planet 1" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Planeta 1</h2>
        <p className="card-description">Descripción del planeta 1...</p>
      </div>
    </div>
  </div>
  </>
  );
}

export default PlanetCards;
