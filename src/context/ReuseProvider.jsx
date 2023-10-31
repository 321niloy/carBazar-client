import React, { createContext, useEffect, useState } from "react";
import Axios from "../Component/Axios";

export const AuthContext = createContext();

const ReuseProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/feedback";
        const response = await Axios.get(url);
        setFeedback(response); // Assuming the actual data is in the 'data' property of the response
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  

  const value = {
    feedback,
  
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default ReuseProvider;
