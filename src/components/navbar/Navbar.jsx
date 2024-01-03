import React from 'react';
import NavbarLeft from './navbarItems/NavbarLeft';
import NavbarRight from './navbarItems/NavbarRight';

const Navbar = () => {
  return (
    <nav className='flex flex-wrap md:flex-nowrap items-center justify-between p-4 '>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
}

export default Navbar;
