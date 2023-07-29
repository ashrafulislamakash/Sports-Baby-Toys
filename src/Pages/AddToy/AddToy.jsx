import React from "react";
import Swal from "sweetalert2";
import useTitle from "react-dynamic-title";

const AddToy = () => {
  useTitle("AddToy");

  const handleAddSubmit = (event) => {
    event.preventDefault();

    // Getting value from the form
    const form = event.target;
    const url = form.url.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;

    const newAddToy = {
      url,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      detail,
    };

    console.log(newAddToy);

    //send Data to the Server

    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <form
      onSubmit={handleAddSubmit}
      className=" bg-dark7 p-4  md:px-8 lg:p-12 container mx-auto my-32  rounded-xl "
    >
      <div className="space-y-12">
        <div className=" pb-12">
          <h2 className="text-xl font-bold text-center  md:text-5xl text-dark1">
            Add A Toy
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 ">
            <div className="w-full">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Picture URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="url"
                  id="url"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2 text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="sellerName"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                seller name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="sellerName"
                  id="sellerName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="sellerEmail"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Seller Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="sellerEmail"
                  id="sellerEmail"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="subCategory"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Sub-category
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="subCategory"
                  id="subCategory"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="rating"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Rating
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  autoComplete="given-name"
                  className="block w-full p-2  rounded-md border-0  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Available quantity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  autoComplete="given-name"
                  className="block w-full p-2 rounded-md border-0  text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full col-span-1 sm:col-span-2">
              <label
                htmlFor="detail"
                className="block text-sm font-medium leading-6 text-dark2"
              >
                Detail description
              </label>
              <div className="mt-2 ">
                <input
                  type="text"
                  name="detail"
                  id="detail"
                  autoComplete="given-name"
                  className="block w-full  rounded-md border-0 px-2 pt-2 pb-20 text-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark2 focus:ring-2 focus:ring-inset focus:ring-dark4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="rounded-md bg-red w-full py-2 text-sm font-semibold text-white  hover:bg-darkred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
      >
        Add Toy
      </button>
    </form>
  );
};

export default AddToy;
