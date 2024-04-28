
import './NavBar.css'; // Importar archivo CSS
import { Link } from 'react-router-dom';
function Navbar() {
  

  return (
    <>
      
      {/* Menú de navegación */}
      <nav className='nav'>
        <div className="nav-items">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link">About us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
