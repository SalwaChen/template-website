import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.scss";

function SocialIcons(c) {
  return (
    <div>
      <ul className="social-menu">
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-cont"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`faIcons ${c.className}`}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-cont"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className={`faIcons ${c.className}`}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-cont"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className={`faIcons ${c.className}`}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SocialIcons;
