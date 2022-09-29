import React from 'react'

const Input = ({onChange, value, className, type, placeholder, label }) => {

  return (
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
      {label}
      </label>
    <input
    type={type}
    value={value}
    className={className}
    placeholder={placeholder}
    onChange={onChange} />
    </div>
  )
}

export default Input
