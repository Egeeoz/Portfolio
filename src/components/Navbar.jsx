import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img
          className="mx-2 w-10"
          src="https://placehold.jp/60x36.png"
          alt="logo"
        /> */}
        <h1 className="text-2xl font-semibold">Eö</h1>
      </div>
      <div className="m-8 flex items justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
