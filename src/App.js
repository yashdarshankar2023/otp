import './App.css';
import React, { useRef } from 'react';


function App() {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (value.length === 1 && /\d/.test(value)) {
      const nextIndex = (index + 1) % inputRefs.length;
      inputRefs[nextIndex].current.focus();
    }
    
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace') {
    
      const nextIndex = (index - 1) % inputRefs.length;
      inputRefs[nextIndex].current.focus();
    }
  };
  return (
    <div>
      <div class="container">

      <br /><br />
        <h1>Phone Verification</h1>
        <hr />
        <br />
        <h3 style={{ color: "gray" }}>Enter the OTP you received on 95172-XXXXX</h3>
        <br />
      


        <form action="" class="mt-5">
          <input ref={inputRefs[0]} type="text" onChange={(event) => handleChange(event, 0)} onKeyDown={(event) => handleKeyDown(event, 0)} />
          <input ref={inputRefs[1]} type="text" onChange={(event) => handleChange(event, 1)} onKeyDown={(event) => handleKeyDown(event, 1)}/>
          <input ref={inputRefs[2]} type="text" onChange={(event) => handleChange(event, 2)} onKeyDown={(event) => handleKeyDown(event, 2)}/>
          <input ref={inputRefs[3]} type="text" onChange={(event) => handleChange(event, 3)} onKeyDown={(event) => handleKeyDown(event, 3)}/>
          <input ref={inputRefs[4]} type="text" onChange={(event) => handleChange(event, 4)} onKeyDown={(event) => handleKeyDown(event, 4)}/>
          <input ref={inputRefs[5]} type="text" onChange={(event) => handleChange(event, 5)} onKeyDown={(event) => handleKeyDown(event, 5)}/>

        </form>
        <br />
        <br />

        <button>Verify Button</button>
      </div>
    </div>

  );
}

export default App;