import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-semibold">Eö</h1>
      </div>
      <div className="m-8 flex items justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ege-%C3%B6zakdemir-4422b8313/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Egeeoz" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
