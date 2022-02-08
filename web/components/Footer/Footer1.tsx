import React from 'react'

export default function Footer1() {
  return (
    // <footer className='mt-auto'>
    //   <h1>Footer</h1>
    // </footer>
    <footer className="mt-auto bg-red-500">
      <div className="container flex flex-col justify-between py-6 px-4 sm:flex-row">
        <p className="font-body text-center text-white md:text-left">
          © Copyright {new Date().getFullYear()}. All right reserved, Andre Jarboe.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          {/* <a href="/">
            <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white" />
          </a> */}
        </div>
      </div>
    </footer>
  )
}
