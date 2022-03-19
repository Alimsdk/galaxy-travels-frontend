import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logoImg from '../../icons/calendar.png'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}=useAuth();
    const [mobileMenu,setMobileMenu]=useState(false);
    const navigate=useNavigate();
   
    const handleMobileMenu=()=>{
        setMobileMenu(!mobileMenu);
    }

   

    return (
        <div>
            <nav className="bg-gray-800" id='header'>
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button onClick={handleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
        
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
       
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-between sm:items-stretch ">
        <div className="flex-shrink-0 flex items-center">
          <img className="block h-8 w-auto ml-12" src={logoImg} alt="Travel Galaxy"/>
          <h2 className='text-white ml-3'>GALAXY TRAVELS</h2>
        </div>
        <div className="hidden sm:block ">
          <div className="flex  space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <HashLink to="/home#header" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</HashLink>

            <HashLink to="/home#qualities" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</HashLink>

            <HashLink as={HashLink} to="/home#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</HashLink>

            <HashLink as={HashLink} to="/home#packages" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Packages</HashLink>
        
            <HashLink as={HashLink} to="/home#footer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</HashLink>

        { !user ?  <div>
          <HashLink className="text-white py-2 underline  underline-offset-1" to='login'>LogIn</HashLink>

            <button className="px-6 ml-3 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-500 border-amber-400 shadow-amber-300/30 hover:bg-amber-500 hover:text-cyan-100" onClick={()=>navigate('register')}>Register</button>
        </div> :
       <div>
          <h2 className='text-white'>Hello, {user?.displayName}</h2>
          <button className='border-black-300 bg-amber-400 px-3  rounded  text-white' onClick={logOut}>LogOut</button>
          <button className='bg-amber-600 text-amber-400 rounded ml-3 px-3' onClick={()=>navigate('/manageOrders')}>My Orders</button>

       </div>
        }

          </div>
        </div>
      </div>
     
    </div>
  </div>

  {/* - Mobile menu, show/hide based on menu state.  */}

 { mobileMenu && <div className="sm:hidden text-center" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <HashLink to="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</HashLink>

      <HashLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</HashLink>

      <HashLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</HashLink>

      <HashLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Packages</HashLink>
     
      <HashLink to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</HashLink>
   
      { !user ?  <div>

          <HashLink className="text-white py-2 underline  underline-offset-1" to='login'>LogIn</HashLink>
            <button className="px-6 ml-3 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-500 border-amber-400 shadow-amber-300/30 hover:bg-amber-500 hover:text-cyan-100" onClick={()=>navigate('register')}>Register</button>
        </div> :
       <div>
          <h2 className='text-white'>Hello, {user?.displayName}</h2>
          <button className='border-black-300 bg-amber-400 px-3  rounded  text-white' onClick={logOut}>LogOut</button>
          <button className='bg-amber-600 text-amber-400 rounded ml-3 px-3' onClick={()=>navigate('/manageOrders')}>My Orders</button>
       </div>
        }
    </div>
  </div>}
</nav>
        </div>
    );
};

export default Header;