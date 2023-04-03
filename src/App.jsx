import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Tasks from './component/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Tasks/>
    </div>
  )
}

export default App
