import React from "react";

import Logowhite from "../../assets/logo/whitelogo.svg";
import google from "../../assets/icon/google.svg";
import linkdin from "../../assets/icon/linkdin.svg";
import twiter from "../../assets/icon/twiter.svg";
import instra from "../../assets/icon/instra.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-dark1 py-5  sm:pt-32  sm:pb-24  ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-5 sm:p-0 md:gap-48 gap-8">
          <div>
            <img src={Logowhite} alt="Logowhite" />

            <p className="text-white my-5">
              We Offer a premium Service, whether you are shopping at one of our
              flagship stores or via our website.
            </p>

            <div className="flex gap-1">
              <img src={google} alt="" />

              <img src={twiter} alt="" />

              <img src={instra} alt="" />

              <img src={linkdin} alt="" />
            </div>
          </div>

          <div className="text-white">
            <h5 className="mb-4 md:mb-14 font-semibold text-xl">About</h5>

            <div className="grid gap-y-3	">
              <p>Home</p>
              <p>All Toys</p>
              <p>My Toys</p>
              <p>Add A Toy</p>
              <p>Blogs</p>
            </div>
          </div>
          <div className="text-white">
            <h5 className="mb-14 font-semibold text-xl">Company</h5>

            <div className="grid gap-y-3	">
              <p>Why Car Doctor</p>
              <p>About</p>
            </div>
          </div>
          <div className="text-white">
            <h5 className="mb-14 font-semibold text-xl">Support</h5>

            <div className="grid gap-y-3	">
              <p>Support Center</p>
              <p>Feedback</p>
              <p>Accessibility</p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-red text-white ">
        <p className="container flex  mx-auto justify-center p-4">
          © 2023. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
