import React from "react";
import "./aboutus.css";


const AboutUs = () => {
  return (
    <div>
      <div className="text-secondary p-2 ">
        
          <div className="titleabout fw-bold text-center">
            <h2>
              About RITAHian<b>Book Store  APP</b>
            </h2>
          </div>
          </div>
            <div className="about mx-auto">
              <div className="about-item">
                <h4 className="mx-3">RITAHian Mission</h4>
                <p className="mx-auto pt-5">We are committed to inform and inspire, and help people create a better, more equal future.  </p>
              </div>
              <div className="about-item">
                <h4 className="mx-3">RITAHian Vision</h4>
                <p className="mx-auto pt-5">To curate memorable, community-based experiences, leveraging all the treasures of literature, for the intellectually curious, passionately creative, and socially engaged.</p>
              
              </div>
              <div className="about-item">
                <h4 className="mx-3">Follow us on</h4>
                <section className="mx-auto" >
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/peter-rezik-a84408123/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/PeterRizek009" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
              </div>

              <div className="about-item">
                <h4 className="mx-3">Location</h4>
                <p>We are located at MUkono and we run as a single standalone entity</p>
              </div>
            </div>
        </div>


  
  );
}


export default AboutUs;
