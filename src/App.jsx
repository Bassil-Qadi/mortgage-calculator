import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MortgageCalculatorContainer from './components/MortgageCalculatorContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MortgageCalculatorContainer />
    </div>
  )
}

export default App
