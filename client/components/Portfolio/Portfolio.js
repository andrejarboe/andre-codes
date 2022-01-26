import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

export default function Portfolio({ projects }) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl uppercase text-center font-semibold py-6">
        Check out my Portfolio
      </h1>

      {/* Card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects?.length > 0 &&
          projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <a className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                {/* Card Cover */}
                <div className="overflow-hidden h-56">
                  <img
                    src={
                      urlFor(project.mainImage).url()
                        ? urlFor(project.mainImage).url()
                        : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
                    }
                    alt={project.title}
                  />
                </div>
                {/* END Card Cover */}
                {/* Card Body */}
                <div className="p-5 lg:p-6 grow w-full">
                  {/* <p className="font-semibold mb-1 text-indigo-500">Tags</p> */}
                  <h3 className="font-semibold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p>
                    Inventore molestiae aliquam hic, adipisci blanditiis
                    provident iusto rerum. Asperiores deserunt quae qui repellat
                    assumenda.
                  </p>
                </div>
                {/* END Card Body */}
              </a>
            </Link>
          ))}
      </div>
      {/* END Card */}
    </div>
  );
}
