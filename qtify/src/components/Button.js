import React from 'react'

function Button({text, onClick}) {
  return (
    <button onClick={onClick} className='feedback-button'>
      {text}
      </button>
  )
}

export default Button
