// import React from 'react'
import Footer1 from '../Footer/Footer1'
import Navbar1 from '../Navbar/Navbar1'

import React from "react";

// export default function MainLayout1({ children }) {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Navbar1 />
//       {children}
//       {/* put mt-auto on the footer class */}
//       <Footer1 />
//     </div>
//   )
// }

export default function MainLayout({children}: { children: React.ReactNode}) {
  return (
    <>
   
      <div className="flex min-h-screen flex-col">
         <Navbar1 />
         {children}
         {/* put mt-auto on the footer class */}
         <Footer1 />
   
      </div>
    </>
  )
}