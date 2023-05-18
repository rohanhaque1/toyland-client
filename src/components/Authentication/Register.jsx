import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, userProfile } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess('');

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Your password should be at lest 6 characters")
      return
    }

    setError('');
    createUser(email, password)
      .then(result => {
        const createdUser = result.user
        // console.log(createdUser)
        setSuccess("User created Successfully !!")
        form.reset('');
        handleProfileUpdate(name, photo);
      })
      .catch(error => {
      setError(error.message)
    })

  }

  const handleProfileUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    userProfile(profile)
      .then(() => { })
      .catch(error => {
      setError(error.message)
    })
  }

  return (
    <>
      <section className="md:px-20 py-14">
        <div className="hero py-28 rounded-lg bg-base-200">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-4xl font-bold text-center my-5">
              Register Account
            </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label text-lg font-bold">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-lg font-bold">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="form-control">
                <label className="label text-lg font-bold">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-emerald-600 font-semibold">{success}</p>
                <p className="text-red-600 font-semibold">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <div className="text-md text-gray-600 font-bold">
                <p>
                  Already have an Account ?
                  <Link to="/login" className="text-pink-700">
                    Login
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

export default Register;
