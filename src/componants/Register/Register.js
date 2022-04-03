import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your Email'/> <br />
                    <input type="password" name="" id="pass1" placeholder='Your Password'/> <br />
                    <input type="password" name="" id="pass2" placeholder='Re-enter Password'/> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <div>-------------------or-----------------------</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Register;