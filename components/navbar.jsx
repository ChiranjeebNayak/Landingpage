import React from "react";
import styles from "../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <>
      <div className="container-fluid bg-black">
       
          <div className="navbar">
            <div className="logo text-light mx-3 ">
              Glint<span className="text-success">.</span>
            </div>
            <div id="mySidepanel" className="sidepanel">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={closeNav}
              >
                ×
              </a>
              <p className={styles.navigation}>NAVIGATION</p>
              <div className={styles.navitems}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#service">Services</a>
              <a href="#works">Works</a>
              <a href="#client">Client</a>
              <a href="#contact">Contact</a>
              </div>
              <p className="mx-2">
                Perspiciatis hic praesentium nesciunt. Et neque a dolorum
                voluptatem porro iusto sequi veritatis libero enim. Iusto id
                suscipit veritatis neque reprehenderit.
              </p>
              <div className="mt-5 mx-2 mb-5">
                            <FontAwesomeIcon className={styles.icon} icon={faFacebook}/>
                            <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
                            <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
                            <FontAwesomeIcon className={styles.icon} icon={faDribbble}/>
              </div>
            </div>
            <div className="toggle ml-auto">
              <span className="text-uppercase text-success">M e n u</span>
              <button className="openbtn " onClick={openNav}>
                ☰
              </button>
            </div>
          </div>
       
      </div>
    </>
  );
}

export default Navbar;
