import React from 'react';

const GoogleMap = () => {
  const apiKey = 'AIzaSyDrFewOO-kvwKWscqQnmsQXilKuE1faMsM';
  const location = 'NORTHERN_UGANDA'; 

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`;

  return (
    <div>
      <iframe
        title="Google Map"
        // width="10%"
        // height="30%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;