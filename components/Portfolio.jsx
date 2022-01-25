import { useState, useEffect } from 'react'
import Link from 'next/link';
import Filter from './Filter/Filter';

export default function Portfolio({ projects, items }) {
    const [tags, setTags] = useState({

        categories: ['All', 'Email', 'Landing Pages']
    })

    const [filter, setFilter] = useState("All");


    const categories = ['All', 'Email', 'Landing Pages'];
    return (
        <div>
            <div className="flex flex-col text-center">
                <h2 className="text-3xl md:text-5xl font-bold">My Portfolio</h2>
                <p>
                    {/* Here are a few selected words displaying my skills */}
                </p>
            </div>
    
            {/* <Filter
                filter={filter}
                setFilter={setFilter}
            /> */}
            {/* cards container */}
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {/* card loop  */}
                {projects.map((project) => (
                    <Link
                        href={`/${project.slug}`}
                    >
                        <div className="cursor-pointer flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover"
                                    src={`/assets/images/${project.featured_image}`}
                                    alt={project.title}
                                />
                            </div>
                            <div className="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    {/* <a class="inline-block mr-2">
                                        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                            REACT
                                        </span>

                                    </a> */}

                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-red-500 hover:text-red-700 ">
                                            {project.title}
                                        </p>
                                        <p className="mt-3 text-base text-white">

                                            {project.description}
                                        </p>
                                    </a>
                                </div>
                                {/* <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a>
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-indigo-400">
                                            <a className="hover:underline">
                                                Roel Aufderehar
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-white">
                                            <time dateTime="2020-03-16">Mar 16, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}
