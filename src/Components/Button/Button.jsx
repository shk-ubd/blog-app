import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
  return (
    <button className={`px-2 py-2 ${bgColor} ${textColor} ${className} `} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button