// NavBar.jsx
import './NavBar.css'; // Importar archivo CSS

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-items">
        <a href="#inicio">Home</a>
        <a href="#acerca-de">About us</a>
        <a href="#contacto">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
