import React from 'react';
import { Demo } from '../Components';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <Link to="/about" >About Us</Link>
        <Demo />        
    </>
)


export { Home };
