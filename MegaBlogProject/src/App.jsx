import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js";
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Signup from "./pages/Signup.jsx";
import { Login, SignUp } from "./components/index.js";


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
          console.log(userData)
        } else {
          dispatch(logout())
          console.log("Soomething here")
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    // Main container: Deep dark background, uses flex to push the footer to the bottom
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <div className="w-full block">
        <Header />
      </div>
      {/* Main content area: uses flex-grow to take up all available space */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="w-full block">
        <Footer />
      </div>
    </div >) : (
      // Loading state: shows a centered message on the deep dark background
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-xl text-indigo-400 font-semibold">Loading...</p>
      </div>
    )
}

export default App