import JobCard from '@/components/ui/JobCard'
import Link from 'next/link'
import React from 'react'

function JobListing() {
  return (
    

    <section className=' w-full  '>
    <div className=' flex flex-wrap justify-center '>
    <JobCard  />

    </div>
    
    </section>
  
  )
}

export default JobListing

const Data = [
  {
    JobTitle: "Software Engineer",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    JobTitle: "Software Engineer1",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    JobTitle: "Software Engineer2",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  }, {
    JobTitle: "Software Engineer3",
    JobLocation: "Bangalore, Karnataka",
    JobTags: ["Software Development", "JavaScript", "React"],
    JobDescription: "Develop and maintain web applications using JavaScript and React.",
    Date: "2024-10-01",
    Submissions: 120
  },
  {
    JobTitle: "Mechanical Engineer4",
    JobLocation: "Pune, Maharashtra",
    JobTags: ["Mechanical Design", "AutoCAD", "SolidWorks"],
    JobDescription: "Design and analyze mechanical systems and components using AutoCAD and SolidWorks.",
    Date: "2024-09-25",
    Submissions: 85
  },
  {
    JobTitle: "Civil Engineer",
    JobLocation: "Mumbai, Maharashtra",
    JobTags: ["Construction", "Project Management", "AutoCAD"],
    JobDescription: "Manage construction projects and ensure compliance with design specifications and safety standards.",
    Date: "2024-09-30",
    Submissions: 95
  },
  {
    JobTitle: "Electrical Engineer",
    JobLocation: "Hyderabad, Telangana",
    JobTags: ["Electrical Design", "Circuit Analysis", "MATLAB"],
    JobDescription: "Design and analyze electrical systems and circuits using MATLAB and other tools.",
    Date: "2024-10-02",
    Submissions: 110
  },
  {
    JobTitle: "Chemical Engineer",
    JobLocation: "Chennai, Tamil Nadu",
    JobTags: ["Process Engineering", "Chemical Analysis", "Safety Protocols"],
    JobDescription: "Develop and optimize chemical processes and ensure adherence to safety protocols.",
    Date: "2024-09-28",
    Submissions: 70
  }
];