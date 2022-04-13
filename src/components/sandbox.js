import React, { useEffect, useState } from "react";

export default function Sandbox() {


  const[count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Current count is ${count}`;
  })


  return (
    <div className="layout">
      <h1 className="title">Sandbox</h1>
      
      <p>Hooks</p>


      <p>Basic Counter example for useState and useEffect</p>
      <div className="sandbox-container">
        <button className="btn btn-primary btnCount" onClick={() => setCount(count - 10)}>Decrease by 10</button>
        <button className="btn btn-primary btnCount" onClick={() => setCount(count - 5)}>Decrease by 5</button>
        <button className="btn btn-primary btnCount" onClick={() => setCount(count - 1)}>Decrease by 1</button>
        <h1 className="title count">{count}</h1>
        <button className="btn btn-primary btnCount" onClick={() => setCount(count + 1)}>Increment by 1</button>
        <button className="btn btn-primary btnCount" onClick={() => setCount(count + 5)}>Increment by 5</button>
        <button className="btn btn-primary btnCount" onClick={() => setCount(count + 10)}>Increment by 10</button>
      </div>

      <p>Create a friend status custom hook</p>
      <div className="sandbox-container">
        
      </div>
    </div>
  );
}