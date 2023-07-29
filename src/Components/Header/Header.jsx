import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading, signOutGoogle } = useContext(AuthContext);

  if (loading && !user) {
    return <></>;
  }

  return (
    <>
      <div className="bg-white ">
        <header className="absolute inset-x-0 top-0 z-50 container mx-auto">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sports Baby Toys</span>
                <img className="h-12 w-auto" src={logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold " : "",
                    color: isPending ? "red" : "dark2",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/alltoys"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold " : "",
                    color: isPending ? "red" : "",
                  };
                }}
              >
                All Toys
              </NavLink>{" "}
              <NavLink
                to="/toys"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold " : "",
                    color: isPending ? "red" : "",
                  };
                }}
              >
                My Toys
              </NavLink>{" "}
              <NavLink
                to="/Addtoy"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold " : "",
                    color: isPending ? "red" : "dark2",
                  };
                }}
              >
                Add A Toy
              </NavLink>
              <NavLink
                to="/blogs"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold " : "",
                    color: isPending ? "red" : "dark2",
                  };
                }}
              >
                Blogs
              </NavLink>
            </div>
            <div className="hidden  lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
              {user ? (
                <>
                  <Link to="#">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="h-10 w-10 rounded-full"
                    />
                  </Link>
                  <button
                    className="bg-red p-2 rounded text-white"
                    onClick={signOutGoogle}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold " : "",
                        color: isPending ? "red" : "dark2",
                      };
                    }}
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </>
              )}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Sports Baby Toys</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6"></div>
                  <Link to="/login">
                    <div className="py-6">
                      <p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Log in
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
};

export default Header;
