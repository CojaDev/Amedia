'use client';
import { NAV_LINKS } from '@/constants';
import { useState } from 'react';

import Image from 'next/image';

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex sm:flex-row flex-col items-center justify-between text-white p-2 py-6">
      <div className="w-full flex justify-between p-2">
        <a href="/" draggable="false">
          <p className="font-semibold sm:text-3xl text-2xl sm:text-center sm:w-auto w-full text-left select-none py-2">
            AMedia<span className="text-orange-400">.</span>
          </p>
        </a>
        <Image
          src={IsOpen ? '/icons/close.webp' : '/icons/menu.webp'}
          width={96}
          height={96}
          alt="nav"
          className="invert sm:hidden flex object-cover w-11 h-10"
          onClick={() => {
            setIsOpen(!IsOpen);
          }}
        />
      </div>
      <ul className="sm:flex hidden w-full justify-end ">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className={`${link.variant} text-[1.050rem] mx-2`}>
            <a href={link.href} draggable="false" className="flex p-2">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="sm:hidden flex flex-col w-full">
        {IsOpen === true &&
          NAV_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.label}
              draggable="false"
              className="flex flex-col my-2 w-full"
            >
              <li className={`${link.mobileVariant}`}>{link.label}</li>
            </a>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
