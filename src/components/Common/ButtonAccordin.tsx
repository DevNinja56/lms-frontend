import React from "react"

interface propsTypes {
  padding: string
  className: string
  text: string
  type?: "button" | "submit" | "reset" | undefined
  icon?: React.ReactElement
  icon2?: React.ReactElement
  onClick?: () => void

}

const Button = ({ padding, className, text, type, icon, icon2, onClick}: propsTypes) => {
  return (
    <button onClick={onClick} className={`${padding} ${className} hover:-translate-y-1 hover:scale-110 duration-500`} type={type}>
      {icon} {text} {icon2}
    </button>
  )
}

export default Button
