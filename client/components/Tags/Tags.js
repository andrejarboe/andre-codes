import React from 'react';

export default function Tags(){

    return (
      <div className="mt-10 md:pl-4">
        <h2 className="mb-5 text-lg font-medium text-gray-900">Categories</h2>
        <ul>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Lifestyle
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">32</span>
          </li>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Health
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">41</span>
          </li>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Gaming
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">27</span>
          </li>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Travel
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">21</span>
          </li>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Food
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">15</span>
          </li>
          <li className="flex">
            <a
              href="#_"
              className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
            >
              Business
            </a>
            <span className="p-2 text-lg font-thin text-gray-700">28</span>
          </li>
        </ul>
      </div>
    );
} 
    