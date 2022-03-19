import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders,setOrders]=useState(null);
    useEffect(()=>{
        fetch('https://frozen-headland-44864.herokuapp.com/tickets')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className='grid grid-cols-2 gap-x-20 gap-y-12 sm:mx-9'>
       
            {
                orders?.map(order=><ManageOrder order={order} key={order._id}></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;