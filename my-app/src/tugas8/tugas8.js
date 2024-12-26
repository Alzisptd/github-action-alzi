import React from "react"
import { useState } from "react";
import '../App.css';

function App() {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
      };

  return (
    
      <div className="card">

        <h1>{count}</h1>
        <button onClick={handleIncrement}>Tambah</button>
        {count > 10 && <p>State count sudah lebih dari 10!!</p>}
      </div>
  );
}

export default App;
