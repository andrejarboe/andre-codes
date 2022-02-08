import React from 'react';
import { urlFor, PortableText } from '../../lib/sanity';
import { FaArrowRight } from 'react-icons/fa';



const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo excepturi quibusdam quas natus eum velit. Labore quam quibusdam sed fuga deleniti corrupti repellat ullam iusto, provident, soluta harum odio?';

export default function Card1({ imgUrl, imgAlt, title='Title of card', description=lorem, tags }) {
  return (
    <div className="fbg-white rounded-lg shadow-2xl md:flex">
      {/* Card Cover */}
      <div className="overflow-hidden h-56 md:h-full md:w-1/2 rounded-t-lg  md:rounded-t-none md:rounded-l-lg">
        <img
          src={
            imgUrl
              ? project.urlFor
              : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
          }
          alt={imgAlt}
        />
      </div>
      {/* END Card Cover */}
      <p></p>
      {/* Card Body */}
      <div className="p-5 lg:p-6 grow w-full">
        {/* <p className="font-semibold mb-1 text-indigo-500">Tags</p> */}
        <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-red-700 bg-red-200 mx-1">
          React
        </div>
        <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-red-700 bg-red-200 mx-1">
          HTML
        </div>
        <h3 className="font-semibold text-xl mb-2 md:ml-1 py-4">{title}</h3>
        <p>
          <PortableText blocks={description} className="" />
        </p>
        <p className='flex justify-items-center items-center'>
          Continue Reading
          <FaArrowRight />
        </p>
      </div>
      {/* END Card Body */}
    </div>
  );
}
