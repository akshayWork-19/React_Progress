import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
function Footer() {
  return (
    // Seamless deep dark background (bg-gray-900) and a subtle top border
    <section className="relative overflow-hidden py-12 bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                {/* Copyright text color is slightly muted */}
                <p className="text-sm text-gray-500">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              {/* Heading style is uppercase, bold, and light gray */}
              <h3 className="tracking-widest mb-6 text-sm font-bold uppercase text-gray-300">
                Company
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    // Link styles: light text, with indigo hover effect
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-widest mb-6 text-sm font-bold uppercase text-gray-300">
                Support
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-widest mb-6 text-sm font-bold uppercase text-gray-300">
                Legals
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer