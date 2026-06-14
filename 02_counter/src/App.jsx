import Reac, { useState, useCallback, useEffect } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(2)

  // let counter = 15
  const addValue = () => {
    if (counter >= 10) {
      setCounter(counter)
    } else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      counter
    } else {

      setCounter(counter - 1)
    }
  }

  return (
    <div id='container'>
      <h1>Hello from Counter App</h1>
      <h1>Counter Value = {counter}</h1>
      <button id="add" onClick={addValue}>Add Value {counter}</button> <br /><br />
      <button id="remove" onClick={removeValue}>Remove Value {counter}</button>
    </div>
  )
}

export default App
