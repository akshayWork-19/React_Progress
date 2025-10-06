import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => console.error("Internal Server Error:: GetCurrentUser :: error", error.message))
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          TODO: {/*<Outlet /> */}
        </main>
        <Footer />
      </div>
    </div >) : (null)
}

export default App
