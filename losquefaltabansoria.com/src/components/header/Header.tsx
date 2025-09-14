import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
  <header id="inicio" className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">LQF</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">San Juan</a>
      </nav>
    </div>
  </header>  
  );
};

export default Header;
