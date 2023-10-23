import React, { useState, useEffect } from 'react';
import { Layout } from "../Layout"

function Contributor() {
  const [contributors, setContributors] = useState([]);
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch contributors from the API
    fetch('https://fgf-app.onrender.com/api/contributors/contributors_list')
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
      })
      .catch((error) => {
        console.error('Error fetching contributors:', error);
      });

    // Fetch entries from the API
    fetch('https://fgf-app.onrender.com/api/docs/#/contributors/entries')
      .then((response) => response.json())
      .then((data) => {
        setEntries(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching entries:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Contributor List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 py-2">Contributor</th>
                <th className="w-1/3 py-2">Entry</th>
                <th className="w-1/3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((contributor) => (
                <tr key={contributor.id} className="border-b border-gray-300">
                  <td className="py-2">{contributor.name}</td>
                  <td className="py-2">
                    {entries.find((entry) => entry.contributorId === contributor.id)
                      ? 'Entry Exists'
                      : 'No Entry'}
                  </td>
                  <td className="py-2">Status Here</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </Layout>
  );
}

export default Contributor;
