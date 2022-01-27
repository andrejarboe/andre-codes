import React from 'react';

export default function Card3() {
  return (
    <a
      href="/why-your-home-needs-a-deck.html"
      className="flex flex-col lg:flex-row gap-x-12 p-2 lg:h-60 my-20 border-2 rounded-sm shadow-sm overflow-hidden hover:shadow-md border-gray-200"
    >
      <img
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg"
        alt="A deck"
      />
      <div className="">
        <div className="mt-2">
          <span className="uppercase font-semibold text-gray-700 text-xs">
            Advice
          </span>
          <span className="text-gray-400 mx-2 font-medium text-sm">
            Jan 15, 2021
          </span>
        </div>
        <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
          Why Your Home Needs a Deck
        </h2>
        <p className="text-sm mb-6 flex-grow max-w-prose text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          eligendi libero sit nihil tempora, totam reprehenderit aliquam beatae
          obcaecati ratione.
        </p>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-sm overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover object-bottom"
              src="https://randomuser.me/api/portraits/women/94.jpg"
              alt="A smiling Satoshi Nakamoto."
            />
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
  );
}
