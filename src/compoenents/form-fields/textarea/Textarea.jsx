import React from 'react'

const Textarea = ({value, cols, rows, placeholder, onChange, label}) => {
  return (
    <div class="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
    {label}
    </label>
    <textarea value={value} cols={cols} rows={rows}  onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default Textarea
