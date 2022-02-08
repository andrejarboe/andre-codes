import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card3({
  imageUrl = 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg',
  title
}) {
  return (
    
    <Link href="#">
      <a className="flex flex-col md:flex-row md:h-60 my-4 rounded-sm overflow-hidden shadow-md hover:shadow-lg border-orange-200 bg-white w-6xl">
        <div className="h-60 md:h-auto md:w-2/5">
          {/* <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="A man sitting alone in a cafe waiting for someone who will never show up."
          /> */}
          <div className="relative h-60">
            <Image
              src={imageUrl}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="object-top" // just an example
            />
          </div>
        </div>
        <div className="p-2">
          <div className="mt-2">
            <span className="uppercase font-semibold text-gray-700 text-xs">
              Advice
            </span>
            <span className="text-gray-400 mx-2 font-medium text-sm">
              Aug 20, 2021
            </span>
          </div>
          <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
            {title}
          </h2>
          <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi libero sit nihil tempora, totam reprehenderit aliquam
            beatae obcaecati ratione.
          </p>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
              {/* <img
                className="w-full h-full object-cover object-bottom"
                src="./images/writer-3.png"
                alt="A smiling Satoshi Nakamoto."
              /> */}
            </div>
            <div className="ml-2 text-xs">
              <span className="block font-semibold text-gray-700">
                Satoshi Nakamoto
              </span>
              <span className="block font-medium text-gray-500">
                Chief Technical Writer
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
