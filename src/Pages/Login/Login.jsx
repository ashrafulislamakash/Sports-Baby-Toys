import React, { useContext, useEffect, useState } from "react";
import useTitle from "react-dynamic-title";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // const { signIn } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   signIn(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // creating the hooks for redirect to other page;
  const [loginUser, setLoginUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { googleSignIn, user, loading, userLogin } = useContext(AuthContext);

  // Handle Login information;
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = "Invalid Useremail/Password";
        setLoginError(errorMessage);
      });
  };
  // Cheking whether the user is correct or not
  // Getting the exact path;
  let from = location.state?.from?.pathname || "/";

  // Redirecting to other page;
  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  useTitle("Login");

  return (
    <div
      className=" container my-24 mt-md-0 p-4 mx-auto grid grid-cols-1 md:grid-cols-2"
      data-aos="zoom-in"
    >
      <form
        onSubmit={handleLogin}
        className="   md:px-8 lg:p-12 container mx-auto mt-10  rounded-xl "
      >
        <div className=" pb-12">
          <h2 className="text-xl font-bold text-center  md:text-5xl text-dark1">
            Login
          </h2>
          <p>
            {loginError ? (
              <span className="text-red fw-bold fs-5">{loginError}</span>
            ) : (
              ""
            )}
          </p>
          <div className="mt-10 grid grid-cols-1  gap-2 md:gap-8 ">
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
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md bg-red w-full py-2 text-sm font-semibold text-white  hover:bg-darkred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
        >
          Sign In
        </button>

        <button
          onClick={googleSignIn}
          className="rounded-md bg-dark5 w-full mt-8 py-2 text-sm font-semibold text-dark1  hover:bg-dark6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark5"
        >
          Sign In with Google
        </button>

        <p className="text-center p-8">
          Dont have account{" "}
          <Link to="/register" className="text-red">
            Register
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

export default Login;
