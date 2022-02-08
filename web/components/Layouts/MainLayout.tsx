import React from 'react'
import Footer1 from '../Footer/Footer1'
import Navbar1 from '../Navbar/Navbar1'

export default function MainLayout1(props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar1 />
      {props.children}
      {/* put mt-auto on the footer class */}
      <Footer1 />
    </div>
  )
}
