import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    // Outer container: Deep dark background, height adjusted to fill screen
    <div className='flex items-center justify-center w-full min-h-screen bg-gray-900 py-12'>
      {/* Form container: Dark card with rounded corners and border, replacing the light gray and border */}
      <div className={`mx-auto w-full max-w-lg bg-gray-800 rounded-xl p-10 border border-gray-700 shadow-2xl transition duration-300 hover:border-indigo-600`}>
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[120px]">
            <Logo width="100%" />
          </span>
        </div>
        {/* Heading: Light text for contrast, bold */}
        <h2 className="text-center text-3xl font-extrabold leading-tight text-white">Sign in to your account</h2>
        {/* Paragraph: Muted light text */}
        <p className="mt-3 text-center text-base text-gray-400">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            // Link style: Primary accent color (indigo) for contrast
            className="font-medium text-indigo-400 transition-all duration-200 hover:underline hover:text-indigo-300"
          >
            Sign Up
          </Link>
        </p>
        {
          // Error message: Red text on dark background
          error && <p className='text-red-500 mt-8 text-center font-medium'>
            {error}
          </p>
        }
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          {/* Removed the '<h1>here</h1>' div as it was just a placeholder */}
          {/* <div className='sp-x-5'> - changed to standard spacing below */}
          <div className='space-y-5'>
            <Input label="Email:" placeholder="Enter your email!" type="email" {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address"
              }
            })} />

            <Input label="Password:" type="password" placeholder="Enter your password!" {...register("password", { required: true })} />

            {/* Button style: Prominent CTA color */}
            <Button type="submit" className='w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold'>Sign In</Button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Login