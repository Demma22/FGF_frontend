import React, { useState } from 'react';
import { Layout } from '../Layout';

const ContributorDashboard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    gender: '',
    dob: '',
    phoneNumber: '',
    employment: '',
    specialization: '',
    profilePicture: '',
    additionalInfo: '',
  });

  // Using a separate state for action (create or update)
  const [profileAction, setProfileAction] = useState('create');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitProfile = (e) => {
    e.preventDefault();

    // Your logic to handle form submission goes here
    console.log('Profile Action:', profileAction);
    console.log('Form Data:', formData);

    // Reset the form if needed
    setFormData({
      fullName: '',
      userName: '',
      email: '',
      gender: '',
      dob: '',
      phoneNumber: '',
      employment: '',
      specialization: '',
      profilePicture: '',
      additionalInfo: '',
    });

    // Reset the action to 'create' after submission
    setProfileAction('create');
  };

  return (
    <>
      <Layout>
        <h2>Fill in the Form to create and update your personal Profile.</h2>

        {/* React form */}
        <form onSubmit={submitProfile}>
          {/* Your form fields go here */}
          <div className=" mb-3">
          <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
          </div>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          
          <div className=" mb-3">
          <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option selected disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            
          </div>

          <div className=" mb-3">
          <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
            
          </div>

          <div className=" mb-3">
          <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            
          </div>
          
          <div className=" mb-3">
          <label htmlFor="Currentemployment" className="form-label">
          Current Employment
            </label>
            <input
              type="text"
              className="form-control"
              id="Currentemployment"
              name="Currentemployment"
              placeholder="Currentemployment"
              value={formData.Currentemployment}
              onChange={handleInputChange}
            />
            
          </div>

          <div className=" mb-3">
          <label htmlFor="employmentstatus" className="form-label">
          Employment Status
            </label>
            <input
              type="text"
              className="form-control"
              id="employmentstatus"
              name="employmentstatus"
              placeholder="EmploymentStatus"
              value={formData.employmentstatus}
              onChange={handleInputChange}
            />
            
          </div>

          <div className=" mb-3">
          <label htmlFor="profilePicture" className="form-label">
              Upload Profile Picture
            </label>
            <input
              type="file"
              className="form-control"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleInputChange}
              required
            />
          </div>

            <div className=" mb-3">              
            <label htmlFor="additionalInfo" className="form-label">
              BIO
            </label>
            <textarea
              className="form-control"
              id="additionalInfo"
              name="additionalInfo"
              rows="6"
              placeholder="Tell us more about yourself"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            {profileAction === 'create' ? 'Create Profile' : 'Update Profile'}
          </button>
        </form>

        {/* Update button */}
        {profileAction === 'create' && (
          <button
            onClick={() => setProfileAction('update')}
            className="btn btn-secondary"
          >
            Switch to Update
          </button>
        )}
      </Layout>
    </>
  );
};

export default ContributorDashboard;
