import React,{useState} from "react";
import { Link } from "gatsby";

const Header = () =>{ 
  const [showMenu, showMenuSet]= useState(false);
   const handleClick=()=> {
    showMenuSet(!showMenu)
    }
    if(!showMenu){
return (
  <header>
    <div className="menu-btn" onClick={handleClick}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>

    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about/" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/work/" className="nav-link">
            My Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/" className="nav-link">
            How To Reach Me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
}else {
  return (
    <header>
    <div className="menu-btn close" onClick={handleClick}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>

    <nav className="menu show">
      <div className="menu-branding show">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav show">
        <li className="nav-item current show">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item show">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item show">
          <Link to="/work" className="nav-link">
            My Work
          </Link>
        </li>
        <li className="nav-item show">
          <Link to="/contact" className="nav-link">
            How To Reach Me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}
  
}

export default Header;
