import React, { useEffect, useState } from 'react';
import { HandIcon, MailIcon, DeviceMobileIcon } from '@heroicons/react/outline';
import { GithubFill, InstagramFill, LinkedinBoxFill } from 'akar-icons';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
    initialInView: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: 200,
        opacity: 0,
      });
    }
  }, [animation, inView]);

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div id="contact" className="px-10 bg-[#f0f0f0] pb-10 overflow-hidden">
      <div className="mt-10 lg:mt-14">
        <h2 className="text-5xl text-center font-semibold text-slate-600 underline tracking-tight">
          Feel Free to Say Hi{' '}
          <HandIcon className="h-11 w-11 inline rotate-45" />
        </h2>
      </div>
      <motion.div
        ref={ref}
        animate={animation}
        className="mt-24 md:mt-32 mb-10 w-full flex text-gray-800 flex-wrap gap-5 gap-y-10 items-center justify-evenly"
      >
        <a
          rel="noreferrer"
          href="bs18b005@smail.iitm.ac.in"
          className="inline-flex flex-col items-center h-24 w-24 justify-center  hover:bg-gray-300 p-2 rounded-md"
          target={'_blank'}
        >
          <MailIcon className="h-10 w-10" />
          <p className="font-medium">Mail me</p>
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/SumanthGoud017"
          className="inline-flex flex-col items-center h-24 w-24 justify-center  hover:bg-gray-200 p-2 rounded-md"
          target={'_blank'}
        >
          <GithubFill className="h-10 w-10" />
          <p className="font-medium">Github</p>
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/feed/"
          className="inline-flex flex-col items-center h-24 w-24 justify-center hover:bg-gray-200 p-2 rounded-md"
          target={'_blank'}
        >
          <LinkedinBoxFill className="h-10 w-10" />
          <p className="font-medium">Linked In</p>
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/sumanth.goud.334/"
          className="inline-flex flex-col items-center h-24 w-24 justify-center  hover:bg-gray-200 p-2 rounded-md"
          target={'_blank'}
        >
          <InstagramFill className="h-10 w-10" />
          <p className="font-medium">Instagram</p>
        </a>
        <span
          onClick={() => handleClick()}
          className="cursor-pointer inline-flex flex-col items-center h-24 w-24 justify-center  hover:bg-gray-200 p-2 rounded-md"
        >
          <DeviceMobileIcon className="h-10 w-10 font-light" />
          <p className="font-medium">Mobile</p>
        </span>
      </motion.div>
      <p
        className={`whitespace-nowrap mt-5 text-center text-xl font-medium ${
          isHidden ? `` : `hidden`
        }`}
      >
        <span className="font-normal">Mobile </span>: +91 9381373910
      </p>
    </div>
  );
};

export default Contact;
