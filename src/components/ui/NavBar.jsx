"use client"

import React from 'react'
import Logo from "/public/logo.png"
import Link from 'next/link'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs'

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SlBell } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react"
import { IoClose } from "react-icons/io5";
import { Button } from '../ui/button'
import { ModeToggle } from './toggle'
import { IoIosLogOut } from "react-icons/io";
import { MdSpaceDashboard, MdSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import ClerkLogin from '../ClerkLogin'




const Data = [
    {
        companyName: "Tech Corp",
        message: "Your application has been received.",
        timeAgo: "2 hours ago"
    },
    {
        companyName: "Innovate Ltd.",
        message: "Your interview is scheduled for tomorrow.Your application has been receivedYour application has been received",
        timeAgo: "1 day ago"
    },
    {
        companyName: "BuildIt Inc.",
        message: "Your profile has been updated.",
        timeAgo: "3 days ago"
    },
    {
        companyName: "BuildIt Inc.",
        message: "Your profile has been updated.",
        timeAgo: "3 days ago"
    },
    {
        companyName: "BuildIt Inc.",
        message: "Your profile has been updated.",
        timeAgo: "3 days ago"
    }
];









 function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [notification, setNotification] = useState(false);
    const {isSignedIn} = useAuth();



    function HandleLogout() {
        // Logout logic here
        // setExpanded(false)
    }
    function Notification() {
        if (notification) {
            setNotification(false);
            console.log("set fasle"+notification);
            
            
        } else {
            console.log("set true"+ notification);
            setNotification(true);
            
        }

        
    }



return (
    <div >
        <section>
            <div className=' w-full p-2 md:mt-5 md:px-7 flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <Link href="/" className='flex items-center space-x-1'>
                     <Image
                        src="/clogo.png"
                        alt="Logo"
                        width={65}
                        height={60}

                    /> 

                        <h1 className=' text-2xl md:text-3xl font-bold'>Carrier Connect</h1>
                    </Link>
                </div>
                {/* Menu */}
                <div className=' flex items-center space-x-4'>
                    <div className=' hidden lg:block md:block'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <Link href="/jobs">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Jobs
                                    </NavigationMenuLink>
                                </Link>
                                <Link href="/prepare">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Prepare
                                    </NavigationMenuLink>
                                </Link>
                                <Link href="/thread">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Thread
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                        </NavigationMenu>



                    </div>
                    {/* Notification icon */}
                    <div>
                        <SlBell
                            className= {` hidden  lg:block rounded-xl h-9 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                            onClick={()=>{Notification()}}
                        />
                        <div className={`${ notification ? "" : "md:hidden"} hidden md:block absolute p-2 right-20  mt-4 rounded-3xl max-w-[40%] border bg-black  `}>
                        <p className=' px-2 text-xl'>Notifications</p>
                        <hr className=' my-2' />
                        {Data.map((notif, index) => (
                            <div className='   p-3 flex  border-b-2 justify-between hover:bg-[#3b3c36]' key={index}>
                                <div className=' max-w-[80%]'>
                                <p className=' text-lg font-bold'>{notif.companyName}</p>
                                <p>{notif.message}</p>

                                </div>
                                <p>{notif.timeAgo}</p>
                            </div>


                        ))}
                        </div>
                    </div>

                    <IoClose
                        className={`${expanded ? ' ease-in block' : 'hidden'} md:hidden lg:hidden rounded-xl h-12 text-red-500 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                        onClick={() => setExpanded(false)}
                    />
                    <div className=" hidden md:block">
                        <ModeToggle />

                    </div>

                    <HiOutlineMenuAlt3
                        className={` ${expanded ? 'hidden' : 'block'} md:hidden lg:hidden rounded-xl h-12 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                        onClick={() => setExpanded(true)}
                    />

                    <div>

                    </div>
                    {/* Profile / AccountIcon */}

                    {isSignedIn ? <div  className=" hidden md:block" ><ClerkLogin  /></div>  : <Button className=" hidden md:block">
                        <ClerkLogin />
                        </Button>}
                    
                    


                </div>
            </div>
        </section>
        {/* Mobile menu */}
        <section className={`  mr-0   flex  w-full z-30 ${expanded ? 'block overflow-y-hidden' : 'hidden'}`} >
            <div className='   bg-gray-100  dark:bg-slate-900 rounded-sm h-screen absolute z-50  right-0  w-full p-3 px-5 flex flex-col justify-betwee'>
                <div className='  cursor-pointer flex justify-center items-center bg-green-800 hover:bg-green-600 px-3 py-2 rounded-xl ' >

                    <ClerkLogin className="w-full" />
                </div>
                <hr />
                {/* Links */}
                <div className=' flex flex-col space-y-4 text-lg'>

                    <Link onClick={() => setExpanded(false)} href="/" className=' hover:bg-gray-200 dark:hover:bg-black px-2 py-3 rounded-sm flex justify-between items-center'>
                        <p >Dashboard</p>
                        <MdSpaceDashboard
                            className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'

                        />
                    </Link>
                    <Link href="/account" onClick={() => setExpanded(false)} className='  hover:bg-gray-200 dark:hover:bg-black px-2 py-3 rounded-sm flex justify-between items-center' >
                        <p >Account Setting</p>
                        <IoMdSettings
                            className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'

                        />

                    </Link>
                    <div className='  md:block hover:bg-gray-200 dark:hover:bg-black p-2 py-3 flex justify-between  items-center rounded-sm'>
                        <p >Theme</p>
                        <ModeToggle />

                    </div>
                    <div onClick={() => { HandleLogout(); setExpanded(false); }} className=' hover:bg-gray-200 dark:hover:bg-black px-2 py-3 flex justify-between items-center rounded-sm' >
                        <p >Logout</p>
                        <IoIosLogOut
                            className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                        />
                    </div>

                    <hr />
                    {/* Quick Links */}
                    <Link onClick={() => setExpanded(false)} href="/guidence"  >
                        <p>Guidence</p>

                    </Link>
                    <Link onClick={() => setExpanded(false)} href="/resume">
                        <p >Resume</p>
                    </Link>
                    <Link onClick={() => setExpanded(false)} href="/prepare">
                        <p >Prepare</p>

                    </Link>
                    <Link onClick={() => setExpanded(false)} href="/thread">
                        <p >Thread</p>
                    </Link>
                    <hr />
                    <Link onClick={() => setExpanded(false)} href="/support" className='w-[100vw]'>
                        <Button>
                            Support
                            <BiSupport /></Button>
                    </Link>
                </div>
            </div>
        </section >
    </div>
)}

export default NavBar

