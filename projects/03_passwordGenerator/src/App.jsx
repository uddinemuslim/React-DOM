import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [len, setLength] = useState(8)
  const [number, setNumberAllowed] = useState(false)
  const [text, setTextAllowed] = useState(false)
  const [char, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // Use Ref Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (setTextAllowed) str += 'abcdefghijklmnopqrstuvwxyz'
    if (setNumberAllowed) str += '0123456789'
    if (setCharAllowed) str += '!@#$%^&*()?>/.>,'

    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [len, number, text, char])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30)
  },
    [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center items-center bg-gray-700 h-30 mt-10 rounded-2xl w-150 mx-auto'>
        <div className='bg-white flex justify-between items-center h-10  rounded-s flex-wrap w-140 p-2'>
          {/* <span className='text-black break-words'>{password}</span> */}
          <input type="text"
            value={password}
            className=''
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='flex justify-center items-center bg-green-600 h-7 text-white shadow-black w-16 m-0.5 p-0.5 text-center rounded'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex gap-3 items-center'>
          <input
            value={len}
            onChange={(e) => setLength(Number(e.target.value))}
            type='range'
            min={6}
            max={40}
            className='text-white'
          />
          <label className='text-white'> Length : {len}</label>

          <input
            type='checkbox'
            checked={number}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className='text-white'>Number</label>

          <input
            type='checkbox'
            checked={text}
            onChange={() => setTextAllowed((prev) => !prev)}
          />
          <label className='text-white'>SmallLetter</label>

          <input
            type='checkbox'
            checked={char}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className='text-white'>Char</label>
        </div>
      </div>
    </>
  )
}

export default App
