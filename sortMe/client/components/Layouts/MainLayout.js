import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function MainLayout(props) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {props.children}
        {/* put mt-auto on the footer class */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
