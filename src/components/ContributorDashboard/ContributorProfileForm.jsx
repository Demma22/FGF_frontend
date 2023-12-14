import React, { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phoneNumber: "",
    email: "john.doe@example.com",
    username: "john_doe",
    bio: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handlePhotoDelete = () => {
    setFormData({
      ...formData,
      photo: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add logic to update user data and photo (e.g., make API calls)
    // Reset form or perform other actions as needed
  };

  return (
    <form className="max-w-3xl mx-auto mt-8 flex">
      <div className="w-1/3 pr-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Edit Photo
          </label>
          {formData.photo ? (
            <div className="flex items-center">
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Profile"
                className="w-20 h-20 rounded-full mr-4"
              />
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePhotoDelete}
              >
                Delete
              </button>
            </div>
          ) : (
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </div>
      </div>

      <div className="w-2/3">
        {/* Other Fields */}
        {/* ... (Similar structure for other fields) */}

        {/* BIO */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
            BIO
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write a short bio about yourself"
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContributorProfileForm;
