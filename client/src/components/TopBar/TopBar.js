import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header class="header_area">
        <div class="container">
            <div class="navbar d-flex align-items-center justify-content-between">
                <a href="#" class="logo">
                    <h2>Fino Jr.</h2>
                </a>
                
                <ul class="links">
                    <li class="normal-link"><NavLink class="nav-link" to="/">HOME</NavLink></li>
                    <li class="normal-link"><NavLink class="nav-link" to="/compare">COMPARE</NavLink></li>
                    <li class="normal-link"><NavLink class="nav-link" to="/quiz">QUIZ</NavLink></li>
                    <li class="normal-link"><NavLink class="nav-link" to="/game">GAME</NavLink></li>
                    <li class="normal-link"><NavLink class="nav-link" to="/register">REGISTER</NavLink></li>
                    <li class="normal-link"><NavLink class="nav-link" to="/contact">CONTACT US</NavLink></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  );
};

export default Navbar;
