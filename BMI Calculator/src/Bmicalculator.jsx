import { useState, useMemo } from "react";
import React from "react";
import "./index.css";
function bmicalculator() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();

  const memo = useMemo(() => {
    const result = height / 2;
    return (weight / result) * result;
  }, [height, weight]);

  return (
    <>
      <main>
        <h1>Here is our 4TH Project</h1>
        <div className="weight">
          <h2>Weight:{weight}kg</h2>
          <input
            type="range"
            onChange={(e) => setweight(e.target.value)}
            min={40}
            max={200}
          />
        </div>
        <div className="height">
          <h2>height:{height}m²</h2>
          <input
            type="range"
            onChange={(e) => setheight(e.target.value)}
            min={17.5}
            max={27.9}
          />
        </div>
        <div className="height">
          <h3>Your BMI is:{memo}</h3>
        </div>
      </main>
    </>
  );
}
export default bmicalculator;
