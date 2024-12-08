import React from 'react'
import MobileNavbar from './mobileNavbar';
import TopNavbar from './topNavbar';
import MainNav from './mainNav';
import BottomNav from './bottomNav';

function Header() {
  return (
   <header className="sticky top-0 w-full bottor-b-[px]">
    <div>
        { /* topNavbar */ }
       <TopNavbar />

        { /*main navbar for*/}
       <MainNav />
        
        { /*bottom navbar */ }
        <BottomNav />

        { /* mobile navbar */ }
        <MobileNavbar />
    </div> 
   </header>
  )
}

export default Header;