import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = '',
  ...props

}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {
        // Label styling: Light text, bold, with a small bottom margin
        label && <label
          className='inline-block mb-1 pl-1 text-lg font-medium text-gray-200'
          htmlFor={id}>
          {label}
        </label>
      }
      <input type={type}
        // Input field styling: Dark background (gray-700), light text, subtle border (gray-600), and a strong indigo focus ring
        className={`px-4 py-3 rounded-lg bg-gray-700 text-gray-100 outline-none border border-gray-700 
                    focus:bg-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
                    duration-200 w-full shadow-inner ${className}`}
        {...props} ref={ref} id={id}
      />
    </div>
  )
})

export default Input