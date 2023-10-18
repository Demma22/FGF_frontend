import React, { useState } from 'react';
import { Layout } from "../Layout"

function ContributionForm() {
  const [name, setName] = useState('');
  const [contribution, setContribution] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the name and contribution data here.
    // For this example, we'll just show a thank-you alert.
    setShowAlert(true);
  };

  return (
    <Layout>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Contribute</h1>
      <p className="text-gray-700 mb-4">
        Make your contribution by sharing your knowledge in the provided field.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name of Contributor
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contribution">
            Contribution
          </label>
          <textarea
            id="contribution"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Write your contribution here"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            CONTRIBUTE
          </button>
        </div>
      </form>

      {showAlert && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mt-4">
          <p>Thanks for your contribution!</p>
        </div>
      )}
    </div>
    </Layout>
  );
}

export default ContributionForm;
