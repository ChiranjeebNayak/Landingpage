import React from "react";
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
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
              <p>
                Perspiciatis hic praesentium nesciunt. Et neque a dolorum
                voluptatem porro iusto sequi veritatis libero enim. Iusto id
                suscipit veritatis neque reprehenderit.
              </p>
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
