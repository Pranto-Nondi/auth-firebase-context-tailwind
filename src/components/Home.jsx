import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const { user, createUser } = useContext(AuthContext)

    return (
        <div className='text-white'>
            This is Home
        </div>
    );
};

export default Home;