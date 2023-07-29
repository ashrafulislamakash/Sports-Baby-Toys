import React from "react";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";

const Gallery = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center  font-bold text-4xl leading-8 text-gray-900">
            Trusted by the worlds most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img src={img1} alt="Transistor" />
            <img src={img2} alt="Reform" />
            <img src={img3} alt="Tuple" />
            <img src={img5} alt="SavvyCal" />
            <img src={img6} alt="Statamic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
