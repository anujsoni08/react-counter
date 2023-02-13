import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState();

  const handleStart = () => {
    setTimerId(
      setInterval(() => {
        setCount((state) => state + 1);
      }, 1000)
    );
  };

  const handlePause = () => {
    clearInterval(timerId);
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(timerId);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
