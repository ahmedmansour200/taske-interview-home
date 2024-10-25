import React from 'react'

export const Ensure = () => {
  return (
    <div className="bg-black text-white p-8 py-20">
      {/* Title Section */}
      <div className="mb-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div>
          <h2 className="font-semibold  text-[#F9F9F9] leading-none text-center font-Degular xl:text-[55px] lg:text-[45px] xxm:text-[35px] text-2xl">Innovation That Ensure</h2>
          <h2 className="font-Degular font-semibold text-orange-500 leading-none text-center font-Degular xl:text-[55px] lg:text-[45px] xxm:text-[35px] text-2xl">Your Market Success.</h2>
        </div>
        <a href='#' className='font-semibold text-[#F9F9F9B2] x2l:text-[22px] xl:text-lg lg:text-base text-sm text-secondary-2 border-2 border-secondary-1 rounded-[30px] lg:px-10 sm:px-7 px-5 lg:py-3 py-2.5 max-w-fit hover:text-orange-500 hover:border-orange-500 transition-colors duration-200 ease-out flex items-center justify-center outline-none mt-4 lg:mt-0'>
          Explore Work
        </a>
      </div>
      {/* Services Section */}
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6">
        {/* Branding Card */}
        <div className="bg-[#0c0808] p-6 w-full lg:w-1/4 rounded-md flex justify-between flex-col">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Branding</h3>
          <ul className="space-y-3 flex flex-col justify-between items-start">
            <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Logo Design</li>
            <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Brand &amp; Communication</li>
          </ul>
        </div>
        {/* Product Design Card */}
        <div className="bg-[#0c0808] p-6 w-full lg:w-1/4 h-[350px] rounded-md flex flex-col justify-between">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Product Design</h3>
          <ul className="space-y-3 flex items-start justify-between flex-col">
            <div className='flex gap-3'>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">UI</li>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">UX</li>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Prototype</li>
            </div>
            <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Design Systems</li>
            <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Business Development</li>
          </ul>
        </div>
        {/* Software Development Card */}
        <div className="bg-[#0c0808] p-6 w-full lg:w-1/4 rounded-md flex justify-between flex-col">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Software Development</h3>
          <ul className="space-y-3 flex-col items-start flex">
            <div className='flex gap-3 '>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Websites</li>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Mobile Apps</li>
            </div>
          </ul>
        </div>
        {/* Digital Marketing Card */}
        <div className="bg-[#0c0808] p-6 w-full lg:w-1/4 rounded-md flex flex-col justify-between">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Digital Marketing</h3>
          <ul className="space-y-3 flex flex-col items-start">
            <div className='flex gap-3'>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Websites</li>
              <li className="bg-[#1F1F1F] px-3 py-2 rounded-lg">Mobile Apps</li>
            </div>
          </ul>
        </div>
      </div>    
    </div>
  )
}
