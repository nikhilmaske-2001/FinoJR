import React from "react";

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
                    <li class="normal-link"><a class="nav-link" href="/">HOME</a></li>
                    <li class="normal-link"><a class="nav-link" href="/compare">Compare</a></li>
                    <li class="normal-link"><a class="nav-link" href="#services">SERVICES</a></li>
                    <li class="normal-link"><a class="nav-link" href="#projects">REGISTER</a></li>
                    <li class="normal-link"><a class="nav-link" href="#contact">CONTACT US</a></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  );
};

export default Navbar;
