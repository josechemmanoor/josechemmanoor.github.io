// Contact.js
import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:jschemmanoor@gmail.com">jschemmanoor@gmail.com</a>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:+919495065860">+91 9495065860</a>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/jose-chemmanoor-922aa6274/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/josechemmanoor
          </a>
        </div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a href="https://github.com/josechemmanoor" target="_blank" rel="noopener noreferrer">
            github.com/josechemmanoor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;