import React from 'react'

export const Card = () => {
    return (
        <div className="swiper-slide swiper-slide-active" style={{ width: '380px', marginRight: 20 }}>
            <a className="flex flex-col gap-5" href="#">
                <div className="sm:rounded-[16px] rounded-[6.6px] object-cover w-full aspect-[1.5/1] overflow-hidden group ">
                    <img src="https://creteagency.com/wp-content/uploads/2024/03/Blog-IMG-1-1.png" alt="Development-4885" className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-out" />
                </div>
            </a>
            <div className="flex flex-row flex-nowrap justify-between">
                <a className="flex flex-col gap-5" href="#">
                    <div className="flex flex-col justify-start 2xl:w-[78%] w-[73%] overflow-y-visible">
                        <h6 className="font-poppins font-normal xxm:text-base text-[12px] text-[#5A5A5A]">Development</h6>
                        <div className="font-poppins font-light 2xl:text-lg xxm:text-base text-sm text-[#CACACE]">
                            <p>In the fast-paced world of software and digital product development, agility is not just an advan...</p>
                        </div>
                        <p className="font-poppins font-normal xxm:text-base text-[12px] text-[#5A5A5A]">October 20, 2024</p>
                    </div>
                </a>
                <a className="self-start text-white flex justify-center items-center border-b-[1px] border-[#5A5A5A]  font-medium xxm:text-[14px] text-[10px] text-light-1 pb-1 gap-1 uppercase" href="#">View Blog
                    <svg width={15} height={14} viewBox="0 0 15 14" fill="none" className xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.54175 0.125L13.9167 0.125C14.0825 0.125 14.2415 0.190848 14.3587 0.308058C14.4759 0.425269 14.5417 0.58424 14.5417 0.75V10.125C14.5417 10.4702 14.2619 10.75 13.9167 10.75C13.5716 10.75 13.2917 10.4702 13.2917 10.125V2.25888L1.85869 13.6919C1.61461 13.936 1.21888 13.936 0.974806 13.6919C0.730729 13.4479 0.730729 13.0521 0.974806 12.8081L12.4079 1.375L4.54175 1.375C4.19657 1.375 3.91675 1.09518 3.91675 0.75C3.91675 0.404822 4.19657 0.125 4.54175 0.125Z" fill="#F9F9F9" /></svg></a>
            </div>
        </div>
    )
}
