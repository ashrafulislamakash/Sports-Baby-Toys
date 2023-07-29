import React, { useContext, useEffect, useState } from "react";
import useTitle from "react-dynamic-title";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  // const { createUser } = useContext(AuthContext);

  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const photoURL = form.photoURL.value;
  //   console.log(name, email, password, photoURL);

  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("created user", user);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const { createUser, userUpdate } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [regerror, setRegError] = useState(null);

  const navigate = useNavigate();

  // Form Submission;
  const handleSignUp = (event) => {
    event.preventDefault();

    // Getting value from the form
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // Password Validation;
    if (password.length < 6) {
      const errorMessage = "Password Length Must be 6 character Long !";
      setError(errorMessage);
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      const errorMessage = "Add At least two Uppercase !";
      setError(errorMessage);
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      const errorMessage = "Add At least One Special Character (!@#&*) !";
      setError(errorMessage);
      return;
    } else {
      setError("");
    }

    // createUser(email,password)
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // After Creating the user we need to call userUpdate;
        userUpdate(user, displayName, photoURL);
      })
      .catch((regerror) => {
        const error = regerror.errorMessage;
        setRegError(error);
      });

    // After registraation go to home;
    navigate("/");
  };

  useTitle("Register");
  return (
    <div
      className=" container my-24 mt-md-0 p-4 mx-auto grid grid-cols-1 md:grid-cols-2 "
      data-aos="zoom-in"
    >
      <form
        onSubmit={handleSignUp}
        className="  container mx-auto mt-10  rounded-xl "
      >
        <div className=" pb-12">
          <h2 className="text-xl font-bold text-center  md:text-5xl text-dark1">
            Register
          </h2>
          <p className="text-red">
            {regerror ? "Error occurs in the registration" : ""}
          </p>

          <div className="mt-10 grid grid-cols-1  gap-2 md:gap-8 ">
            <div className="w-full">
              <label
                htmlFor="displayName"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="displayName"
                  id="displayName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2 text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>

              {error ? <p className="text-red mt-2">{error}</p> : ""}
            </div>
            <div className="w-full">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="photoURL"
                  id="photoURL"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2 text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md bg-red w-full py-2 text-sm font-semibold text-white  hover:bg-darkred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
        >
          Sign Up
        </button>

        <p className="text-center p-8">
          Already have an account?
          <Link to="/login" className="text-red">
            Login
          </Link>
        </p>
      </form>

      <div>
        <img
          src="https://www.godealergo.com/assets/images/secure-login.gif"
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
