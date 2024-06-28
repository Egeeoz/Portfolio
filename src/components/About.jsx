import React from 'react';
import { ABOUT_TEXT } from '../../constans';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex items-start justify-center p-8">
          <img
            className="rounded-2xl"
            src="https://placehold.jp/3d4070/ffffff/500x500.png?text=placeholder"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-start justify-center p-8">
          <p className="my-2 max-w-xl">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
