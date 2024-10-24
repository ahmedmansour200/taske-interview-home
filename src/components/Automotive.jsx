import React from 'react';

const IndustryButton = ({ name, isActive = false, bgColor, href }) => (
    <button 
        aria-label={name} 
        className={`outline-none cursor-pointer border-0 font-Degular font-semibold 2xl:text-[32px] xl:text-[28px] text-2xl text-light-1 flex justify-center items-center w-full shadow-tabsBtn relative group ${bgColor} ${isActive ? '!text-orange-500 2xl:!text-[28px] xl:!text-2xl !text-xl' : 'hover:text-orange-500'}`}
    >
        <span className="absolute top-0 left-0 right-0 w-full h-full transition-all duration-200 ease-linear group-hover:translate-y-1 flex justify-center items-center hover:z-10">
            {name}
        </span>
    </button>
);

// مكون فيديو القسم
const IndustrySection = ({ title, href, videoSrc }) => (
    <div className="bg-[#20252A] 2xl:px-20 xl:px-10 px-6 2xl:py-12 xl:py-10 py-6 w-[75.15%]">
        <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between">
                <h3 className="font-semibold text-white 2xl:text-[50px] xl:text-[45px] text-[38px]">
                    <span className="text-orange-500">Automotive</span> Industry
                </h3>
                <a 
                    className="border-b-[1px] text-[#F9F9F9] border-[#5A5A5A] text-light-1 font-Degular font-medium xl:text-[22px] text-lg flex items-center justify-between gap-2.5 self-end pb-2" 
                    href={href}
                    aria-label={`Learn more about ${title} industry`}
                >
                    Learn More
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
                    </svg>
                </a>
            </div>
            {videoSrc ? (
                <video width={306} height={852} autoPlay loop playsInline className="object-cover rounded-[20px] object-cover max-h-[306px] w-full h-full">
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : (
                <div className="flex justify-center items-center bg-gray-700 w-full h-full rounded-[20px]">
                    No video available
                </div>
            )}
        </div>
    </div>
);

// البيانات المستخدمة للأقسام
const industryData = [
    { name: 'Automotive', videoSrc: 'https://creteweb.blob.core.windows.net/assets/industry/1728388650-Automotive.mp4', bgColor: 'bg-[#20252A]', isActive: true, href: '/industries/automotive' },
    { name: 'Entertainment', videoSrc: '', bgColor: 'bg-[#1D2227]', href: '/industries/entertainment' },
    { name: 'Tourism', videoSrc: '', bgColor: 'bg-[#1A1E22]', href: '/industries/tourism' },
    { name: 'Real Estate', videoSrc: '', bgColor: 'bg-[#14171C]', href: '/industries/real-estate' },
    { name: 'Retail', videoSrc: '', bgColor: 'bg-[#111417]', href: '/industries/retail' }
];

export const Automotive = () => {
    return (
        <section className="bg-black 2lg:px-20 sm:px-10 px-5 flex flex-col justify-center 2lg:h-screen overflow-hidden py-5 2lg:pb-0 2lg:pt-4 gap-4">
            <h2 className="text-white font-semibold text-[60px] 2xl:text-6xl xl:text-[50px] lg:text-[45px] sm:text-[40px] xxm:text-3xl text-2xl">
                Digitalization across
                <span className="font-semibold text-orange-500 text-[60px] 2xl:text-6xl xl:text-[50px] lg:text-[45px] sm:text-[40px] xxm:text-3xl text-2xl">
                    Innovation.
                </span>
            </h2>
            
            <div className="w-full  rounded-[20px] 2xl:h-[500px] flex xl:h-[480px] h-[440px] shadow-tabs overflow-x-hidden 2xl:mt-10 mt-4 2lg:flex">
                <IndustrySection {...industryData[0]} />
                
                <div className="grid w-[24.85%] h-full 2xl:grid-rows-auto-fill-100 grid-rows-auto-fill-88 text-[#F9F9F9] overflow-y-hidden">
                    {industryData.map((industry, index) => (
                        <IndustryButton key={index} {...industry} />
                    ))}
                </div>
            </div>
        </section>
    );
};
