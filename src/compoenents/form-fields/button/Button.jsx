import React from 'react'

const Button = ({type, onClick, title, className}) => {
  return (
    <button type={type} onClick={onClick} className={className}>{title}</button>
  )
}

export default Button
