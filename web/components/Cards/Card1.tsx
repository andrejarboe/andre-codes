import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card1({
  imageUrl = 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg',
  title = 'Card 1',
}) {
  return (
    <Link href="#">
      <a className="w-6xl my-4 flex flex-col overflow-hidden rounded-sm border-orange-200 bg-white shadow-md hover:shadow-lg md:h-60 md:flex-row">
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
            <span className="text-xs font-semibold uppercase text-gray-700">
              Advice
            </span>
          </div>
          <h2 className="font-workSans my-2 text-2xl font-semibold text-gray-700">
            {title}
          </h2>
          <p className="mb-6 max-w-prose flex-grow text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi libero sit nihil tempora, totam reprehenderit aliquam
            beatae obcaecati ratione.
          </p>
          <div className="flex items-center">
            <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-sm">
              <img
                className="h-full w-full object-cover object-bottom"
                src="https://images.pexels.com/photos/10997111/pexels-photo-10997111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="A smiling Satoshi Nakamoto."
              />
            </div>
            <div className="ml-2 text-xs">
              <span className="block font-semibold text-gray-700">
                Andre Jarboe
              </span>

              <span className="pt-2 text-sm font-medium text-gray-400">
                Aug 20, 2021
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}