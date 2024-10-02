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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SlBell } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react"
import { IoClose } from "react-icons/io5";
import { Button } from './button'
import { ModeToggle } from './toggle'
import { IoIosLogOut } from "react-icons/io";
import { MdSpaceDashboard, MdSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";













function NavBar() {
    const [expanded, setExpanded] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)
    function HandleLogout() {
        // Logout logic here
        // setExpanded(false)
    }

    return (
        <div>
            <section>
                <div className='w-full p-2 md:mt-5 md:px-7 flex items-center justify-between'>
                    {/* Logo */}
                    <div>
                        {/* <Image
                        src={Logo}
                        alt="Logo"
                        width={60}

                    /> */}
                        <Link href="/">

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
                        <SlBell
                            className=' hidden md:block lg:block rounded-xl h-9 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                        />
                        <IoClose
                            className={`${expanded ? ' ease-in block' : 'hidden'} md:hidden lg:hidden rounded-xl h-12 text-red-500 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                            onClick={() => setExpanded(false)}
                        />
                        <div className=" hidden md:block">

                        <ModeToggle  />
                        </div>

                        <HiOutlineMenuAlt3
                            className={` ${expanded ? 'hidden' : 'block'} md:hidden lg:hidden rounded-xl h-12 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                            onClick={() => setExpanded(true)}
                        />

                        <div>

                        </div>
                        {/* Profile / AccountIcon */}
                        <Avatar className="hidden md:block">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                </div>
            </section>
            {/* Mobile menu */}
            <section className={`  flex  z-30 ${expanded ? 'block ease-in ' : 'hidden'}`} >
                <div className=' bg-gray-100  dark:bg-slate-900 rounded-sm h-screen absolute  right-0  w-full p-3 px-5 flex flex-col justify-between'>
                    <div className=" space-y-2  px-6   ">
                        {/* login button */}
                        <Button className={`${loggedIn ? 'hidden' : 'block'}`} >Login/SignUp</Button>
                        {/* avatar if loggedIn */}
                        <div className={`${loggedIn ? 'block' : 'hidden'} flex items-center space-x-4 px-3`} >



                            <Avatar className={``}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            {/* Add user name here */}
                            <p className=' font-bold  text-lg'>Hi, Sumit</p>
                        </div>
                        <hr />
                        {/* Links */}
                        <div className=' flex flex-col space-y-4 text-lg'>

                            <Link onClick={()=> setExpanded(false)}  href="/" className=' hover:bg-gray-200 dark:hover:bg-black px-2 py-3 rounded-sm flex justify-between items-center'>
                                <p >Dashboard</p>
                                <MdSpaceDashboard
                                        className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'

                                />
                            </Link>
                            <Link href="/account" onClick={()=> setExpanded(false)} className='  hover:bg-gray-200 dark:hover:bg-black px-2 py-3 rounded-sm flex justify-between items-center' >
                                <p >Account Setting</p>
                                <IoMdSettings 
                                    className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'

                                />

                            </Link>
                            <div className='  md:block hover:bg-gray-200 dark:hover:bg-black p-2 py-3 flex justify-between  items-center rounded-sm'>
                                <p >Theme</p>
                                <ModeToggle  />

                            </div>
                            <div onClick={()=>{HandleLogout(); setExpanded(false);}}  className=' hover:bg-gray-200 dark:hover:bg-black px-2 py-3 flex justify-between items-center rounded-sm' >
                                <p >Logout</p>
                                <IoIosLogOut
                                    className='rounded-md h-10 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                                />
                            </div>

                            <hr />
                            {/* Quick Links */}
                            <Link onClick={()=> setExpanded(false)} href="/guidence"  >
                                <p>Guidence</p>

                            </Link>
                            <Link onClick={()=> setExpanded(false)} href="/resume">
                                <p >Resume</p>
                            </Link>
                            <Link onClick={()=> setExpanded(false)} href="/prepare">
                                <p >Prepare</p>

                            </Link>
                            <Link onClick={()=> setExpanded(false)} href="/thread">
                                <p >Thread</p>
                            </Link>
                            <hr />
                            <Link onClick={()=> setExpanded(false)} href="/support" className='w-[100vw]'>
                            <Button> 
                            Support
                           <BiSupport /></Button>
                            </Link>
                            
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default NavBar