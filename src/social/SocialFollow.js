import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faTwitter,
    faGithub,
    // faMedium
  } from "@fortawesome/free-brands-svg-icons";

  import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3 className = "heading">Created by Jason Mamed</h3>
        <a href="https://www.linkedin.com/in/jasonmamed"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/jmamed" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/jasonmamed" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="mailto:mamed.jason@gmail.com" className="mail social">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        {/* <a href="https://medium.com/@anjalisharmaaa" className="medium social">
            <FontAwesomeIcon icon={faMedium} size="2x" />
        </a> */}
    </div>
  );
}