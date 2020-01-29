import { Link } from "gatsby"
import React from "react";
import Logo from "../images/sos-phoenix.png";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <nav className="navbar d-flex flex-column text-center">
    <Link to="/"><img id="sos-logo" alt="SOS-NYS Logo" src={Logo}/></Link>
    <h1>SOS-NYS</h1>
    <h3>Secular Organizations for Sobriety / "Save OurSelves"</h3>
  </nav>
)

export default Header
