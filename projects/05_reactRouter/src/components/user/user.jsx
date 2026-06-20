import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams(100)

    return (
        <>
            <h5 className='text-center align-middle bg-gray-600 p-4 text-3xl'>
                user: {userid}
            </h5>
        </>
    )
}

export default User
