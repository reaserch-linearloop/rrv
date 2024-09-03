import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)
  var unused_variable = "This is unused"

  useEffect(() => {
    // This effect doesn't have any dependencies and might cause infinite loops
    setCount(count + 1)
  })

  function unnecessaryFunction() {
    return null
  }

  // Duplicate function declaration
  function unnecessaryFunction() {
    console.log("This is a duplicate function")
  }

  // Using == instead of ===
  if (1 == "1") {
    console.log("This comparison uses loose equality")
  }

  // Not handling potential errors in promises
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done")
    }, 1000)
  }).then(result => console.log(result))

  // Using eval
  eval("console.log('This is unsafe')")

  // Using with statement
  with (Math) {
    let x = cos(PI)
  }

  // Using alert
  alert("This is not recommended")

  // Unreachable code
  return
  console.log("This will never be executed")

  return (
    <>
    <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
