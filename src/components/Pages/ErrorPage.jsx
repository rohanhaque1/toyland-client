import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error");
  const { error, status } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="mt-10">
            <div className="my-4">
              <Link to="/" className="px-3 py-2 rounded-lg">
                <button className="btn btn-error">Back to Homepage</button>
              </Link>
            </div>
            <img
              src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000"
              alt=""
              className="rounded-full w-96"
            />
          </div>

          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-5xl text-red-600">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
