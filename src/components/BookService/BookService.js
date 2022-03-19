import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const BookService = () => {
    const [service,setService]=useState(null);
    const {user}=useAuth();
    const {_id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`https://frozen-headland-44864.herokuapp.com/services/${_id}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    
    return (
    <div>
           { user?<div className='mt-16 flex justify-evenly items-center'>
         <div>
         <img className='w-72' src={service?.icon} alt="" />
         </div>
            <div>
            <h2 className='text-6xl'>{service?.name}</h2>
            <p className='text-sm mt-3'>{service?.slogan}</p>
            <button className='bg-pink-300 px-5 py-1.5 rounded mt-5'>Book Now</button>
            </div>
        </div> : navigate('/login')  }
    </div>
    );
};

export default BookService;