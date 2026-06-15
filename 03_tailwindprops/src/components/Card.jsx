import React from 'react'

function Card({username, btnTxt}) {

    // const { username } = props
    // console.log('Card props:', props)
    // console.log('Card username:', username)


    return (
        <>
            <div className="flex justify-center mb-4 mt-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    {/* Image */}
                    <img
                        className="w-full h-48 object-cover"
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Card image"
                    />

                    {/* Content */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-900">{username}</div>
                        <p className="text-gray-700 text-base">
                            A peaceful home surrounded by ancient trees, stone walls, and open meadows. Perfect for a quiet getaway.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="px-6 pt-0 pb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {btnTxt || "DefaultBtnTxt"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
