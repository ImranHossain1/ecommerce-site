import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    let navigate = useNavigate();

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder =(e)=>{
        e.preventDefault();
        // setCart([]);
        // clearTheCart();
        navigate('/shipping');

    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product=><ReviewItem 
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className='btn-regular'>Proceed to Shipping</button>
                </Cart>
            </div>
            
        </div>
    );
};
export default OrderReview;