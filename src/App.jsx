
import './App.css';
import Home from './Components/Home/Index';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
  
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} /> 
       <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
        
  
  )
}

export default App
