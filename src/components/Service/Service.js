import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name,slogan,icon}=service;
    const navigate=useNavigate();

    const handleService=(id)=>{
          navigate(`/service/${id}`);
    }
    
    return (
        <div className='bg-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-indigo-500'>
            <img className='w-16 mx-auto' src={icon} alt="" />
            <h2 className='text-2xl text-center'>{name}</h2>
            <p className='text-sm text-center'>{slogan}</p>
            <button className='bg-indigo-500 px-4 py-1 rounded text-white mt-3 flex mx-auto' onClick={()=>handleService(_id)}>Book {name}</button>
        </div>
    );
};

export default Service;