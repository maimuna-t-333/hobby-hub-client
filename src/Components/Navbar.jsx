import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-[#DBB5B5] shadow-sm p-6">
                <div className="navbar-start">
                    <div className="dropdown text-[#3A0519]">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300  rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <Link to='/'>Home</Link>
                            <Link to='/allGroups'>All groups</Link>

                            <Link to='/createGroup'>Create Group</Link>
                            <Link to='/myGroup'>My Groups</Link>
                        </ul>
                    </div>
                    <h2 className='text-[#3A0519] text-xl font-bold'>HobbyHub</h2>
                    <img className='w-12 h-12 ml-2 ' src={logo} alt="" />
                </div>
                <div className="navbar-center space-x-4 text-[#3A0519] hidden md:flex ">
                    <Link to='/'>Home</Link>
                    <Link to='/allGroups'>All groups</Link>

                    <Link to='/createGroup'>Create Group</Link>
                    <Link to='/myGroup'>My Groups</Link>



                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate fixed top-4 right-4 z-50">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon (light mode) */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5.64,17l-.71..." />
                        </svg>

                        {/* moon icon (dark mode) */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.64,13a1,1..." />
                        </svg>
                    </label>

                    <Link className='text-[#3A0519] text-xl font-bold hover:cursor-pointer' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

