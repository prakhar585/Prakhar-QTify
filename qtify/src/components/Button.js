import React from 'react'

function Button({className, text, onClick}) {
  return (
    <button onClick={onClick} className='feedback-button'>
      {text}
      </button>
  )
}

export default Button
