import ParrotCard from "./components/parrotCard"

function App() {
  const condition = {
    parrotCard: true,
    heading: false
  }

  return (
    <>
      {!condition.parrotCard ? (
        <ParrotCard />
      ) : (
        <h1 className='text-3xl text-center bg-amber-100'>Blogs</h1>
      )}
    </>
  )
}

export default App
