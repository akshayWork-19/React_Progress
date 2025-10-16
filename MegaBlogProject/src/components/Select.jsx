import React from 'react'
import { useId } from 'react'

function Select({
  options = [],
  label,
  className = "",
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {
        // Label styling: Light text, bold, with a small bottom margin
        label && <label htmlFor={id} className={`inline-block mb-1 pl-1 text-lg font-medium text-gray-200`} >{label}</label>
      }
      {
        <select
          {...props}
          id={id}
          ref={ref}
          // Select styling: Dark background, light text, subtle border, and indigo focus ring
          className={`px-4 py-3 rounded-lg bg-gray-700 text-gray-100 outline-none border border-gray-700 
                      focus:bg-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
                      duration-200 w-full shadow-inner ${className}`}
        >

          {
            options.length > 0 ? options.map((option) => (
              // Option styling is generally inherited but ensures text is visible on the dark background
              <option
                key={option}
                value={option}
                className="bg-gray-700 text-gray-100" // Ensure option background/text is dark/light
              >
                {option}
              </option>
            )) : null
          }
        </select>
      }
    </div>
  )
}

export default React.forwardRef(Select)