import React from 'react'
interface propsTypes{
    text: string
    className : string
}

const Button = ({text, className}: propsTypes) => {
  return (
    <>
         <button className={`rounded ${className}`}>{text}</button>
    </>
  )
}

export default Button