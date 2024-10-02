import JobCard from '@/components/ui/JobCard'
import React from 'react'

function JobListing() {
  return (
    <div className=' h- flex md:flex-row justify-cente '>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <JobCard/>
    </div>
  )
}

export default JobListing