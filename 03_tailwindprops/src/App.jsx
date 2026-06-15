import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="bg-green-500 rounded-2xl p-2 m-2 text-white">Tailwind CSS</div>
        </div>
        
      </div>
    </>
  )
}



export default App 
