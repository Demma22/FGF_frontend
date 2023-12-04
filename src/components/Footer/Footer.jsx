import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-content">
        <p style={paragraphStyle}>
          "We're united in our commitment to safeguarding our natural surroundings 
          for the benefit of future generations. Together, we can ensure that the 
          beauty and diversity of our world endure for years to come."
        </p>

        <div style={logoContainerStyle}>
          <img src="public/fgfoundation_logo.png" alt="FGF Logo" />
        </div>

        <div className="footer-links" style={linksContainerStyle}>
          <a href="/ListAnimal"><u>Animals</u></a>
          <a href="/ListPlant"><u>Plants</u></a>
          <a href="/ListCulture"><u>Cultures</u></a>
          <a href="/About"><u>About</u></a>
          <a href="/Login"><u>Contribute</u></a>
        </div>
      </div>

      <p>&copy; 2023 FGF Repository</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#112A00',
  color: '#fff',
  textAlign: 'center',
  padding: '5rem',
  position: 'relative',
  bottom: 0,
  width: '100%',
  fontFamily: 'Times New Roman',  // Add this line to set the font
};

const logoContainerStyle = {
  float: 'left', 
  maxWidth: '150px',
  maxHeight: '10px',
};

const paragraphStyle = {
  fontFamily: 'Times New Roman',
  marginBottom: '20px',  // Adjust the padding between paragraph and links
};

const linksContainerStyle = {
  padding: '20px 0',  // Adjust the padding between links and paragraph
};

export default Footer;
