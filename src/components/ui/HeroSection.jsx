"use client";

import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { BackgroundLines } from './background-lines'
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";




const placeholders = [
  "Software Developer",
  "Data Anyalist",
  "Android Developer",
  "Network Engineer",
  "Project Manager",
];

function HeroSection() {

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className=' z-0 h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
    <div className=' w-full '>
      <HeroHighlight className=" w-[90vw] md:w-[70vw] bg-transparent">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="  text-3xl px-1 md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Find{" "}
         Job
        and{" "}
        Internships
        <br />
        Easy And Fast
        

      </motion.h1>
     <div className='mt-8 p-2 bg-gray-300 dark:bg-neutral-700 rounded-xl'>
     <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="mt-5 "
      />
     </div>
    </HeroHighlight>

    </div>
    </div>
  )
}

export default HeroSection