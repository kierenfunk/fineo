import React from 'react';
import Nav from './Nav';

const Hero = () => (
  <div className="h-screen bg-hero-image bg-right bg-cover flex flex-col px-8 md:px-20">
    <Nav />
    <div className="md:h-96 flex items-center flex-grow text-gray-800">
      <div className="flex flex-col justify-center gap-4 max-w-xl">
        <h1 className="text-5xl font-bold">Make your broker business better.</h1>
        <p className="text-xl">
          We help mortgage brokers automate processes,
          create beautiful user experiences and use data to make better decisions.
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
