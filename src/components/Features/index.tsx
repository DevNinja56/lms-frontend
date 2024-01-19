import React from 'react'
import featureImg from "../../../public/images/feaureImg.png"
import SubHeading from '@components/SubHeading'
const Features = () => {
  return (
    <div
    className=" flex items-center justify-between px-24 text-white py-20 "

  >
    <div className="w-1/2">
      <div className='flex items-start flex-col'>
        <SubHeading text='Feature'/>
        <h1 className="font-semibold text-5xl leading-[48px] text-black mb-9">
        Learn new skills when and where you like.

        </h1>
      </div>
      <p className="font-normal text-lg leading-6 mb-7 text-mainParaColor">
      Use the list below to bring attention to your product’s key differentiator.
      </p>
      

      <ul className="flex items-start flex-col gap-5 font-normal text-[13px] leading-4 text-mainParaColor">
        <li className="flex items-center gap-[6px]">
         <span className='bg-mainColor rounded-full py-[7px] px-[5px] gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M13 1.5L4.75 9.75L1 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          Hand-picked authors
          </li>
          <li className="flex items-center gap-[6px]">
          <span className='bg-mainColor rounded-full py-[7px] px-[5px] gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M13 1.5L4.75 9.75L1 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          Easy to follow curriculum
          </li>
          <li className="flex items-center gap-[6px]">
          <span className='bg-mainColor rounded-full py-[7px] px-[5px] gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M13 1.5L4.75 9.75L1 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          Free courses
          </li>
          <li className="flex items-center gap-[6px]">
          <span className='bg-mainColor rounded-full py-[7px] px-[5px] gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M13 1.5L4.75 9.75L1 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          Money-back guarantee
          </li>
      </ul>
      <button className=' mt-[66px] bg-transparent text-mainColor border border-mainColor leading-5 rounded-[5px] py-5 px-12'>Join Free</button>
    </div>
    <div className="w-1/2">
      <img src={featureImg} alt="header-img" />
    </div>
  </div>
  )
}

export default Features