import React from 'react';

const testimonials = [
  {
    name: "John Smith",
    title: "Founder of Awesomex Technology",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    location: "Egypt | 2024",
  },
  {
    name: "John Smith",
    title: "Founder of Awesomex Technology",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    location: "Egypt | 2024",
  },
  {
    name: "John Smith",
    title: "Founder of Awesomex Technology",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    location: "Egypt | 2024",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-black py-12 px-20">
     <div className="flex justify-between items-center mb-8">
  <h2 className="font-semibold  text-[#F9F9F9] leading-none text-center font-Degular xl:text-[55px] lg:text-[45px] xxm:text-[35px] text-2xl">
    What Our <span className="text-orange-500">Clients</span> Say About Us
  </h2>

  {/* Navigation Buttons */}
<div className="flex items-center rounded-full lg:h-16 lg:w-[124px] xxm:h-14 h-[41px] xxm:w-[105px] w-[90px] border-[1px] border-dark-1 xxm:p-2 px-[3.1px] py-[3.77px] justify-between">
    <button className="border-0 outline-none bg-[#232329] rounded-full lg:w-12 lg:h-12 xxm:w-10 xxm:h-10 w-8 h-8 flex justify-center items-center text-white hover:bg-orange-500 transition-colors ease-out duration-200" disabled>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="xxm:w-auto w-[22px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" /></svg>
        </button>
        <button className="border-0 outline-none bg-[#1C1C21] rounded-full lg:w-12 lg:h-12 xxm:w-10 xxm:h-10 w-8 h-8 flex justify-center items-center text-white hover:bg-orange-500 transition-colors ease-out duration-200">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="xxm:w-auto w-[22px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" /></svg>
            </button>
            </div>

</div>


      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1C1C21] text-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-orange-500 text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
              <p className="mt-4 text-base text-gray-200 italic">"{testimonial.quote}"</p>
              <div className="mt-6 text-sm text-gray-500">
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
