'use client';
import { WHYUS } from '@/constants';

import React from 'react';

const WhyUs = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white/95  py-32  pt-48">
      <h3 className="sm:text-6xl text-[2.6rem] font-semibold text-center">
        Why Choose <span className="text-orange-500">Us?</span>
      </h3>
      <div className="sm:w-[15%] w-[20%] h-[4px] bg-orange-400 mx-auto my-5 rounded-full" />
      <div className="sm:w-[80%] w-full flex flex-wrap justify-center items-center gap-8 mt-8 mx-auto">
        {WHYUS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center   p-4 border border-orange-500 bg-white/20 rounded-md w-[20rem]  h-72"
          >
            <img
              src={item.image}
              alt={item.title}
              draggable={false}
              className="h-20 w-20 object-cover mb-4  mt-2 select-none"
            />
            <h4 className="text-2xl font-semibold text-center text-orange-500 mb-2 ">
              {item.title}
            </h4>
            <p className="text-sm text-center opacity-80 ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <a href="#contact" draggable={false}>
        <button className="btn-primary mt-10 hover:!text-black">
          Contact Us
        </button>
      </a>
    </section>
  );
};

export default WhyUs;
