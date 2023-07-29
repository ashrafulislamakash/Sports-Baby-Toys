import React from "react";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Cta from "../../Components/CTA/Cta";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Cta></Cta>

      <Gallery></Gallery>
    </div>
  );
};

export default Home;
