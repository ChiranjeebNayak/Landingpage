import React from 'react'

function Hero() {
  return (
    <div>
      <div className="container-fluid pt-5" style={{background:"black"}}>
        <div className="row text-light mt-5">
          <div className=" col-lg-9 col-sm-12 px-5 mx-5 mt-5">
          <h5 className="text-muted" style={{letterSpacing:"2px"}}>WELCOME TO GLINT</h5>
          <h1 style={{lineHeight:"100px",fontSize:"4rem"}}>
            We are a creative group<br/>
            of people who design<br/>
            influential brands and<br/>
            digital experiences.
          </h1>
          <div className="col mt-5 mb-5">
            <button className="btn mx-2 text-uppercase border" style={{width:"14vw" ,height:"7vh" , color:"black",background:"white" ,fontSize:"1rem",letterSpacing:"2px"}}>Start a project</button>
            <button className="btn mx-2 text-uppercase border" style={{width:"14vw" ,height:"7vh" , color:"white",background:"black" ,fontSize:"1rem",letterSpacing:"2px"}}>Start a project</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
