import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';

const Shipment = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);

    // const navigate = useNavigate();
    const onSubmit = data =>{
        const savedCart= getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            //console.log(result)
             if(result.insertedId){
                alert('order processed successfully');
                deleteShoppingCart();
                reset();
            } 
        })
        //event.preventDefault();
        //const shipping = {name, email, address, phone};
        //console.log(data);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Your Shipping Info</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input defaultValue={user?.displayName} {...register("name")} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className='error'>This field is required</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input placeholder='Address' defaultValue="" {...register("address")} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input placeholder='City' defaultValue="" {...register("city")} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input placeholder='Phone number' defaultValue="" {...register("phone")} />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;