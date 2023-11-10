import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button