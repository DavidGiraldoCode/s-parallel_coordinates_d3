import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ParallelCoordinates } from './ParallelCoordinates'

function App() {
  const [count, setCount] = useState(0);

  console.log('Hello! David');

  return (
    <>
      <ParallelCoordinates/>
    </>
  )
}

export default App
