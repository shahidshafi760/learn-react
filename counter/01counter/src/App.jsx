import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [Counts, setCounts] = useState(0)
  // let Counts = 1;

  function addValue(){
    console.log("clicked" , Counts);
    
    setCounts (Counts + 1)
  }

  return (
    <>
    <h1>Code with shahid</h1>
    <h2>Count value {Counts}</h2>
      <button onClick={addValue}
      >Increase click</button>
      <br /><br />
      <button>Decrease click</button>
    </>
  )
}

export default App
