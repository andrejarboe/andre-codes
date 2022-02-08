import React from 'react'

export default function Hero1() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
 
      <div className="relative mx-auto max-w-7xl px-8 pt-10">
        <div className="absolute top-0 right-0 -ml-32 hidden h-full w-full translate-x-1/2 translate-y-20 -rotate-12 scale-100 transform bg-gray-800 opacity-90 md:block" />
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="-mt-10 flex w-full flex-col items-start justify-center pt-10 pb-10 md:w-1/2 md:pb-24 md:pr-16">
          
            <h1 className="bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400 bg-clip-text text-6xl font-extrabold text-transparent">
              Your Journey <br />
              Starts Here
            </h1>
            <p className="my-7 text-lg text-gray-400">
              The story about your amazing application starts right here.{' '}
              <br className="hidden xl:block" />
              Believe in the story that you want to see unfold.
            </p>
            <a
              href="#_"
              className="w-full rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-normal text-gray-800 md:w-auto"
            >
              Get Started Now!
            </a>
          </div>
          <div className="relative flex w-full items-center justify-center md:w-1/2 md:pt-0 h-96">
            <div className="absolute w-full p-12 opacity-100">
              <img src="https://cdn.devdojo.com/images/august2021/background-patterns.png" />
            </div>
            {/* <img
              src="https://cdn.devdojo.com/images/august2021/person.png"
              className="relative h-auto h-full w-full max-w-sm md:w-96"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
