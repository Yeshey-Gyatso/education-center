// LoadingScreen.tsx
import React, { useEffect } from 'react';

interface LoadingScreenProps {
  onLoaderComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaderComplete }) => {
  // Simulate loading completion after a delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Call the callback to notify the parent component that loading is complete
      onLoaderComplete();
    }, 3400);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [onLoaderComplete]);

  // Render your loading screen UI here
  return <div>Loading...</div>;
};

export default LoadingScreen;
