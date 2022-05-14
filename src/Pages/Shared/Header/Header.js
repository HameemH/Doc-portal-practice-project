import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../../firebase.init';

const Header = () => {
  const [user] =useAuthState(auth)
  const logout = ()=>{
    signOut(auth);
  }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/apponintment'>Appointment</Link></li>
            <li><Link to='/review'>Review</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {
              user?<li><Link to='/login' onClick={logout}>Log Out</Link></li>:<li><Link to='/login'>Log In</Link></li>
            }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to='/' className="btn "><li>Home</li></Link>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/apponintment'>Appointment</Link></li>
            <li><Link to='/review'>Review</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {
              user?<li><Link to='/login' onClick={logout}>Log Out</Link></li>:<li><Link to='/login'>Log In</Link></li>
            }
          </ul>
        </div>
      </div>
    );
};

export default Header;