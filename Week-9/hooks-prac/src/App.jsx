
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
