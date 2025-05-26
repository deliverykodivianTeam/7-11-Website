import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Adjust the path if needed
import LoadingPage from '../src/components/LoadingPage.jsx'; // Make sure the path is correct

// Ensure your main CSS file is imported here
import './App.css'; // Assuming App.css is your main CSS file

const root = createRoot(document.getElementById('root'));

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // After 5 seconds, set isLoading to false
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <StrictMode>
      {isLoading ? <LoadingPage /> : <App />}
    </StrictMode>
  );
};

root.render(<RootComponent />);
