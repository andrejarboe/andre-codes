import React from 'react'

export default function Filter({ setFilter, filter }) {

    return (
        <>
            <nav className="flex mx-auto justify-center flex space-x-6 xl:space-x-8" aria-label="Tabs">
                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"  */}
                <a
                    href="#"
                    aria-current="page"
                    className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                    All Projects
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                    HTML Email
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >
                    Next.js
                </a>
            </nav>
            <nav className="flex mx-auto justify-center flex space-x-6 xl:space-x-8" aria-label="Tabs">
                {filter}
            </nav>
        </>
    )
}
