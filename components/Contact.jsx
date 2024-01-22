'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const EmailSubmit = (e) => {
    e.preventDefault();

    if (!selectedService || selectedService === 'Select a Service') {
      alert('Please select a service before submitting the form.');
      return;
    }

    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_zmmvyfb',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => {
        console.log(res);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 5000);
        setTimeout(() => {
          alert('Email is successfully sent!');
        }, 1000);
      });
  };

  const serviceOptions = [
    'Select a Service',
    'Web Development',
    'Software Development',
    'Graphic and Web Design',
  ];

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <section className="w-full flex  bg-white pb-96" id="contact">
      <div className="max-w-screen-xl mx-auto w-full flex  sm:flex-row flex-col p-3">
        <div className="flex flex-col p-2 sm:pb-2 pb-6">
          <h3 className="sm:text-6xl text-[2.6rem] font-semibold mb-2">
            Get in<span className="text-orange-500"> Touch.</span>
          </h3>
          <p className="text-black/85 max-w-[500px]">
            We're excited to connect with you! Whether you have questions about
            our services or want to discuss a potential project, we're here to
            help. Reach out to us using the contact form or contact details
            below.
          </p>
          <div className="w-full flex flex-col mt-10 gap-5">
            <div className="w-full flex ">
              <Image
                src="/icons/pin.png"
                alt="pin"
                draggable={false}
                height={512}
                width={512}
                className="w-7 object-cover mr-4 select-none"
              />
              <p className="text-orange-500">Serbia</p>
            </div>
            <div className="w-full flex ">
              <Image
                src="/icons/phone2.png"
                alt="phone"
                draggable={false}
                height={512}
                width={512}
                className="w-7 object-cover mr-4 select-none"
              />
              <p className="text-orange-500">+381 61 547 065</p>
            </div>
            <div className="w-full flex ">
              <Image
                src="/icons/mail.png"
                alt="email"
                height={512}
                draggable={false}
                width={512}
                className="w-7 object-cover mr-4 select-none"
              />
              <p className="text-orange-500">amediaStudio@gmail.com</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={EmailSubmit}
          className={`flex w-full flex-col max-w-screen-sm ml-auto gap-6 p-10 px-8 shadow-xl rounded-b-2xl rounded-t-lg border transition-all ${
            emailSent ? 'border-green-500 border-2 bg-green-50' : 'border-black'
          }`}
        >
          <select
            name="naslov"
            value={selectedService}
            onChange={handleServiceChange}
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="ime"
            placeholder="Your Name"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 rounded-[4px] focus:shadow-md ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <textarea
            placeholder="Tell us more about your project..."
            name="poruka"
            className={`p-2 border  transition-shadow delay-75 min-h-[150px] max-h-[280px] focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <input
            type="submit"
            value="Send Message"
            className={`p-2 border transition-all delay-75  cursor-pointer active:scale-[0.98] font-medium rounded-[4px] ${
              emailSent
                ? 'border-green-500 bg-green-500 hover:bg-green-400/80'
                : 'border-black bg-orange-400 hover:bg-orange-400/80'
            }`}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
