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








function NavBar() {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <section>
                <div className='w-full p-2 md:mt-5 md:px-7 flex items-center justify-between'>
                    {/* Logo */}
                    <div>
                        {/* <Image
                        src={Logo}
                        alt="Logo"
                        width={60}

                    /> */}
                        <h1 className=' text-2xl md:text-3xl font-bold'>Carrier Connect</h1>
                    </div>
                    {/* Menu */}
                    <div className=' flex items-center space-x-4'>
                        <div className=' hidden lg:block md:block'>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <Link href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                    <Link href="/">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Support
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
                            className={`${expanded ? ' ease-in block':'hidden'} md:hidden lg:hidden rounded-xl h-14 text-red-500 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                            onClick={()=> setExpanded(false)}
                         />

                        <HiOutlineMenuAlt3
                            className={` ${expanded ? 'hidden':'block'} md:hidden lg:hidden rounded-xl h-12 w-max cursor-pointer items-center justify-center  bg-background  p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                            onClick={()=> setExpanded(true)}
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
            <section className={` flex  z-30 ${expanded ? 'block ease-in ' : 'hidden'}`} >
                <div className=' bg-slate-200 h-[100%] absolute  right-0  w-[50vw] px-5 flex flex-col justify-between'>
                    <div className="flex flex-col space-y-3   ">
                        <Link href="/">
                            Documentation

                        </Link>
                        <Link href="/">
                            About

                        </Link>
                        <Link href="/">
                            Support

                        </Link>
                    </div>
                    <div>
                    <Link href="/">
                            Support

                        </Link>
                    </div>
                </div>
            </section>
        </>

    )
}

export default NavBar