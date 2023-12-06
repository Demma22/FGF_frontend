// Footer.js

import React from 'react';
import footerStyles from './footerStyles'; // Import styles

const Footer = () => {
  const {
    footer,
    logoContainer,
    paragraph,
    linksContainer,
  } = footerStyles;

  return (
    <footer style={footer}>
      <div className="footer-content">
        <p style={paragraph}>
          "We're united in our commitment to safeguarding our natural surroundings 
          for the benefit of future generations. Together, we can ensure that the 
          beauty and diversity of our world endure for years to come."
        </p>

        <div style={logoContainer}>
          <img src="/fgfoundation_logo.png" alt="FGF Logo" />
        </div>

        <div className="footer-links" style={linksContainer}>
          <a href="/ListAnimal"><u>Animals</u></a>
          <a href="/ListPlant"><u>Plants</u></a>
          <a href="/ListCulture"><u>Cultures</u></a>
          <a href="/About"><u>About</u></a>
          <a href="/Login"><u>Contribute</u></a>
        </div>
        <hr></hr>
      </div>

      <p>&copy; 2023 FGF Repository</p>
    </footer>
  );
};

export default Footer;
