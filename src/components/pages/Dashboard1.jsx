import { useEffect, useState } from "react";

const Dashboard1 = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
      
    );
  }
};

export default Dashboard1;