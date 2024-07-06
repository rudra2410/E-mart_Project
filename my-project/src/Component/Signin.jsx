import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signin = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
              <Link to="/" className="p-5 w-1/3 h-full text-blue-500"></Link>
            <div className="bg-white w-1/3 shadow-lg max-w-md">
            <div>
                <div className='grid grid-cols-2'>
                  <button onClick={toggleForm} className="p-2 bg-[#000a12] text-white">Sign In</button>
                  <button onClick={toggleForm} className="p-2">Register</button>
                </div>
                {isSignIn ? (
                    <div className='p-5'>
                        <form>
                            <div className="my-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-signin">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email-signin" type="email" placeholder="Email" />
                            </div>
                            <div className="my-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-signin">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password-signin" type="password" placeholder="Password" />
                            </div>
                            <button className="bg-[#000a12] w-full text-white  tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='p-5'>

                        <form>
                            <div className="my-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="my-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                            </div>
                            <div className="my-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                            </div>
                            <button className="bg-[#000a12] w-full p-3 text-white tracking-wide py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Register
                            </button>
                        </form>
                        
                    </div>
                )}
                </div>
            </div>
            <Link to="/" className="p-5 w-1/3 h-full text-blue-500"></Link>
        </div>
    );
};

export default Signin;
