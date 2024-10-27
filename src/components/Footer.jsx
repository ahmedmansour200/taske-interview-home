import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="container mx-auto flex justify-between gap-8 px-4 flex-wrap">
                {/* Left Section - Logo and Navigation */}
                <div className="flex flex-col space-y-4">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl flex items-center space-x-2">
                        <img src="/images/Logo.svg" alt="Crete Logo" className="w-[168px] h-[54px]" />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-start items-start space-x-4 text-xl text-gray-400 max-w-md ">
                        <a href="#" className="hover:text-orange-500">Crete Story</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Industries</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Services</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Our Work</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Careers</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Get in Touch</a>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex pt-40 space-x-6 text-gray-500">
                        <a href="#">
                            {/* Facebook */}
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </span>
                        </a>
                        <a href="#">
                            {/* X */}
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>

                        </a>
                        <a href="#">
                            {/* Instagram */}
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>

                        </a>
                        <a href="#">
                            {/* Linkedin */}
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </span>

                        </a>
                        <a href="#">
                            {/* Behance */}
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                </svg>
                            </span>

                        </a>
                    </div>
                </div>

                {/* Right Section - Contact Information */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-white text-xl font-medium">Saudi Arabia</h4>
                        <p className="text-gray-400 text-xl mt-4 font-extralight max-w-[400px]">37 Dr Mahmoud Hoballah, St El Serag Mall, Nasr City, Cairo Governorate – Egypt</p>
                        <p className="text-white text-2xl font-normal mt-2">( +966 155 099 037 )</p>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-medium">Egypt</h4>
                        <p className="text-gray-400 text-xl mt-4 font-extralight max-w-[400px]">37 Dr Mahmoud Hoballah, St El Serag Mall, Nasr City, Cairo Governorate – Egypt</p>
                        <p className="text-white text-2xl font-normal mt-2">( +2011 550 99037 )</p>
                    </div>
                    <div className="mt-5">
                <p className="font-medium  text-[18px]">All Rights Reserved to Crete Agency | 2024</p>
                    </div>
                </div>
<a href="#top" className="rounded-full border-[1px] border-[#3C403C] text-[rgba(236, 238, 236, 1)] w-11 h-11 z-[5]  flex justify-center items-center hover:text-orange-500 hover:border-orange-500 transition-colors ease-out duration-200">
    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeMiterlimit={10} strokeWidth={48} d="m112 244 144-144 144 144M256 120v292" /></svg>
    </a>

            </div>
        </footer>
    );
};

export default Footer;
