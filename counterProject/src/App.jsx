import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      counter += 1;

      setCounter(counter)
    }

  }
  const subtractValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Chai aur Akshay</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue} >Add</button>
      <button onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
