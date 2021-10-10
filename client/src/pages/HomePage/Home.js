import React from "react";
import web from "../images/40450.jpg";

const Home = () => {
  return (
    <>
      <section id="hero" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-4 mt-80">
                  <h1>
                    Kickstart your child's Finance Career with 
                    <strong>Fino Jr.</strong>
                  </h1>
                  <h2 className="my-3">Learn from the best.</h2>
                  <div className="mt-3">
                    <button type="button" class="btn btn-outline-primary">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <img src={web} className="img-fluid"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

