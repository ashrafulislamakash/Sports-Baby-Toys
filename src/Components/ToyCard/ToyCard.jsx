import React from "react";
import ReactStars from "react-rating-stars-component";

const ToyCard = ({ toy }) => {
  const {
    url,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    detail,
  } = toy;

  return (
    <div
      className="aspect-h-1 aspect-w-1 w-full  border border-dark6 rounded-lg p-4 xl:aspect-h-8 xl:aspect-w-7"
      data-aos="fade-in"
    >
      <img
        src={url}
        className=" w-full object-cover object-center hover:opacity-75"
      />

      <div className="flex items-center  justify-between mt-2">
        <p className="mt-1 text-sm font-medium text-dark3"> {sellerName}</p>

        <h3 className="mt-4 text-sm text-gray-700"> {subCategory}</h3>
      </div>
      <h3 className="mt-1 text-lg font-bold text-dark1">{name}</h3>

      <div className="flex items-center justify-between mt-2">
        <p className="mt-1 text-lg font-medium text-gray-900">
          Price: <small className="text-dark2 font-normal "></small> ${price}
        </p>
        <p className="mt-1 text-lg font-medium text-gray-900">
          Quantity: {quantity}
        </p>
      </div>
      <div className="flex items-center gap-1 m-2">
        <ReactStars
          count={5}
          value={rating}
          edit={false}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        ({rating})
      </div>

      <button
        type="submit"
        className="rounded-md bg-red w-full py-2 text-sm font-semibold text-white  hover:bg-darkred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
      >
        View Details
      </button>
    </div>
  );
};

export default ToyCard;
