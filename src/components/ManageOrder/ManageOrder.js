import React, { useEffect, useState } from 'react';


   const ManageOrder = ({order}) => {

    const [manageOrder,setManageOrder]=useState(null);
    const {_id,address,email,name,people,vehicle}=order;
   
    useEffect(()=>{
        fetch(`https://frozen-headland-44864.herokuapp.com/tickets${_id}`)
        .then(res=>res.json())
        .then(data=>setManageOrder(data))
    },[manageOrder])
      
    

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
        <div className='bg-indigo-500 px-5 py-3 mt-9 rounded text-white'>
            <h2>Booked By : {name}</h2>
            <h3>Email : {email}</h3>
            <h3>From : {address}</h3>
            <h3>Seats booked for {people} peoples</h3>
            <h3>Vehicle Type : {vehicle}</h3>
            <button onClick={handleCancelOrder} className='bg-red-500 px-5 py-1 flex mx-auto mt-3 rounded-2xl'>Cancel Order</button>
        </div>
    )}

export default ManageOrder;