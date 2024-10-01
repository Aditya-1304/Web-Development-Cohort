import React, { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 10000)
  }, []);
  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    console.error("Component unmounted")

    return () => {
      console.log("Component mounted")
    };
  }, []);

  return <div>
    From inside MyComponent
  </div>
}

export default App
