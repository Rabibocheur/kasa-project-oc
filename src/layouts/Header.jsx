import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo}></img>
        <nav className="header__nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
