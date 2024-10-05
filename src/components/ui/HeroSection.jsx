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
    <div className='w-full '>
      <HeroHighlight className=" w-[70vw]">
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
        className="  text-3xl px-4 md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Find{" "}
         Job
        and{" "}
        Internships
        <br />
        Easy And Fast
        

      </motion.h1>
     <div className='mt-8'>
     <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="mt-5"
      />
     </div>
    </HeroHighlight>


    </div>
  )
}

export default HeroSection