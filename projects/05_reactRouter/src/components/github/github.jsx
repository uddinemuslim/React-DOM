import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    // const [data, setData] = useState(0)

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then(res => setData(res))

    // },[])

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-500 text-white text-3xl'>
            Github Followers : {data.followers}
            <img className='h-40 align-middle' src="https://imgs.search.brave.com/QJ00GdSdsD_O0-LkBGzgwQNrZ4oUL1fZ_2dSzNK9UpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpbGVhcm4u/Y29tL2ljZTkvZnJl/ZV9yZXNvdXJjZXNf/YXJ0aWNsZV90aHVt/Yi93aGF0X2lzX2dp/dGh1Yi5qcGc" alt="hiteshImg" />
        </div>
    )
}

export default Github

export const GithubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/uddinemuslim')

   return response.json()

}