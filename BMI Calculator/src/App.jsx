import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState();
  function func(value) {
    const result = value;
    setCount(value);
  }

  return (
    <>
      <div
        className="div"
        style={{
          backgroundColor: "white",
          filter: `brightness(${count}%)`,
        }}
      >
        <div className="header">
          <h1>Adjust Your Brighness</h1>
        </div>
        <input type="range" onChange={(e) => func(e.target.value)} />
      </div>
    </>
  );
}

export default App;
