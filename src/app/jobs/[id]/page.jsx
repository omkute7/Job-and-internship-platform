"use client"
import React from 'react'
import { useRouter } from 'next/router'
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Data = [
    { id: 1,
      JobTitle: "Software Engineer",
      JobLocation: "Bangalore, Karnataka",
      JobTags: ["Software Development", "JavaScript", "React"],
      JobDescription: "Develop and maintain web applications using JavaScript and React.",
      Date: "2024-10-01",
      Submissions: 120
    }, {
      id: 2,
      JobTitle: "Software Engineer1",
      JobLocation: "Bangalore, Karnataka",
      JobTags: ["Software Development", "JavaScript", "React"],
      JobDescription: "Develop and maintain web applications using JavaScript and React.",
      Date: "2024-10-01",
      Submissions: 120
    }, {
      id: 3,
      JobTitle: "Software Engineer2",
      JobLocation: "Bangalore, Karnataka",
      JobTags: ["Software Development", "JavaScript", "React"],
      JobDescription: "Develop and maintain web applications using JavaScript and React.",
      Date: "2024-10-01",
      Submissions: 120
    }, {
      id: 4,
      JobTitle: "Software Engineer3",
      JobLocation: "Bangalore, Karnataka",
      JobTags: ["Software Development", "JavaScript", "React"],
      JobDescription: "Develop and maintain web applications using JavaScript and React.",
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


function page( {params}) {
  
    const job = Data.find(job => job.id === parseInt(params.id));
    if(!job){
        notFound();
    }
    return(
        
            <div className=" mx-auto px-4 py-8 h-screen">
            <h1 className="text-3xl font-bold mb-4">{job.JobTitle}</h1>
            <p className="text-xl text-gray-600 mb-4">{job.JobLocation}</p>
            <div className="flex flex-wrap gap-2 mb-4">
            {job.JobTags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {tag}
                </span>
            ))}
            </div>
            <p className="mb-4">{job.JobDescription}</p>
            <Button className=' my-3 '  >Apply For this Job</Button>
            <p className="text-sm text-gray-500 mb-2">Date Posted: {job.Date}</p>
            <p className="text-sm text-gray-500">Submissions: {job.Submissions}</p>
            </div>
    )
  
}

export default page