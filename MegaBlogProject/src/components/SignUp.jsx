import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Input, Button, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const createUser = async (data) => {
    setError("");
    setLoading(true)
    const { fullName, email, password } = data;
    try {
      const userData = await authService.createAccount({ email, password, name: fullName });
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
        }
        navigate("/")
      }
    } catch (error) {
      console.log("Error here ")
      setError(error.message);
    }
  }


  return (
    // Outer container: Deep dark background, height adjusted to fill screen
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-900 py-12">
      {/* Form container: Dark card with rounded corners and border */}
      <div className={`mx-auto w-full max-w-lg bg-gray-800 rounded-xl p-10 border border-gray-700 shadow-2xl transition duration-300 hover:border-indigo-600`}>
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px] mr-20">
            <Logo width="80px" />
          </span>
        </div>
        {/* Heading: Light text for contrast, bold */}
        <h2 className="text-center text-3xl font-extrabold leading-tight text-white">Sign up to create account</h2>
        {/* Paragraph: Muted light text */}
        <p className="mt-3 text-center text-base text-gray-400">
          Already have an account?&nbsp;
          <Link
            to="/login"
            // Link style: Primary accent color (indigo) for contrast
            className="font-medium text-indigo-400 transition-all duration-200 hover:underline hover:text-indigo-300"
          >
            Sign In
          </Link>
        </p>
        {/* Error message: Red text on dark background */}
        {error && <p className="text-red-500 mt-8 text-center font-medium">{error}</p>}

        <form onSubmit={handleSubmit(createUser)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            {/* Button style: Prominent CTA color, large font */}
            <Button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold cursor-pointer">
              Create Account
            </Button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;