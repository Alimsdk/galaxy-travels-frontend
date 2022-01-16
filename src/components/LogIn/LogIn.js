import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../icons/calendar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
  const {user,signInUsingGoogle,signInUsingFacebook}=useAuth();
  const navigate=useNavigate();

    return (
        <div>
       {
         !user?
         <div>
                <div className='flex flex-col mx-auto text-center'>
   <h2  className='mt-9'>Please LogIn Using :</h2>
<div>
<button className='bg-amber-300 px-4 py-1  mx-auto rounded mt-5' onClick={signInUsingGoogle}> <FontAwesomeIcon icon={faGoogle} />  Google</button>
  <button className='bg-amber-300 px-4 py-1 mx-auto rounded mt-5 ml-5' onClick={signInUsingFacebook} > <FontAwesomeIcon icon={faFacebook} />  Facebook</button>
</div>
<h4 className='mt-5'>______________ or continue with _____________</h4>
</div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src={logo} alt="Galaxy Travels"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
       New user ? <Link className='text-amber-600' to='/register'>Register Now </Link>
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" >
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"/>
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
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <!-- Heroicon name: solid/lock-closed --> */}
            <svg className="h-5 w-5 text-amber-500 group-hover:text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
         </div> : navigate('/home')
       }
        </div>
    );
};

export default LogIn;