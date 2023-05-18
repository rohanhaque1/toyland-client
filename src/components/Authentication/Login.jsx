import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="md:px-20 py-14">
        <div className="hero py-28 rounded-lg bg-base-200">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-4xl font-bold text-center my-5">Login</h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label text-lg font-bold">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-lg font-bold">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="my-6 space-y-4">
                <button
                  aria-label="Login with Google"
                  type="button"
                  className="bg-pink-600 flex items-center justify-center w-full p-4 border rounded-md focus:ring-2 focus:ring-offset-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current text-green-500"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p className="text-lg text-white font-bold">
                    Signin with Google
                  </p>
                </button>
              </div>
              <div className="text-md text-gray-600 font-bold">
                <p>
                  Don't have any Account ?{" "}
                  <Link to="/register" className="text-pink-700">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
