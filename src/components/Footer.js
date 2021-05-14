import React from "react";
import "./Footer.scss";
import SocialIcons from "./SocialIcons";
import { Container } from "reactstrap";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <div className="footer-row">
        <div className="address">
          <span>Find Us</span>
          <span>Paris, France</span>
        </div>
        <div className="footer-icons">
          <SocialIcons className="social-icons" />
        </div>
        <div className="contact-us">
          Contact Us
          <div>555-555-555</div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
