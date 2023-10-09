import { Layout } from "../Layout"
import React from 'react';


function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This will update your password.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action is not reversible.')) {
      // Perform account deletion logic here.
      alert('Account deleted successfully.');
    }
  };

  return (
    <Layout>
   <div className="p-3">
      <div className="flex">
        {/* Right Column - Text */}
        <div className="w-1/2 pl-4">
          <p className="text-gray-700 text-sm">
            <b>Change Password</b>
            <br/>
            Update Your Password Associated with your account
          </p>
        </div>

        {/* Left Column - Password Update Form */}
        <div className="w-1/2 pr-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
                Current Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="currentPassword"
                type="password"
                placeholder="Current Password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="newPassword"
                type="password"
                placeholder="New Password"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-6 border-t border-gray-300" />

{/* Delete Account Section */}
<div className="flex">
  {/* Left Column - Text */}
  <div className="w-1/2 pl-4">
    <p className="text-gray-700 text-sm">
      <b>Delete account</b>
      <br />
      No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.
    </p>
  </div>

  {/* Right Column - Delete Button */}
  <div className="w-1/2 pr-4 flex items-center justify-center">
    <button
      onClick={handleDeleteAccount}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      YES, DELETE
    </button>
  </div>
</div>






    </div>
    
    </Layout>
  );
}

export default Settings;
