import React, { useState, useEffect } from "react";
import React from 'react';

function useEffect() {
    const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Called right after component is mounted
  useEffect(() => {
    console.log("componentDidMount is called");
    // 'mock' api call to retrieve a message
    setTimeout(() => {
      let messageData = "This is a sample message retrieved";
      setMessage(messageData);
      console.log("message is retrieved and set");
    }, 2000);
  }, []);

  // Called everytime there is an update to component in DOM
  useEffect(() => {
    console.log(`componentDidUpdate is called`);
  });

  // Called everytime there is an update to 'count' state
  useEffect(() => {
    console.log(`new count: ${count}`);
  }, [count]);

  const handleClick = () => {
    // increases 'count' in current state by 1
    setCount(prev => prev + 1);
  };
  return (
    <>
      <div>
        <p>Message: {message}</p>
        <hr />
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increase Count</button>
      </div>
    </>
  );
}

export default useEffect;