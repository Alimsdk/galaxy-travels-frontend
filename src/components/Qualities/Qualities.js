import React, { useEffect, useState } from 'react';
import Quality from '../Quality/Quality';

const Qualities = () => {
    const [qualities,setQualities]=useState(null);
    useEffect(()=>{
        fetch('https://frozen-headland-44864.herokuapp.com/aboutus')
        .then(res=>res.json())
        .then(data=>setQualities(data));
    },[])
    return (
        <div className='bg-indigo-500 px-9 py-5 mt-9' id='qualities'>
            <h2 className='text-white text-3xl text-center font-bold mb-3'>Why Us ? </h2>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-x-16'>
            {
                qualities?.map(quality=><Quality quality={quality} key={quality._id}></Quality>)
            }
        </div>
        </div>
    );
};

export default Qualities;