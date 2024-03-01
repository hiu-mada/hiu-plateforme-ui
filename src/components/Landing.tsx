import React from 'react'
import PropTypes from 'prop-types'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import Link from 'next/link';

const Landing = () => {
   const words = [
    {
      text: "Platfrom",
    },
    {
      text: "HIU",
    },
    {
      text: "for",
    },
    {
      text: "Hacking.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[35rem]">
      <p className="text-black font-semi-bold dark:text-neutral-200 text-xs sm:text-base  ">
        Empowering Innovation through Hacking Challenges.
      </p>
      {/*<TypewriterEffectSmooth words={words} />*/}
      <div className="flex justify-center items-center my-5 text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold">
      <h1 className="text-black dark:text-white">Platfrom HIU for</h1>
      <span className="text-blue-500 dark:text-blue-500 ml-2">Cybersecurity and Haking.</span>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href="/login">
          Join now
          </Link>
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Link href="/signup">
              Signup
          </Link>
        </button>
      </div>
    </div>
  );
}


export default Landing
