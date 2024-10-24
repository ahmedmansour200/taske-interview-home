import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
<div className="relative h-screen overflow-hidden">
  {/* Background Video */}
  <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
    <source src="./videos/hader-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Overlay with content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
    <div className="fixed mx-10 top-4 right-4 flex  space-x-6 text-white"> 
    <Navbar/>
    </div>
    {/* Main Heading */}
    <h1 className="text-6xl font-bold text-white text-center">
      Craft a future so <span className="text-orange-500">compelling</span><br />
      success becomes <span className="text-orange-500">inevitable</span>.
    </h1>
    {/* Subheading */}
    <p className="mt-4 text-lg text-gray-300 text-center">
      At CRETE, we excel in planning, designing, and marketing outstanding digital products.
    </p>
    {/* Language Switcher and Menu */}
    {/* Scroll Down Indicator */}
    <div className="absolute bottom-8 flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

  )
}