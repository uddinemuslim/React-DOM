import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) {
        return (
            <div className='mt-6 text-center text-gray-400 font-semibold'>
                Please login to continue
            </div>
        )
    } else {
        return (
            <div className='mt-8 text-center w-96 mx-auto bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg shadow-lg p-6'>
                <p className='text-gray-700 text-sm font-semibold uppercase tracking-wider'>Welcome Back</p>
                <h2 className='text-3xl font-bold text-gray-800 mt-2'>{user.username}</h2>
                <div className='mt-4 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded w-20 mx-auto'></div>
            </div>
        )
    }
}

export default Profile
