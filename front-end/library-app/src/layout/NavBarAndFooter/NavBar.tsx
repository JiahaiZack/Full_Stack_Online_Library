import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
        <div className='container-fluid'>
          <span className='navbar-brand'>Luv 2 Read</span>  
          <button className='navbar-toggler' type='button'
                data-bs-toggler='collapse' data-bs-target='#navbarNavDropdown'
                aria-controls='navbarNavDropdown' aria-expanded='false'
                aria-label='Toggle Navigation'
              >
                <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/home'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/search'>Search Book</NavLink>
              </li>
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item m-1'>
                <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}