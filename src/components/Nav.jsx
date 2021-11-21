import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => (
  <div className="sticky py-8 flex flex-row justify-between items-center z-20">
    <div className="">
      <img src="logo.png" alt="Fineo Digital Logo" />
    </div>
    <div className="flex flex-row gap-16 items-center ">
      <Link to="connect" smooth duration={500} offset={50}>
        <button type="button" className="uppercase tracking-wider text-sm font-bold text-gray-600">
          Connect
        </button>
      </Link>
    </div>
  </div>
);

export default Nav;
