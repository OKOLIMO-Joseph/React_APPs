import React from 'react';
import { useState } from 'react';
import './style.css';

function App() {
  const [counter, setCount] = useState(0)
  
  function increment(){
    setCount(counter+1);
  }
  function decrement(){
    setCount(counter-1);
  }
  function stop(){
    setCount(0);
  }
  function msg(){
    alert("Built by OKOLIMO-Joseph, NINSIIMA-Whitney, MWINE-Irwin and SSEKISONGE-Robert")
  }
  
return (
  <div id="main">
    <h1>Simple On-Click Counter</h1>
    <div id="head"><h2>{counter}</h2></div>
<button onClick= {increment} id="forward" >+</button>
<button onClick= {stop} id="stop"> Stop </button>
<button onClick= {decrement} id="back">-</button>
<div>
  <button onClick= {msg} id="members">View Group Members!</button>
</div>

<div id="footer">
  <footer>#code_GEEKS
    
  </footer>
  </div>
  </div>
);
}

export default App;