import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

export default function Portfolio({ projects }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl uppercase text-center font-semibold py-6">
        Check out my Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects?.length > 0 &&
          projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <a className="shadow-lg">
                <div
                  style={{
                    backgroundImage: `url(${urlFor(project.mainImage).url()})`,
                    alt: `${project.title}`,
                  }}
                  className="bg-top bg-cover bg-no-repeat h-72 relative sm:h-84 lg:h-64 xl:h-72 "
                >
                  <span className="bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity group-hover:opacity-50 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to" />
                  <span className="font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 xl:py-8 px-5">
                  <span className="font-body font-semibold text-lg text-black block">
                    {project.title}
                  </span>
                  <span className="font-body text-grey-20 pt-2 block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}
