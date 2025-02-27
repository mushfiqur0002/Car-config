import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const Navbar = () => {
    // adding states
    const[isActive, setIsActive] = useState(false);

    // add the active class
    const toggleActiveClass =()=>{
        setIsActive(!isActive);
    };

  return (
    <nav className='bg-white text-gray-300 p-4 fixed w-full top-0 z-10 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
                <Link to='/' className='flex items-center'>
                  {/* Adjust size */}
                  <img src={logo} alt='logo' className='h-10 w-1/2'/> 
                </Link>
            {/* Desktop Menu */}
            <div className='hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2'>
                <Link to='/config' className='hover:text-black text-gray-600 font-bold'>
                    Configurator
                </Link>
                <Link to='/' className='hover:text-black text-gray-600 font-bold'>
                    Energy
                </Link>
                <Link to='/' className='hover:text-black  text-gray-600 font-bold'>
                    Discover
                </Link>
                <Link to='/' className='hover:text-black  text-gray-600 font-bold'>
                    Shop
                </Link>
            </div>
            {/* Mobile Menu Button*/}
            <button className='lg:hidden' onClick={toggleActiveClass}>
                {isActive  ? <XMarkIcon className="w-8 h-8"/> : <Bars3Icon className="w-8 h-8"/>}
            </button>
        </div>

        {/* Mobile Menu */}
        {isActive && (
        <div className="lg:hidden bg-gray-800 p-4 absolute top-16 left-0 w-full text-center">
          <Link to="/config" className="block py-2" onClick={() => setIsActive(false)}>Configurator</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;