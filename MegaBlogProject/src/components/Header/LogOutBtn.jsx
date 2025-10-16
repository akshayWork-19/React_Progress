import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'


function LogOutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logout()
      .then(() => {
        dispatch(logout())
      })
      .catch((error) => console.error("Internal Server Error :: error", error))
      .finally(() => console.log("Logout button working!"));
  }
  return (
    // Updated button to be a distinct, slightly brighter CTA element
    <button
      className='px-5 py-3 text-lg font-semibold duration-300 transition-all bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
      onClick={logOutHandler}
    >
      Logout
    </button>
  )
}

export default LogOutBtn