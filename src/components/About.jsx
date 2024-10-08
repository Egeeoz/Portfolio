import React from 'react';
import { ABOUT_TEXT } from '../../constans';
import { motion } from 'framer-motion';
import profile2 from '../../constans/images/profile2.jpg';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-start justify-center p-8"
        >
          <img className="rounded-2xl" src={profile2} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-start justify-center p-8 text-lg"
        >
          <p className="my-2 max-w-xl">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
