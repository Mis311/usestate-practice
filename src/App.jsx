import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HookCounter } from './components/HookCounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <HookCounter />
    </div>
  )
}

export default App
