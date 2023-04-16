import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelSignOut = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful.')
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
            <Link className="btn btn-ghost normal-case text-xl" to='/' >Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/orders' >Orders</Link>
            {user && <>
                <Link className="btn btn-ghost normal-case text-xl" to='/profile' >Profile</Link>
            </>}
            <Link className="btn btn-ghost normal-case text-xl" to='/register' >Register</Link>
            {user ? <p><button className="btn btn-ghost normal-case text-xl"  >{user.email}</button>
                <button className='btn btn-ghost btn-md'><Link className="btn  normal-case text-xl" to='/' onClick={handelSignOut}  >SignOut</Link></button>
            </p>

                : <Link className="btn btn-ghost normal-case text-xl" to='/login' >Login</Link>}
        </div>
    );
};

export default Header;