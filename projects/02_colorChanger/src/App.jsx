import { useState } from "react"

function App() {

  const [color, setColor] = useState("black")

  return (
    <div className="border-4 border-black h-screen w-screen flex items-center justify-center shadow-amber-300"
      style={{ backgroundColor: color }}>
      
      <div className="bg-white flex flex-wrap fixed bottom-9 rounded-2xl px-2 py-1 justify-center align-centre gap-2">
        <button className="bg-green-500 px-2 py-0.5 m-1 shadow-2xl drop-shadow-amber-900  flex flex-wrap justify-center align-centre rounded-full text-white"
        onClick={() => setColor('Green')}
        >Green</button>

        <button className="bg-blue-500 px-2 py-0.5 m-1 shadow-2xl drop-shadow-amber-900 flex flex-wrap justify-center align-centre rounded-full text-white"
        onClick={() => setColor('blue')}
        >Blue</button>

        <button className="bg-red-500 px-2 py-0.5 m-1 shadow-2xl drop-shadow-amber-900 flex flex-wrap justify-center align-centre rounded-full text-white"
        onClick={() => setColor('red')}
        >Red</button>

        <button className="bg-cyan-300 px-2 py-0.5 m-1 shadow-2xl drop-shadow-amber-900 flex flex-wrap justify-center align-centre rounded-full text-white"
        onClick={() => setColor('aqua')}
        >Aqua</button>

        <button className="bg-pink-300 px-2 py-0.5 m-1 shadow-2xl drop-shadow-amber-900 flex flex-wrap justify-center align-centre rounded-full text-white"
        onClick={() => setColor('pink')}
        >pink</button>

      </div>

    </div>
  )
}

export default App
