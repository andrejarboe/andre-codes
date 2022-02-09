import React from 'react'

export default function Hero1() {
  return (
    // <section className="relative w-full bg-white">
    //   {/* <div className="max-w-7xl mx-auto">
    //       <h1>Hello, I'm Andre Jarboe</h1>
    //         <p>I'm a software engineer based in the beautiful city of Austin, TX.</p>
    //   </div> */}
    //   <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-10 sm:py-20 lg:max-w-7xl lg:flex-row xl:px-8">
    //     <div className="w-full lg:w-1/2">
    //       <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
    //         Hello, I'm Andre Jarboe
    //       </h1>
    //       <p className="mt-8 text-xl text-gray-500">
    //         I'm a software engineer based in the beautiful city of Austin, TX.
    //       </p>
    //       <a
    //         href="#_"
    //         className="mt-8 inline-block w-full rounded-full bg-gray-900 px-8 py-4 text-center text-lg font-medium text-white sm:w-auto cursor-pointer capitalize"
    //       >
    //         View my work
    //       </a>

    //     </div>
    //     <div className="mt-20 w-full sm:w-3/4 lg:mt-0 lg:w-1/2 ">
    //       {/* <img className='max-h-96 mx-auto md:float-right' src="https://cdn.devdojo.com/images/january2022/heronew.png" /> */}
    //     </div>
    //   </div>
    // </section>
    <section className="flex items-center justify-between border-y border-black py-10 lg:py-5">
      <div className="space-y-5 px-4">
        <h1 className="max-w-xl text-6xl">Hello, I'm Andre Jarboe</h1>
        <h2 className='text-xl'>
          I'm a software engineer based in the beautiful city of Austin, TX.
        </h2>
      </div>
      <img
        className="hidden space-y-5 h-60 px-4 md:inline-flex lg:h-96"
        src="/images/pattern.png"
        alt="abstract pattern"
      />
    </section>
  )
}
