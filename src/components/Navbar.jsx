import React, { useState } from 'react'

export const Navbar = () => {
  // add the Menu
  const [isOpen, setIsOpen] = useState(false);
  // bg-opacity-0
  return (
    <div className="w-full">
      <nav className="flex flex-row w-full justify-between sm:px-10 px-7 2lg:px-20 sm:py-8 py-5 fixed top-0 right-0 left-0 bg-transparent shadow-none items-center bg-nav-gradient">
        <a className="visible opacity-100 transition-opacity duration-300 ease-out" href="/">
          <img alt="crete-agency" src="/images/Logo.svg" />
        </a>
        <div className="flex w-fit gap-4 items-center justify-center flex-row flex-nowrap">
          <div className="flex gap-4 border-e  pe-5">
            <button className="font-medium text-lg text-[#AEAEAE]">EN</button>
            <button className="font-medium text-lg text-light-1">AR</button>
          </div>
          <div className="cursor-pointer">
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <line x1={3} y1={12} x2={21} y2={12} />  <line x1={3} y1={6} x2={21} y2={6} />  <line x1={3} y1={18} x2={21} y2={18} /></svg>

          </div>
        </div>
      </nav>
    </div>

  );
};
