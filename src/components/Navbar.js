import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
  return(
    <nav>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Contact">Contact</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Aboutus">Aboutus</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      </nav>
  );
}

export default Navbar;
