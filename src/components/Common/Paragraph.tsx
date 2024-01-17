import React from 'react'
interface propTypes{
    paragraph: string
}

const Paragraph = ({paragraph }: propTypes) => {
  return (
    <p className='font-normal text-base py-5 text-mainParaColor'>{paragraph}</p>
  )
}

export default Paragraph