import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders,setOrders]=useState(null);
    useEffect(()=>{
        fetch('https://frozen-headland-44864.herokuapp.com/tickets')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
       
            {
                orders?.map(order=><ManageOrder order={order} key={order._id}></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;