"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './button'
import Link from 'next/link'


const Data = [
  { id: 1,
    JobTitle: "Software Engineer",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavaScript lorem30as ddddddddddd ddddddddddddddd dddddddd ddddddddddddddddddddd and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    id: 2,
    JobTitle: "Software Engineer1",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavasaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    id: 3,
    JobTitle: "Software Engineer2",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JaasfvaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    id: 4,
    JobTitle: "Software Engineer3",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and ma ijlkjdhfgkj bkijbjlk bjldj sgjb lbgfbliudbgb   intain web applications using JavaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  },
  {
    id: 5,
    JobTitle: "Mechanical Engineer4",
    JobLocation: "Pune, Maharashtra",
    JobTags: ["Mechanical Design", "AutoCAD", "SolidWorks"],
    JobDescription: "Design and analyze mechanical systems and components using AutoCAD and SolidWorks.",
    Date: "2024-09-25",
    Submissions: 85
  },
  {
    id: 6,
    JobTitle: "Civil Engineer",
    JobLocation: "Mumbai, Maharashtra",
    JobTags: ["Construction", "Project Management", "AutoCAD"],
    JobDescription: "Manage construction projects and ensure compliance with design specifications and safety standards.",
    Date: "2024-09-30",
    Submissions: 95
  },
  {
    id: 7,
    JobTitle: "Electrical Engineer",
    JobLocation: "Hyderabad, Telangana",
    JobTags: ["Electrical Design", "Circuit Analysis", "MATLAB"],
    JobDescription: "Design and analyze electrical systems and circuits using MATLAB and other tools.",
    Date: "2024-10-02",
    Submissions: 110
  },
  {
    id: 8,
    JobTitle: "Chemical Engineer",
    JobLocation: "Chennai, Tamil Nadu",
    JobTags: ["Process Engineering", "Chemical Analysis", "Safety Protocols"],
    JobDescription: "Develop and optimize chemical processes and ensure adherence to safety protocols.",
    Date: "2024-09-28",
    Submissions: 70
  }
];

export default function JobCard() {
  return(
    <div className=' p-2 m-2 border-2 border-foreground rounded-2xl bg-gray-1000'>
      {/* Top Div */}
      <div className=' bg-red-400 text-black rounded-2xl p-2 '>
        <div className=' flex justify-between p-1'>
          <p className=' bg-white p-1 rounded-2xl shadow-xl'>05 Jan, 2024</p>
          <p className=' bg-white p-1 rounded-2xl shadow-xl cursor-pointer'>Save</p>
        </div>
        <div className=' my-5'>
        <p className=' font-bold text-lg'>Zomato</p>
        <h2 className=' text-4xl'> MERN Stack Engineer</h2>
        </div>
        <div className=' flex space-x- flex-wrap items '>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
          <p className='  rounded-2xl px-2 mx-1 my-2 border-2 border-black '>Fresher</p>
        </div>
      </div>
      {/* Bottom Div */}
      <div className=' flex justify-between items-center mt-5 px-2'>
        <div>
          <p>2.5-5 LPA</p>
          <p>Pune Maharashtra,IND</p>
        </div>
        <div>
          <Button className=" rounded-2xl">Details</Button>
        </div>
      </div>

    </div>
  )
}

  // const [isExpanded, setIsExpanded] = useState(false);

  // useEffect(() => {
  //   if (isExpanded) {
  //     document.body.classList.add('overscroll-none');
  //   } else {
  //     document.body.classList.remove('overscroll-none');
  //   }
  // }, [isExpanded]);

  // const LimitText = (text, limit) =>{
  //   const words= text.split(' ');
  //   if(words.length > limit){
  //     return words.slice(0, limit).join(' ') + '...';
  //   }
  //   return text
  // }


  // return (
  //   <>
  //     {Data.map((job, index) => (
  //       <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full md:w-auto min-h-[2px] lg:max-w-[40vh] m-4 hover:shadow-2xl hover:shadow-sky-400 hover: cursor-pointer transition duration-800 ease-in-out transform hover:scale-110">
  //             <Link href={`/jobs/${(job.id)}`} >
  //         <Card className="border-none overflow-hidden">
  //           <CardHeader>
  //             <CardTitle>{job.JobTitle}</CardTitle>
  //             <CardDescription>{job.JobLocation}</CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <p>{job.JobTags}</p>
  //             <CardDescription>{LimitText(job.JobDescription,12 )}</CardDescription>
  //           </CardContent>
  //           <CardFooter className="flex justify-between">
  //             <p className="text-sm">Posted On: {job.Date}</p>
  //             <p className="text-sm">Submissions: {job.Submissions}</p>

  //           </CardFooter>
  //         </Card>
  //             </Link>
  //       </div>
  //     ))}
  //     {/* Expand Job */}
      
  //   </>
  // );
