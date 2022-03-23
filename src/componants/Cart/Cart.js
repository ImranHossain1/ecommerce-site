import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    /*/let total = 0;
    for (const product of cart){
        total =total + product.price;
    }*/
    const totalReducer= (previous,product)=> previous+ product.price;
    const total = cart.reduce(totalReducer, 0);

    const shipping = 15;
    const tax= (total+shipping) *10;
    const grandTotal = total+ tax+ shipping;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Order: {cart.length} </h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;