import React from "react";
import './../../Styles.css';

const ProfileDisplay = ({ fullName, phoneNumber, email, username, bio, photo }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 flex g-white">
      <div className="w-1-3 pr-8">
        {photo && (
          <img
            src={URL.createObjectURL(photo)}
            alt="Profile"
            className="w-40 h-40 rounded-full"
          />
        )}
      </div>

      <div className="w-2-3">
        <h2 className="text-2xl font-bold mb-4">{fullName}</h2>
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>BIO:</strong> {bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileDisplay;
