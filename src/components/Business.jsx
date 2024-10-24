import React from 'react'
import { Card } from './Card'

export const Business = () => {
  return (
<section className="section bg-black 2lg:px-20 sm:px-10 px-5 flex flex-col justify-center 2lg:h-screen py-5 2lg:py-0">
  <div className="w-full flex justify-end items-center 2xl:py-10 xxm:py-5 pb-5 xxm:border-b-[1px] border-[#1C1C21]">
  
    <div className="flex xxm:gap-5 gap-2.5 items-center">
    {/* Navigation Buttons */}
<div className="flex items-center rounded-full lg:h-16 lg:w-[124px] xxm:h-14 h-[41px] xxm:w-[105px] w-[90px] border-[1px] border-dark-1 xxm:p-2 px-[3.1px] justify-between">
    <button className="border-0 outline-none bg-[#1C1C21] rounded-full lg:w-12 lg:h-12 xxm:w-10 xxm:h-10 w-8 h-8 flex justify-center items-center text-white hover:bg-orange-500 transition-colors ease-out duration-200 !bg-[#161616] !text-[#4E4E4E] hover:!bg-[#161616]" disabled>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="xxm:w-auto w-[22px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" /></svg>
        </button>
        <button className="border-0 outline-none bg-[#1C1C21] rounded-full lg:w-12 lg:h-12 xxm:w-10 xxm:h-10 w-8 h-8 flex justify-center items-center text-white hover:bg-orange-500 transition-colors ease-out duration-200">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="xxm:w-auto w-[22px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" /></svg>
            </button>
            </div>
      <a href="/blogs" className="font-semibold x2l:text-[22px] lg:text-lg xxm:text-sm text-[12px] text-white border-2 border-secondary-1 rounded-[30px] lg:px-10 xxm:py-3 xxm:px-7 px-[17px] py-[6px] max-w-fit hover:text-orange-500 hover:border-orange-500 transition-colors duration-200 ease-out">
        View All
      </a>
    </div>
  </div>
  {/* Swiper Component for Blog Items */}
  <div className="swiper-container flex">
  <Card/>
  <Card/>
  <Card/>
  </div>
</section>

  )
}
