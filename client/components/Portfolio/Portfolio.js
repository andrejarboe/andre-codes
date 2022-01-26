import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

      {/* new card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects?.length > 0 &&
          projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <a className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                {/* Card Cover */}
                <div>
                  {/* <img
                    src={
                      urlFor(project.mainImage).url()
                        ? urlFor(project.mainImage).url()
                        : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
                    }
                    alt={project.title}
                  /> */}
                  <Image
                    // loader={myLoader}
                    src={
                      urlFor(project.mainImage).url()
                        ? urlFor(project.mainImage).url()
                        : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
                    }
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
                {/* END Card Cover */}
                {/* Card Body */}
                {/* END Card Body */}
              </a>
            </Link>
          ))}

        {/* Card */}
        <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
          {/* Card Cover */}
          <div>
            {/* <img
              src="https://source.unsplash.com/68KjM0kfsVo/800x450"
              alt="Story Image"
            /> */}
          </div>
          {/* END Card Cover */}
          {/* Card Body */}
          <div className="p-5 lg:p-6 grow w-full">
            <p className="font-semibold mb-1 text-indigo-500">Stories</p>
            <h3 className="font-semibold text-xl mb-2">
              How to find the best coffee
            </h3>
            <p>
              Inventore molestiae aliquam hic, adipisci blanditiis provident
              iusto rerum. Asperiores deserunt quae qui repellat assumenda.
            </p>
          </div>
          {/* END Card Body */}
          {/* Card Footer */}
          <div className="py-4 px-5 lg:px-6 w-full flex items-center bg-gray-50">
            <div className="mr-4">
              <img
                src="https://source.unsplash.com/mEZ3PoFGs_k/160x160"
                alt="Author Avatar"
                className="inline-block w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Shana Arellano</p>
              <p className="text-gray-500 text-sm">May 6, 2020 ∙ 10 min read</p>
            </div>
          </div>
          {/* END Card Footer */}
        </div>
        {/* END Card */}
      </div>
    </div>
  );
}
