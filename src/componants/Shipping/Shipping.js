import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => console.log(data);
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
                <input defaultValue={user.displayName} {...register("name")} />
                
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                
                <input placeholder='Address' defaultValue="" {...register("address")} />

                <input placeholder='City' defaultValue="" {...register("City")} />
                <input placeholder='Phone number' defaultValue="" {...register("phone")} />


                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;