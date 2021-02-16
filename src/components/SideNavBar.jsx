import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.PNG"

export default function SideNavBar() {
    return (
        <div className="col-lg-3 app_sidebar text-center text-white bg-dark">
          {/* <img src={avatar} class="rounded img-thumbnail m-1" alt="Responsive image"></img> */}
          <img src={avatar} class="img-fluid rounded m-3" width="200px" height="200px" alt="Responsive image"></img>
          <h1>Madhankumar Chellamuthu</h1>
          <h4>Software Engineer</h4>
          
          <button type="button" class="btn btn-primary btn-block m-2">Download Resume</button>

          <div className="row">
              <div className="col-12 text-center">
              <div>
              <a href="https://github.com/Madhan-SWE">
                <i class="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/madhankumar-chellamuthu-4b294711b/">
              <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:rcmadhankumar@gmail.com">
                  <i class="fas fa-envelope-square"></i>
              </a>
              </div>
              <div>
              <i class="fas fa-phone-alt"></i> +91-8110805088 <br />
              <i class="fas fa-envelope"></i> rcmadhankumar@gmail.com <br />
              <i class="fas fa-map-marker-alt"></i> Bangalore, India <br />
              </div>
              
              </div>
          </div>
        </div>
    )
}
