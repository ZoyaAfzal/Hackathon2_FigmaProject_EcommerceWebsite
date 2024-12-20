import React from 'react'
import MobileNavbar from './mobileNavbar';
import BottomNav from './bottomNav';

function Header() {
  return (
   <header className=" top-0 w-full bottor-b-[px]">
    <div>     
        { /*bottom navbar */ }
        <BottomNav />

        { /* mobile navbar */ }
        <MobileNavbar />
    </div> 
   </header>
  )
}

export default Header;