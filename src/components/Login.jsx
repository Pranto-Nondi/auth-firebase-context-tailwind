import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const handelLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedUser = result.user
                console.log(googleLoggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-[70%] flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <form onSubmit={handelLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Firget Password?</Link>
                                <Link to="/register" className="label-text-alt link link-hover">  Create An Acount?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <br />
                            <img onClick={handelGoogleSignIn} className=" cursor-pointer" src=" https://i.ibb.co/QXMzVP3/google.png" alt="" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;