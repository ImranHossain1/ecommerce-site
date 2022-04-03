import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUseingGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const redirect_uri =  location.state?.from || '/shop';
    const handleGoogleLogIn=()=>{
        signInUseingGoogle()
            .then(result =>{
                navigate(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div >
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="email" placeholder='Your Email'/> <br />
                    <input type="password" name="" id="pass1" placeholder='Password'/> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john <Link to='/register'>Create Account</Link></p>
                <div>------------------or------------------</div>
                <button className='btn-regular' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;