import React from 'react';

const UserProfile = ({ profileData }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <li>
          <strong>Full Name:</strong> {profileData.fullName}
        </li>
        <li>
          <strong>Username:</strong> {profileData.userName}
        </li>
        <li>
          <strong>Email:</strong> {profileData.email}
        </li>
        <li>
          <strong>Gender:</strong> {profileData.gender}
        </li>
        <li>
          <strong>Phone Number:</strong> {profileData.phoneNumber}
        </li>
        <li>
          <strong>Employment Status:</strong> {profileData.employment}
        </li>
        <li>
          <strong>Specialization:</strong> {profileData.specialization}
        </li>
        <li>
          <strong>Profile Picture:</strong> {profileData.profilePicture}
        </li>
        <li>
          <strong>Bio:</strong> {profileData.additionalInfo}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;