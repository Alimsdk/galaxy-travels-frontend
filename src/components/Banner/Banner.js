import React from 'react';
import Carousel from 'nuka-carousel';
import './Banner.css'

export default class extends React.Component {
  render() {
    return (
      <Carousel>
     <div id='first-slide' className='slide-img flex justify-center items-center'>
         <div className='px-28'>
         <h2 className='text-5xl  '>Travel  Around The World</h2>
         <p className='mt-5 text-slate-600  sm:px-5 py-2 rounded'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quo dolore nobis error libero hic repudiandae officia quia esse odit, facere, blanditiis numquam minus similique corrupti minima vitae, modi maxime!</p>
         <button className='bg-lime-800 text-white px-5 py-1.5 rounded flex mx-auto mt-9'>Explore More</button>
         </div>
     </div>
     <div id='second-slide' className='slide-img flex justify-center items-center'>
         <div className='px-28'>
         <h2 className='text-5xl'>Travel  Cheap</h2>
         <p className='mt-5 text-slate-600  px-5 py-2 rounded'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quo dolore nobis error libero hic repudiandae officia quia esse odit, facere, blanditiis numquam minus similique corrupti minima vitae, modi maxime!</p>
         <button className=' bg-lime-800 text-white sm:px-5 py-1.5 rounded flex mx-auto mt-9'>Explore More</button>
     </div>
     </div>
     <div id='third-slide' className='slide-img flex justify-center items-center '>
       <div className='px-28'>
       <h2 className='text-5xl '>Travel  Your Desired Destination</h2>
         <p className='mt-5 text-slate-600  px-5 py-2 rounded'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quo dolore nobis error libero hic repudiandae officia quia esse odit, facere, blanditiis numquam minus similique corrupti minima vitae, modi maxime!</p>
         <button className='bg-lime-800 text-white sm:px-5 py-1.5 rounded flex mx-auto mt-9'>Explore More</button>

       </div>
     </div>
  
          </Carousel>
    );
  }
}