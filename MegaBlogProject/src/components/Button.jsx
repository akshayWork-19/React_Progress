import React from 'react'

function Button({
  children, //text for button
  type = 'submit',
  bgColor = 'bg-indigo-600', // Changed default to indigo
  textColor = 'text-white',
  className = '',
  ...props

}) {
  return (
    // Button styling: Default indigo background, white text, generous padding, bold font, rounded corners, and a smooth hover effect
    <button
      className={`px-6 py-3 font-semibold text-lg rounded-xl transition-all duration-300 ease-in-out 
                  shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                  ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button