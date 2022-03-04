import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link id="teamlogo" className="navbar-a" to="/">
        <img src={require("./aktepefc.png")} className="logo" alt="Logo" />
      </Link>

      <Link className="navbar-a" to="/">
        AKTEPE FC
      </Link>

      <Link className="navbar-a" to="/squad">
        SQUAD
      </Link>

      <Link className="navbar-a" to="/records">
        RECORDS
      </Link>

      <Link className="navbar-a" to="/fixture">
        FIXTURE
      </Link>

      <Link className="navbar-a" to="/trophies">
        TROPHIES
      </Link>
    </div>
  );
}

export default Navbar;
