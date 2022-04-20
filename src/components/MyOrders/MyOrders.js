import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[])
    return (
        <div>
            <h2>You have placed: {orders.length} orders</h2>
            <ul>
                {
                    orders.map(order => <li key={order._id}>
                        {order.name}: {order.email}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;