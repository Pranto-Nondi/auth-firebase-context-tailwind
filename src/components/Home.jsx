import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user,createUser} = useContext(AuthContext)
    // console.log(createUser)
    return (
        <div className='text-white'>
            {user && <span>{user.name}</span>}
        </div>
    );
};

export default Home;