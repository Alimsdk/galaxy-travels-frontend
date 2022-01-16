import React from 'react';
import { useNavigate } from 'react-router-dom';
const Package = ({pack}) => {
    const {_id,name,slogan,img}=pack;
    const navigate=useNavigate();
    const handlePackage=(id)=>{
      navigate(`/package/${id}`)
    }
    return (
        <div className='bg-white mx-5 my-2 rounded p-3'>
            <img className='w-72' src={img} alt="" />
            <div id="details" >
            <h2 className='text-2xl my-1.5'>{name}</h2>
            <p className='text-sm text-slate-600 mb-1.5'>{slogan}</p>
            <button type="button" onClick={()=>handlePackage(_id)}
    className="inline-flex items-center px-3 py-1 text-sm text-center rounded text-cyan-500 bg-cyan-100 hover:bg-cyan-200">
   Our Packages
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 mt-0.5" fill="none" viewBox="0 0 24 24"
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>

            </div>
        </div>
    );
};

export default Package;