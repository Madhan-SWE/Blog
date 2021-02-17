import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.PNG"

import resume from "../assets/resume.pdf"

export default function SideNavBar() {
    return (
        <div className="col-lg-3 app_sidebar text-center text-white bg-dark">
          {/* <img src={avatar} class="rounded img-thumbnail m-1" alt="Responsive image"></img> */}
          <img src={avatar} class="img-fluid rounded m-3 avatar" width="200px" height="200px" alt="Responsive image"></img>
          <h1>Madhankumar Chellamuthu</h1>
          <h4>Software Engineer</h4>

          <div className="row">
              <div className="col-12 text-center">
              <div>
              <a href="https://github.com/Madhan-SWE">
                <i class="fab fa-github-square app_contact_icon p-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/madhankumar-chellamuthu-4b294711b/">
              <i class="fab fa-linkedin app_contact_icon p-3"></i>
              </a>
              <a href="mailto:rcmadhankumar@gmail.com">
                  <i class="fas fa-envelope-square app_contact_icon p-3"></i>
              </a>
              </div>
              <div>
              <i class="fas fa-phone-alt app_contact pr-3 mb-2"></i><span className="app_contact"> +91-8110805088</span> <br />
              <i class="fas fa-envelope app_contact  pr-3 mb-2"></i> <span className="app_contact"> rcmadhankumar@gmail.com</span> <br />
              <i class="fas fa-map-marker-alt  pr-3 app_contact mb-2"></i> <span className="app_contact">  Bangalore, India </span> <br />
              </div>
              <a href={resume} download="Madhankumar-SoftwareDeveloper-Resume.pdf"><button type="button" class="btn btn-primary btn-block m-2">
          Download Resume
          </button></a>
              </div>
          </div>
        </div>
    )
}
