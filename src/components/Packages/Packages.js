import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages,setPackages]=useState(null);
    useEffect(()=>{
        fetch('https://frozen-headland-44864.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data));
    },[])
    return (
      <div className='bg-slate-600 mt-9' id='packages'>
          <h2 className='text-3xl text-white text-center'>Our Crazy Packages!</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 '>
         {
             packages?.map(pack=><Package pack={pack} key={pack.key}></Package>)
         }
        </div>
      </div>
    );
};

export default Packages;