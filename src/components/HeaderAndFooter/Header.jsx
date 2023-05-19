import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const [error, setError] = useState('');
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => { })
      .catch(error => {
      setError(error.message)
    })
  }

  return (
    <>
      <div className="navbar flex justify-between bg-pink-100 text-black md:px-20 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-700 rounded-box w-52 font-bold text-md text-white"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allToys">All Toys</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {/* <li>
                <Link to="/login">Login</Link>
              </li> */}
              {user && (
                <>
                  <li>
                    <Link to="/addToys">Add a Toy</Link>
                  </li>
                  <li>
                    <Link to="/myToys">My Toys</Link>
                  </li>
                </>
              )}
              {user ? (
                <>
                  <li onClick={handleSignOut}>
                    <Link>Log Out</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <div className="flex gap-2">
              <img
                src="https://img.freepik.com/free-vector/different-kind-toys_1308-71053.jpg?w=740&t=st=1684418360~exp=1684418960~hmac=28ea11f7b5e1c0dafb34e9d0dd15fdc5dc394308e89d2117dc07498aa8380a06"
                alt=""
                className="w-9 h-9 rounded-full"
              />
              <h2 className="text-orange-800 font-bold text-3xl">Toy_Land</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-md">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allToys">All Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/addToys">Add a Toy</Link>
                </li>
                <li>
                  <Link to="/myToys">My Toys</Link>
                </li>
              </>
            )}
            {user ? (
              <>
                <li onClick={handleSignOut}>
                  <Link>Log Out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="w-12 rounded-full">
          {user && (
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
