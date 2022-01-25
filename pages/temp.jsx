import { useState } from 'react';

import Link from "next/link"


export default function temp() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            {/* nav bar  */}
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
                            <Link href="#"><a>Skills</a></Link>
                            <Link href="#"><a>Portfolio</a></Link>
                            <Link href="#"><a>About</a></Link>
                            <Link href="#"><a>Blog</a></Link>
                            <Link href="#"><a>Contact</a></Link>
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
                        <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Skills</a></Link>
                        <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Portfolio</a></Link>
                        <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">About</a></Link>
                        <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a></Link>
                        <Link href="#"><a className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a></Link>
                    </div>
                }
            </nav>
            {/* <header className="min-h-screen flex justify-items-start justify-center background">

            </header> */}
            <div className="mx-auto mx-auto max-w-7xl">
                {/* hero  */}
                <div className="hero w-full flex flex-col px-8 pt-24 pb-20 text-left md:pt-48">
                    <div className="px-4">

                        <h1 className="text-6xl font-bold ">Hi, I'm Andre Jarboe.</h1>
                        <h1 className="text-4xl font-bold pt-4">I am a full stack web developer.</h1>
                        {/* <Link href="#"><a className="pt-4 text-xl font-light text-true-gray-500 antialiased">Contact</a></Link> */}
                    </div>

                    <div className="rounded-md shadow w-60 pt-8 px-4">
                        <Link
                            href="#"
                        >
                            <a
                                className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                Contact Me
                            </a>
                        </Link>
                    </div>
                </div>
                {/* hero end  */}
            </div>


            {/* <div className="mt-12 p-4 lg:mt-32 lg:ml-20 text-left">
                <bottom
                    type="button"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </bottom>
            </div> */}
            {/* layout  */}
            <div className="mx-auto mx-auto max-w-7xl px-4 h-screen">

                {/* Portfolio */}
                <div className="w-full">
                    <h2 className="text-6xl font-bold"></h2>
                    <h2 >Portfolio</h2>
                </div>
                {/* Portfolio end */}
            </div>
        </>
    )
}
