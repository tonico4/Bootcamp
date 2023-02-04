import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to Taskify</h1>
            <div className='btn-home-div'>
                <Link className='link' to="/login">Login</Link>
                <Link className='link' to="/register">Sign In</Link>
            </div>
        </div>
    );
};

export default Home;
