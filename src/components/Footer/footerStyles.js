// footerStyles.js

const footerStyles = {
    footer: {
      backgroundColor: '#112A00',
      color: '#fff',
      textAlign: 'center',
      padding: '5rem',
      position: 'relative',
      bottom: 0,
      width: '100%',
      fontFamily: 'Times New Roman',
      opacity: 0,
      animation: 'fadeIn 1s forwards',
    },
    logoContainer: {
      float: 'left',
      maxWidth: '120px', // Adjust the logo size based on your preference
      height: 'auto',
      maxHeight: '120px', // Set a maximum height if needed
    },
    paragraph: {
      fontFamily: 'Times New Roman',
      marginBottom: '20px',
    },
    linksContainer: {
      padding: '20px 0',
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };
  
  export default footerStyles;
  