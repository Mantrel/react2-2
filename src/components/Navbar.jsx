import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="barra">
    
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
     
    </nav>
  )
}

export default Navbar;


    
