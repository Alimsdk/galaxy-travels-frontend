import React from 'react';

const Quality = ({quality}) => {
    const {title,desc,icon}=quality;
    return (
        <div className='text-white bg-slate-700 px-5 rounded py-4 shadow-lg mt-8 mb-4'>
            <img className='w-12 flex mx-auto' src={icon} alt="" />
            <h2 className='text-center text-xl mt-3'>{title}</h2>
            <p className='text-xs mt-3'>{desc}</p>
        </div>
    );
};

export default Quality;