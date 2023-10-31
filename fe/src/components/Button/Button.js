import React from 'react'
import "./Button.css";

function Button(props) {
    const {children} = props 
  return (
    <div>
        <button className='gr'>{children}</button>
    </div>
  )
}

export default Button