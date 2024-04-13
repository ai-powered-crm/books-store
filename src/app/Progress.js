// ProgressBar.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProgressBar = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const unlisten = navigate(() => {
      setWidth(0); // Reset progress bar when navigating
    });
    return () => {
      unlisten();
    };
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => prevWidth + 10); // Increment width every 100 milliseconds
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        height: "5px",
        width: `${width}%`,
        background: "blue",
        transition: "width 0.1s ease-in-out",
      }}
    ></div>
  );
};

export default ProgressBar;
