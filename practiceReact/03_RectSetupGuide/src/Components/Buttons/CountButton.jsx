export default function CountButton() {
    
    function updateCount(){

    }
    return (
        <div className="flex justify-center">
            <button className="rounded-2xl px-4 py-2 bg-blue-500 text-white"
            onClick={updateCount}
            
            >Count</button>
        </div>
    )
}