import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '../Layout';
import ContributorDashboard from './ContributorDashboard';
import UserProfile from './UserProfile';

const UserProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [userStatus, setUserStatus] = useState(null); // You can replace this with your actual user status logic

  const history = useHistory();

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

  useEffect(() => {
    
    if (userStatus === 'admin' || userName === 'admin') {
        // Redirect to Admin Dashboard
        history.push('/admin-dashboard');
      } else {
        // Redirect to Contributor Dashboard
        history.push('/contributor-dashboard');
      }
    }, [userStatus, userName, history]);

  return (
    <Layout>
      
      {profileData ? (
        <UserProfile profileData={profileData} />
      ) : (
        <ContributorDashboard updateProfileData={updateProfileData} />
      )}
    </Layout>
  );
};

export default UserProfile;
