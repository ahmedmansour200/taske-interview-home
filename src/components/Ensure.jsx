import React from 'react'

export const Ensure = () => {
  return (
<div className="bg-black text-white p-8">
  {/* Title Section */}
  <div className=" mb-8 flex justify-between  items-center">
    <div>
    <h2 className="text-[60px] font-bold">Innovation That Ensure</h2>
    <h2 className="text-[60px] font-bold text-orange-500">Your Market Success.</h2>
    </div>
    <a href='#' className='font-semibold text-[#F9F9F9B2] x2l:text-[22px] xl:text-lg lg:text-base text-sm text-secondary-2 border-2 border-secondary-1 rounded-[30px] lg:px-10 sm:px-7 px-5 lg:py-3 py-2.5 max-w-fit hover:text-orange-500 hover:border-orange-500 transition-colors duration-200 ease-out flex items-center justify-center outline-none'>Explore Work</a>

  </div>
  {/* Services Section */}
  <div className="flex justify-center gap-6">
    {/* Branding Card */}
    <div className="bg-gray-900 p-6 w-1/4 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Branding</h3>
      <ul className="space-y-3">
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Logo Design</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Brand &amp; Communication</li>
      </ul>
    </div>
    {/* Product Design Card */}
    <div className="bg-gray-900 p-6 w-1/4 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Product Design</h3>
      <ul className="space-y-3">
        <li className="bg-gray-800 px-3 py-2 rounded-lg">UI</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">UX</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Prototype</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Design Systems</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Business Development</li>
      </ul>
    </div>
    {/* Software Development Card */}
    <div className="bg-gray-900 p-6 w-1/4 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Software Development</h3>
      <ul className="space-y-3">
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Websites</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Mobile Apps</li>
      </ul>
    </div>
    {/* Digital Marketing Card */}
    <div className="bg-gray-900 p-6 w-1/4 rounded-md">
      <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
      <ul className="space-y-3">
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Websites</li>
        <li className="bg-gray-800 px-3 py-2 rounded-lg">Mobile Apps</li>
      </ul>
    </div>
  </div>    
</div>

  )
}
