import React from 'react';

export default function Navbar() {
    return <nav>
        <div className='center'>
            <div className='left-nav'>
                <li>Forum</li>
                <li>Categories</li>
                <li>Books</li>
                <li>Recipe Index</li>
                <li>Popular</li>
            </div>
            <div className='right-nav'>
                <li><span className='register'><img src={require('../Assets/register.png')} alt='Register'/></span>Register</li>
                <li><span className='login'><img src={require('../Assets/user.png')} alt='login user'/></span>Login</li>
            </div>
        </div>
    </nav>
}