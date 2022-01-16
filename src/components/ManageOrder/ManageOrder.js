import React, { useEffect, useState } from 'react';


   const ManageOrder = ({order}) => {

    const [manageOrder,setManageOrder]=useState(null);
    const {_id,address,email,name,people,vehicle}=order;
   
    useEffect(()=>{
        fetch(`https://frozen-headland-44864.herokuapp.com/${_id}`)
        .then(res=>res.json())
        .then(data=>setManageOrder(data))
    },[])
      
    

    const handleCancelOrder=()=>{
        fetch(`https://frozen-headland-44864.herokuapp.com/tickets/${_id}`,{
            method:'DELETE'
          
        }).then(res=>res.json())
        .then(data=>{
            alert('deleting your order')
            const remaining=manageOrder.filter(ticketOrder=> ticketOrder._id !== data._id);
            setManageOrder(remaining);
        })

    }
    

  

        
    
    return (
        <div className='bg-amber-500 my-9 flex justify-around items-center'>
            <div  className='py-5'>
            <h2 className='text-white text-3xl py-3'> Booked By  : {name}</h2>
              <p className='text-white text-xl pb-3'>Email : {email}</p>
            </div>
            <div className='py-5'>
            <p className='text-white text-2xl py-2'>Address : {address}</p>
              <p className='text-white text-xl py-2'>Ticket Booked for : {people} peoples</p>
              <p  className='text-white text-xl py2' > Vehicle Type : {vehicle}</p>
            </div>
            <div>
                <button className='bg-slate-800 text-white px-5 py-1  rounded' onClick={handleCancelOrder}>Cancel Order</button>
            </div>
        </div>
    )}

export default ManageOrder;