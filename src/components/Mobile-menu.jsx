import React from 'react'
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
import Link from 'next/link'
import Image from 'next/image'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


function MobileMenu() {
    return (
        <div className=' bg-slate-200  w-3/4  '>
            <section >
                <div className="flex flex-col space-y-3 items-center ">
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
            </section>
        </div>
    )
}

export default MobileMenu