import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'


function App(props) {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Muslim",
    Class: "12Th",
    Proffession: "Barbar"
  }
  console.log('Props', props)
  return (
    <>
      <div className="flex justify-center flex-col">
        <div>
          <span className="bg-green-500 rounded-2xl p-2 m-2 text-white mb-5 pb-1.5 mt-20 pt-20" >Tailwind CSS</span>
        </div>
        <Card username={myObj.username} Class={myObj.Class} Proffession={myObj.Proffession} btnTxt={"ClickToFirstBtn"} /> <br />
        <div>
          <Card username={"Moslem Uddin"} />
        </div>
      </div>
    </>
  )
}



export default App 
