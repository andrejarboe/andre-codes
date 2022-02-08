import { useState } from 'react';

import Link from "next/link";

export default function Nav() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <nav>
        <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* logo */}
                <div className="">
                    <Link href="/">
                        <span className="text-3xl font-bold cursor-pointer">
                            AJ {''}
                            <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
                        </span>
                    </Link>
                </div>
                {/* primary nav  */}
                <div className="hidden md:flex space-x-3">
                    {/* <Link href="#"><a>Skills</a></Link> */}
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                    {/* <Link href="#"><a>About</a></Link> */}
                    {/* <Link href="#"><a>Blog</a></Link> */}
                    <Link href="/contact"><a>Contact</a></Link>
                    {/* <Link href="/temp"><a>Temp</a></Link> */}
                </div>

                {/* mobile button */}
                <div
                    className="md:hidden flex items-center"
                    // change the boolen value 
                    onClick={() => (setIsToggled(!isToggled))}
                >
                    <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </div>
        {/* mobile menu */}
        {isToggled && 
        <div>
            {/* <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Skills</a></Link> */}
            <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-red-500">Portfolio</a></Link>
            {/* <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">About</a></Link> */}
            {/* <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a></Link> */}
            <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-red-500">Contact</a></Link>
        </div>
        }
    </nav>
    )
}