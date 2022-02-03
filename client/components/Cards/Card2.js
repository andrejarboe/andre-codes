import React from 'react';

export default function Card2() {
  return (
    <div className="flex items-center py-5 border-b border-gray-900">
      <a className="w-1/3 h-40 overflow-hidden">
        <img
          className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105"
          src="https://cdn.devdojo.com/images/may2021/blog-img-5.jpg"
        />
      </a>
      <div className="w-2/3 pl-5">
        <h2 className="relative mb-3 text-xl font-bold leading-tight text-white">
          <a href="#_">Consoles We Could Have Done Without</a>
        </h2>
        <p className="text-sm text-white opacity-50">
          Its no doubt that in an industry of so much competition, there are
          going to be some failures. Here are the top failed consoles.
        </p>
        <span className="relative flex mt-3 text-xs text-white opacity-90">
          <span className="mr-1 font-semibold">Bob Jenkins</span>·
          <span className="ml-1">October 29, 2021</span>
        </span>
      </div>
    </div>
  );
}
