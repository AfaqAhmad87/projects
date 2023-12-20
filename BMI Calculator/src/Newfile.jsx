import React from "react";
import { useState } from "react";

function newfile() {
  const [data, setdata] = useState();
  return (
    <>
      <button onClick={() => setdata(data + 1)}></button>
      <h1>{data}</h1>
    </>
  );
}
export default newfile;
