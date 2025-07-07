import React from 'react'

const Button = (params) => {
    console.log(params);
  return (
    <div>
      <button>{params.name}</button>

    </div>
  )
}

export default Button
