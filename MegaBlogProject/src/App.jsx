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
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />

        </main>
        <Footer />
      </div>
    </div >) : (null)
}

export default App
