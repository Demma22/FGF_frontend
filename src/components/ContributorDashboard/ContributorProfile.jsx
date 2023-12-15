import React, { useState } from 'react';
import { Layout } from '../Layout';
import ContributorDashboard from './ContributorDashboard';
import UserProfile from './UserProfile';

const ContributorProfile = () => {
  const [profileData, setProfileData] = useState(null);

  // Mock data, replace this with actual data retrieval logic
  const mockProfileData = {
    fullName: 'John Doe',
    userName: 'john_doe',
    email: 'john@example.com',
    gender: 'male',
    dob: '1990-01-01',
    phoneNumber: '1234567890',
    employment: 'Software Engineer',
    specialization: 'Web Development',
    profilePicture: 'path/to/profile-pic.jpg',
    additionalInfo: 'I love coding!',
  };

  const updateProfileData = (newData) => {
    // Update profile data in state
    setProfileData(newData);
  };

  return (
    <Layout>
      <h1>WELCOME</h1>
      {profileData ? (
        <UserProfile profileData={profileData} />
      ) : (
        <ContributorDashboard updateProfileData={updateProfileData} />
      )}
    </Layout>
  );
};

export default ContributorProfile;
