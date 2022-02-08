import React from 'react';
import { sanityClient } from '../lib/sanity';
import MainLayout from '../components/Layouts/MainLayout';
import Portfolio from '../components/Portfolio/Portfolio';

const projectsQuery = `*[ _type == 'projects']{
  _id,
  title,
  slug,
  mainImage,
  description,
  tags[] -> {
      title
   }
}`;

export default function projects({ projects }) {
  return (
    <div>
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap mt-10 overflow-hidden">
            <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
              <Portfolio projects={projects} />
            </div>
            {/* about me  */}

            <div className="w-full mt-12 overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0">
              <div className="ml-2 mr-2 md:ml-4">
                <div className="rounded-lg bg-gray-50 p-7">
                  <div className="pb-6 text-left">
                    <h2 className="mb-1 text-lg font-medium text-gray-900">
                      Subscribe to our Newsletter
                    </h2>
                    <span className="block text-xs italic text-gray-500">
                      No Spam. Only one email per week.
                    </span>
                    <form action="">
                      <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                        <input
                          className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                          type="text"
                          name="name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                        <input
                          className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className="mb-5 text-lg font-medium text-gray-900">
                    Categories
                  </h2>
                  <ul>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Lifestyle
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        32
                      </span>
                    </li>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Health
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        41
                      </span>
                    </li>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Gaming
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        27
                      </span>
                    </li>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Travel
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        21
                      </span>
                    </li>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Food
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        15
                      </span>
                    </li>
                    <li className="flex">
                      <a
                        href="#_"
                        className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                      >
                        Business
                      </a>
                      <span className="p-2 text-lg font-thin text-gray-700">
                        28
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  <h2 className="mb-5 text-lg font-medium text-gray-900">
                    Recent Posts
                  </h2>
                  <ul>
                    <li className="mb-5">
                      <a href="#_" className="flex">
                        <div className="w-1/3 overflow-hidden rounded">
                          <img
                            className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                            src="https://cdn.devdojo.com/images/may2021/tails-blog-9.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-2/3 p-2">
                          <h3 className="mb-2 font-serif font-thin text-gray-900">
                            Top Destinations to Visit in the World
                          </h3>
                          <span className="block text-xs font-thin text-gray-800">
                            January 02, 2021
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="mb-5">
                      <a href="#_" className="flex">
                        <div className="w-1/3 overflow-hidden rounded">
                          <img
                            className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                            src="https://cdn.devdojo.com/images/may2021/tails-blog-10.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-2/3 p-2">
                          <h3 className="mb-2 font-serif font-thin text-gray-900">
                            Experience the Future of the 3d Gaming Experience
                          </h3>
                          <span className="block text-xs font-thin text-gray-800">
                            January 04, 2021
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="mb-5">
                      <a href="#_" className="flex">
                        <div className="w-1/3 overflow-hidden rounded">
                          <img
                            className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                            src="https://cdn.devdojo.com/images/may2021/tails-blog-11.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-2/3 p-2">
                          <h3 className="mb-2 font-serif font-thin text-gray-900">
                            Take a Trip to The End of The World
                          </h3>
                          <span className="block text-xs font-thin text-gray-800">
                            January 05, 2021
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END about me  */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}
