import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]= useState(null);
    useEffect(()=>{
        fetch('https://frozen-headland-44864.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
       <div className='bg-amber-200' id='services'>
        <h2 className='text-3xl text-indigo-600 text-center font-bold pt-3 pb-3 border-b-4 border-indigo-300'>Our Services</h2>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-x-10 gap-y-4 py-10 px-9 relative'>
       
         {
            services?.map(service=><Service service={service} key={service.key}/>)
        }
      </div>
       </div>
    );
};

export default Services;