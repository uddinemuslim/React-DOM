export default function ParrotCard() {
    const parrot = {
        name: "Parrot",
        imageSrc: "https://cdn.prod.website-files.com/623236d8ac23bb57bd352b40/628ddfb2e3f1734be5f86253_ilona-frey-0UKyrKCoutM-unsplash.jpg",
        description: "This is the short descriptoon provided by the author and be happy with this all you want"
    }

    return (

        <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">

            <img
                className="w-full h-48 object-cover"
                src={parrot.imageSrc}
                alt="A scenic mountain landscape"
            />


            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {parrot.name}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                    {parrot.description} </p>

                <div className="mt-4">
                    <button  className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
};