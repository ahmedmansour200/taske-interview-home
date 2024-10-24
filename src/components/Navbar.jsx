import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // bg-opacity-0
  return (
    <header className="absolute z-20 top-0 w-full">
      <nav className="flex flex-row w-full justify-between sm:px-10 px-7 2lg:px-20 sm:py-8 py-5 fixed top-0 right-0 left-0 bg-transparent shadow-none items-center bg-nav-gradient">
        <a className="visible opacity-100 transition-opacity duration-300 ease-out" href="/">
          <img alt="crete-agency" fetchpriority="high" width={168} height={54} decoding="async" data-nimg={1} className="lg:w-[168px] lg:h-[54px] w-[124px] h-10" style={{ color: 'transparent' }} src="/images/Logo.svg" />
        </a>
        <div className="flex w-fit gap-4 items-center justify-center flex-row flex-nowrap">
          <div className="flex gap-4 border-e  pe-5">
            <button className="font-Degular font-medium text-lg text-[#AEAEAE]" disabled>EN</button>
            <button className="font-Degular font-medium text-lg text-light-1">AR</button>
          </div>
          <div className="relative rotate-0 transition-all duration-500 ease-in-out cursor-pointer">
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <line x1={3} y1={12} x2={21} y2={12} />  <line x1={3} y1={6} x2={21} y2={6} />  <line x1={3} y1={18} x2={21} y2={18} /></svg>

          </div>
        </div>
      </nav>
    </header>

  );
};
