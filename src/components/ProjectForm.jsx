import React from "react";
import { useForm } from "react-hook-form";

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here
  };

  return (
    <section className="bg-black px-3 p-[160px] 2lg:px-0 mx-auto section flex flex-col items-center justify-start 2lg:h-screen overflow-hidden">
      <h2 className=" font-normal x2l:text-[60px] 2lg:text-[50px] sm:text-[45px] text-3xl mt-5 sm:mt-0 text-white">
        Got <span className="text-orange-500 font-semibold">a Project?</span>
      </h2>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="sm:mt-10 mt-5 flex flex-col gap-5 relative"
      >
        {/* Name Field */}
        <div className="flex   w-full flex-wrap gap-5">
          <div className="flex gap-[10px] items-center 2lg:w-[41.4%]">
            <label className=" text-white text-lg font-thin">
              My name is
            </label>
            <label className="flex px-4 py-2 gap-x-3 transition-all  sm:!min-h-[3.125rem] min-h-8 rounded-[20px] shadow-input relative"
              style={{ backgroundColor: "#c7b6b61f" }}>
              <div className="relative flex-1 !flex">
                <input
                  className="outline-none bg-transparent border-none w-full h-full text-white font-thin text-[25px]"
                  {...register("name", { required: "Field is required" })}
                  type="text"
                />
              </div>
            </label>
            {errors.name && (
              <p className="mt-1 text-sm font-medium text-red-500 col-span-2 justify-self-end">
                {errors.name.message}
              </p>
            )}
          </div>
          {/* Need Help Field */}
          <div className="flex  gap-[10px] items-center 2lg:w-[57.6%]">
            <label className=" text-white text-lg font-thin">
              Need help with
            </label>
            <label className="flex px-4 py-2 gap-x-3 transition-all sm:!min-h-[3.125rem] min-h-8 rounded-[20px] shadow-input relative"
              style={{ backgroundColor: "#c7b6b61f" }}>
              <div className="relative flex-1 !flex">
                <input
                  className="outline-none bg-transparent border-none w-full h-full text-white font-thin text-[25px]"
                  {...register("help", { required: "Field is required" })}
                  type="text"
                />
              </div>
            </label>
            {errors.help && (
              <p className="mt-1 text-sm font-medium text-red-500 col-span-2 justify-self-end">
                {errors.help.message}
              </p>
            )}
          </div>
        </div>

        {/* Email and Phone Fields */}
        <div className="flex  w-full  justify-start  gap-5 flex-wrap">
          <div className="flex  gap-[10px] items-center 2lg:w-[66%]">
            <label className=" text-white text-lg font-thin">
              You can E-mail me at
            </label>
            <label className="flex px-4 py-2 gap-x-3 transition-all sm:!min-h-[3.125rem] min-h-8 rounded-[20px] shadow-input relative"
              style={{ backgroundColor: "#c7b6b61f" }}>
              <div className="relative flex-1 !flex">
                <input
                  className="outline-none bg-transparent border-none w-full h-full text-white font-thin text-[25px]"
                  {...register("email", {
                    required: "Field is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="text"
                />
              </div>
            </label>
            {errors.email && (
              <p className="mt-1 text-sm font-medium text-red-500 col-span-2 justify-self-end">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex  gap-[10px] items-center 2lg:w-[33%]">
            <label className=" text-white text-lg font-thin">
              or Call
            </label>
            <label className="flex px-4 py-2 gap-x-3 transition-all sm:!min-h-[3.125rem] min-h-8 rounded-[20px] shadow-input relative"
              style={{ backgroundColor: "#c7b6b61f" }}>
              <div className="relative flex-1 !flex">
                <input
                  className="outline-none bg-transparent border-none w-full h-full text-white font-thin text-[25px]"
                  {...register("phone", {
                    required: "Field is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  type="number"
                />
              </div>
            </label>
            {errors.phone && (
              <p className="mt-1 text-sm font-medium text-red-500 col-span-2 justify-self-end">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* About Field */}
        <div className="flex w-full items-start">
          <div className="flex gap-[10px] w-[100%]">
            <label className=" text-white text-lg font-thin pt-2">
              About
            </label>
            <label className="w-full px-4 py-2 gap-x-3 transition-all sm:!min-h-[3.125rem] min-h-8 rounded-[20px]  shadow-input relative"
              style={{ backgroundColor: "#c7b6b61f" }}>
              <div className="relative flex-1">
                <textarea
                  className="outline-none bg-transparent border-none w-full h-full text-white font-thin text-[25px] resize-none min-h-[10rem]"
                  {...register("about", { required: "Field is required" })}
                />
              </div>
            </label>
            {errors.about && (
              <p className="mt-1 text-sm font-medium text-red-500 col-span-2 justify-self-end">
                {errors.about.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex px-[16px] py-[26px] justify-end w-full">
          <button
            type="submit"
            className="font-semibold text-[#F9F9F9B2] x2l:text-[22px] xl:text-lg lg:text-base text-sm text-secondary-2 border-2 border-secondary-1 rounded-[30px] lg:px-10 sm:px-7 px-5 lg:py-3 py-2.5 max-w-fit hover:text-orange-500 hover:border-orange-500 transition-colors duration-200 ease-out flex items-center justify-center outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProjectForm;
