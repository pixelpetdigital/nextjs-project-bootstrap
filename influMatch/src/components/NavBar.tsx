import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">InfluMatch</div>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-300 hover:text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-300 hover:text-white'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-300 hover:text-white'
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-300 hover:text-white'
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
