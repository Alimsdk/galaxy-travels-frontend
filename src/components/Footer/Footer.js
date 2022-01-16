import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/calendar.png'

const Footer = () => {
    return (
        <div className='flex sm:flex-row flex-col lg:justify-between l md:flex-col lg:flex-row py-9 bg-slate-800 text-white mt-9 px-8' id='footer'>
            <div className='ml-3'>
                <img className='w-12' src={logo} alt="" />
                <h2>Galaxy Travels</h2>
            </div>
            <div className='flex flex-col'>
                
                     <Link to='/'>Home</Link>
                     <Link to='/'>About</Link>
                     <Link to='/'>Services</Link>
                     <Link to='/'>Our Packages</Link>
                     <Link to='/'>Contact Us</Link>
                
              </div>


                 <div>
                 <address>Saidpur,Nilphamari</address>
                    <address>0172***</address>
                    <address>alimsiddique04@gmail.com</address>
                 </div>
                 
                
         
        </div>
    );
};

export default Footer;