import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../icons/calendar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const {user,signInUsingGoogle,signInUsingFacebook}=useAuth();
  const navigate=useNavigate();
  const formButton=()=>{
    alert('form authentication is invalid now! ')
  }
    return (
        <div className='mb-5'>
   
           {!user?<div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={logo} alt="Galaxy Travels"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create New Account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Already Registered? <Link className='text-indigo-500' to='/login'>LogIn Now!</Link>
        
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">Email address</label>
          <input id="name" name="name" type="text" autoComplete="" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Name"/>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" nme="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
        <div>
          <label htmlFor="password2" className="sr-only">Password</label>
          <input id="password2" name="password2" type="password"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Re-Enter Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-amber-600 hover:text-amber-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button onClick={formButton} type="submit"  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <!-- Heroicon name: solid/lock-closed --> */}
            <svg className="h-5 w-5 text-white group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Register Now!
        </button>
      </div>
    </form>
  </div>
</div>
<div className='flex flex-col mx-auto text-center'>
<h4>______________ or continue with _____________</h4>
<div>
<button className='bg-amber-300 px-4 py-1  mx-auto rounded mt-5' onClick={signInUsingGoogle}><FontAwesomeIcon icon={faGoogle} /> Google</button>
  <button className='bg-amber-300 px-4 py-1  mx-auto rounded mt-5 ml-5' onClick={signInUsingFacebook} ><FontAwesomeIcon icon={faFacebook} />Facebook</button>
</div>
</div>
           </div>: navigate('/home')
}
        </div>
    );
};

export default Register;