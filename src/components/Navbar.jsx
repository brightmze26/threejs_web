import { NavLink } from "react-router-dom";

import logo from "../assets/images/astronaut.svg";

const Navbar = () => {
  return (
    <header className='header '>
      <NavLink to='/'>
        
      <img src={logo} alt='logo' className='w-18 h-12 object-contain ' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/discuss' className={({ isActive }) => isActive ? "text-blue-600" : "text-red-600"} >
          Discussion
        </NavLink>
        <NavLink to='/question' className={({ isActive }) => isActive ? "text-blue-600" : "text-red-600"}>
          Question
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;