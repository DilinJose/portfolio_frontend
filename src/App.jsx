import { useState } from 'react'
import './App.css'
import Router from './Router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router />
    </div>
  )
}

export default App
