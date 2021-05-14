import { React, useState } from "react";
import { Container } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return <Container className="contact-cont">CONTACT</Container>;
}
export default Contact;
