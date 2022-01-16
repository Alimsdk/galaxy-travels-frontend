import React, {  useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const BookTickets = () => {
    const [customer,setCustomer]=useState(null);
   const {user}=useAuth();
     let customerInfo={}

    const handleNameChange=e=>{
        customerInfo.name=e.target.value;
    } 
    const handleEmailChange=e=>{
        customerInfo.email=e.target.value;
    } 
    const handleAddressChange=e=>{
        customerInfo.address=e.target.value;
    } 
    const handleVehicleChange=e=>{
        customerInfo.vehicle=e.target.value;
    } 
    const handleDateChange=e=>{
        customerInfo.date=e.target.value;
    } 
    const handlePeople=e=>{
        customerInfo.people=e.target.value;
    } 

    const handleTicketBooking=(e)=>{
      
         
        fetch('https://frozen-headland-44864.herokuapp.com/tickets',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(customerInfo)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert(`congratulatins! you booked ${customerInfo.people} tickets` )
            
        })
    }


    return (
        <section className='grid  mx-auto place-items-center bg-slate-700 py-5 lg:w-2/3 rounded-3xl transform transition -translate-y-9 '>
            <h2 className='text-center text-white text-3xl font-bold'>Book Tickets</h2>
            <div className='flex flex-col sm:flex-row sm:justify-between '>
                <input className='bg-slate-200 mt-5 mx-5 px-3 py-1 rounded' onBlur={handleNameChange} type="text" placeholder='Your Name' required/>
                <input className='bg-slate-200 mt-5 mx-5 px-3 py-1 rounded' onBlur={handleEmailChange}  type="email"  name="" id=""placeholder='Your Email' required/>
            </div>
             <div className=''>
                 <input className='bg-slate-200 mt-5 mx-5 px-3 py-1 rounded' onBlur={handleAddressChange} type="text"  placeholder='Your Address' required/>
                 <select className='bg-slate-300 mt-5 mx-5 px-3 py-1 rounded' onBlur={handleVehicleChange} name="tickets" id="tickets">
    <option value="Flight">Flight Ticket</option>
    <option value="Train">Train Ticket</option>
    <option value="Bus">Bus Ticket</option>
    <option value="Launch">Launch Ticket</option>
  </select>
             </div>
             <div className='flex flex-col sm:flex-row sm:justify-between'>
                 <input className='bg-slate-200 mt-5 mx-5 rounded' onBlur={handleDateChange}  type="date" name="" id="" />
                <label htmlFor="people ml-4 mr-2 " className='text-white'>Person</label>
                 <select name="people" id="people" onBlur={handlePeople} className='bg-slate-200 mt-5 px-3 py-1 rounded'>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                 </select>
         
         </div>
         {  user?  <input type="submit" placeholder='Buy Now' onClick={handleTicketBooking} className=' bg-green-600 px-7 py-1 rounded-2xl  mt-5 flex mx-auto text-white cursor-pointer' />
          : <div className='mt-5'>
              <p className='text-white text-center text-red-600'>*login first to book tickets</p>

          </div>  }
         
        </section>
    );
};

export default BookTickets;