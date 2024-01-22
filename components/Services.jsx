'use client';
import { services } from '@/constants';
import Image from 'next/image';

const ServiceItem = ({ title, description, imageSrc, invert }) => {
  const flexDirectionClass = invert ? 'sm:flex-row-reverse' : 'sm:flex-row';

  return (
    <div
      className={`flex ${flexDirectionClass} flex-col max-w-screen-xl mx-auto p-2`}
    >
      <div className="relative p-2 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          draggable={false}
          width={512}
          height={512}
          className="w-[400px] object-cover select-none "
        />
      </div>
      <div className="flex-1 p-2 ml-5 relative">
        <h3 className="text-4xl mt-[10%] font-semibold text-orange-500 text-center sm:text-left">
          {title}
        </h3>
        <p className="mt-4 text-gray-300 sm:max-w-[80%] text-center sm:text-left">
          {description}
        </p>
        <a href="/#contact" draggable="false">
          <button className="mt-6 btn-primary mx-auto sm:mx-0 block">
            Start Project
          </button>
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      className="w-full flex flex-col text-white py-24 pb-64 max-w-screen-2xl mx-auto "
      id="Services"
    >
      <h3 className="sm:text-6xl text-[2.6rem] font-semibold text-center">
        Our<span className="text-orange-500"> Services.</span>
      </h3>
      <div className="sm:w-[15%] w-[20%] h-[4px] bg-orange-500 mx-auto my-5 rounded-full" />

      {services.map((service, index) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.description}
          imageSrc={service.image}
          invert={index % 2 === 1}
        />
      ))}
    </section>
  );
};

export default Services;
