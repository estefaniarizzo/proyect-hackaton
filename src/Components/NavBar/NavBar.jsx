// NavBar.jsx
import './NavBar.css'; // Importar archivo CSS

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-items">
        <a href="#inicio">Inicio</a>
        <a href="#acerca-de">Acerca de</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
