import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../Components/ToyCard/ToyCard";
import useTitle from "react-dynamic-title";

const AllToys = () => {
  useTitle("AllToys");
  const toys = useLoaderData();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllToys;
