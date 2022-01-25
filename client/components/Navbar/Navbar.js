import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const data = {
  company: 'Andre Jarboe',
  transparent: false,
  siteMap: [
    { name: 'Home', href: '/' },
    { name: 'projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Navbar(
  {
    //   transparent,
    //   siteMap,
    //   logo,
    //   company,
    //   siteData,
  }
) {
  const [show, setShow] = useState(false);

  const { transparent, siteMap, logo, company, siteData } = data;
  console.log('company: ' + company);
  console.log('siteM ' + company);
  return (
    <nav className="text-gray-600 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col justify-between px-4 py-4 md:flex-row md:py-6">
        {/* left header  */}
        <div
          className={
            'flex items-center justify-between pb-4 md:pb-0' +
            ' ' +
            (show ? 'pb-4' : 'pb-0')
          }
        >
          <Link href="/">
            <a className="text-2xl font-bold text-red-500 drop-shadow-2xl">
              {company}
            </a>
          </Link>
          <button
            onClick={() => setShow(!show)}
            className="flex justify-center items-center md:hidden"
          >
            <FaBars className="h-8 w-auto text-2xl text-red-500 flex items-center justify-center " />
          </button>
        </div>
        {/* right header */}
        <div
          className={
            'flex flex-col md:flex-row md:flex items-center justify-end text-center  md:space-x-4 space-y-4 md:space-y-0 capitalize' +
            ' ' +
            (show ? 'md:hidden' : 'md:flex')
          }
        >
          {siteMap.map((link, index, siteMap) => {
            if (index === siteMap.length - 1) {
              return (
                <div className="w-full border-t pt-6 pb-4 md:border-t-0 md:p-0">
                  <Link key={index} href={link.href}>
                    <a className="p-3 bg-red-300 hover:bg-red-200 text-red-700 hover:text-red-600 rounded shadow hover:shadow-xl transition duration-500">
                      {link.name}
                    </a>
                  </Link>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={link.href}
                  activeClassName="text-purple-600"
                >
                  <a className="hover:text-gray-900 font-bold w-full border-t pt-4 md:border-t-0 md:pt-0">
                    {link.name}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}
