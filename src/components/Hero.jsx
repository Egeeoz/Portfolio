import React from 'react';
import { HERO_CONTENT } from '../../constans';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Ege Özakdemir
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Javascript Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="https://placehold.jp/3d4070/ffffff/500x500.png?text=Placeholder"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
