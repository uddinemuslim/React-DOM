import React, {useState, useContext}from 'react'
import UserContext from '../context/userContext'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }


    return (
        <div className='w-96 mx-auto bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Login</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <input 
                        type="text"
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                    />
                </div>
                <button 
                    type='submit'
                    className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
