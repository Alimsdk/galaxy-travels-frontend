import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PackageDetail = () => {
    const [pack,setPack]=useState(null);
    const {user}=useAuth();
    const navigate=useNavigate();
    const {_id}=useParams();
    useEffect(()=>{
        fetch(`https://frozen-headland-44864.herokuapp.com/packages/${_id}`)
        .then(res=>res.json())
        .then(data=>setPack(data))
    },[])
    return (
    <div>
         {
         user?   <div className='flex justify-evenly mt-16 items-center'>
         <div>
             <img className='w-80' src={pack?.img} alt="" />
         </div>
         <div>
             <h2 className='text-5xl'>{pack?.name}</h2>
             <p className='text-sm my-5'>{pack?.slogan}</p>
             <button className='bg-amber-500 px-5 py-1 rounded text-white'>Book Package</button>
         </div>
     </div>: navigate('/login')
     }
    </div>
    );
};

export default PackageDetail;