import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"

function App() {

  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex flex-col items-center justify-center p-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">React Context</h1>
          <p className="text-lg text-amber-300 text-center mt-2 font-semibold">With Chai Aur Code</p>
        </div>
        <div className="w-full max-w-md">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
