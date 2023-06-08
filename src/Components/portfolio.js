import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9292/test');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
