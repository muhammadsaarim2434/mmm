import React, { useEffect } from 'react';
import imageone from '../assets/image1.jpg'
import imagetwo from '../assets/image2.jpg'
import imagethree from '../assets/image3.jpg'
import imagefour from '../assets/image4.jpg'
import { Link } from 'react-router-dom';

const Herosection = () => {
        useEffect(() => {
          const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const currentScrollPos = window.pageYOffset;
      
            if (currentScrollPos > 0) {
              navbar.style.backgroundColor = '#333';
            } else {
              navbar.style.backgroundColor = 'transparent';
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        return (
            <>
            {/*--------------------------navbar-------------------------------*/}
            <section>
              <nav
                id="navbar"
                className="navbar navbar-expand-lg navbar-light fixed-top"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="container">
                  <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="logo" width="100%" height="90vh" />
                  </Link>
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link
                          className="nav-link ms-3"
                          aria-current="page"
                          to="/about"
                        >
                          <p>About Us</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ms-3" to="/athelete">
                          <p>Atheletes</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ms-3" to="/connect">
                          <p>Connect</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ms-3" to="/news">
                          <p>News/Blogs</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ms-3" to="/event">
                          <p>Events</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ms-3" to="/shop">
                          <p>Shop</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={imageone}
                      className="d-block w-100 height-100vh"
                      alt="Image 1"
                    />
                    <div className="carousel-caption">
                      <h5
                        className="animated animate__bounceIn"
                        style={{ animationDelay: "0.5s" }}
                      >
                        Welcome to Spark MMA Management!
                      </h5>
                      <p>
                        Spark started out with a hand full of clients and later flourished
                        into one of the top MMA management companies in the fight game.{" "}
                      </p>
                      <a href="#aboutsection">
                        <button
                          className="animated animate__bounceIn"
                          style={{ animationDelay: "0.5s" }}
                        >
                          About Us
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={imagetwo}
                      className="d-block w-100"
                      alt="Image 2"
                    />
                    <div className="carousel-caption">
                      <h5
                        className="animated animate__bounceIn"
                        style={{ animationDelay: "0.5s" }}
                      >
                        Welcome to Spark MMA Management!
                      </h5>
                      <p>
                        Spark started out with a hand full of clients and later flourished
                        into one of the top MMA management companies in the fight game.{" "}
                      </p>
                      <a href="#aboutsection">
                        <button
                          className="animated animate__bounceIn"
                          style={{ animationDelay: "0.5s" }}
                        >
                          About Us
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={imagethree}
                      className="d-block w-100"
                      alt="Image 3"
                    />
                    <div className="carousel-caption">
                      <h5
                        className="animated animate__bounceIn"
                        style={{ animationDelay: "0.5s" }}
                      >
                        Welcome to Spark MMA Management!
                      </h5>
                      <p>
                        Spark started out with a hand full of clients and later flourished
                        into one of the top MMA management companies in the fight game.{" "}
                      </p>
                      <a href="#aboutsection">
                        <button
                          className="animated animate__bounceIn"
                          style={{ animationDelay: "0.5s" }}
                        >
                          About Us
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={imagefour}
                      className="d-block w-100"
                      alt="Image 3"
                    />
                    <div className="carousel-caption">
                      <h5
                        className="animated animate__bounceIn"
                        style={{ animationDelay: "0.5s" }}
                      >
                        Welcome to Spark MMA Management!
                      </h5>
                      <p>
                        Spark started out with a hand full of clients and later flourished
                        into one of the top MMA management companies in the fight game.{" "}
                      </p>
                      <a href="#aboutsection">
                        <button
                          className="animated animate__bounceIn"
                          style={{ animationDelay: "0.5s" }}
                        >
                          About Us
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
          
        );
      };
export default Herosection