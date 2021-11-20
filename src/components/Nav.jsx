import React from 'react';

const Nav = () => (
  <div className="sticky py-8 flex flex-row justify-between items-center z-20">
    <div className="">
      <img src="logo.png" alt="Fineo Digital Logo" />
    </div>
    <div className="flex flex-row gap-16 items-center uppercase tracking-wider text-sm font-bold text-gray-600">
      <div className="">Connect</div>
    </div>
  </div>
);

export default Nav;
