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
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'>Logout</button>
  )
}

export default LogOutBtn