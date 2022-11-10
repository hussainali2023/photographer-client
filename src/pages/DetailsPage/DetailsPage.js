import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "../Review/Review";

const DetailsPage = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(service);
  return (
    <div className=" mt-4 grid grid-cols-2 gap-4">
      <div className="course-details ml-10">
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-md">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={service.photo}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400">
                  {service.serviceName}
                </h3>
              </a>
              <p>Price: ${service.price}</p>
              <p className="leading-snug dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Review Section">
        <h1 className="mb-4 text-2xl text-violet-500 font-bold">
          {" "}
          Please add a Review of this service
        </h1>
        <Review service={service}></Review>
      </div>
    </div>
  );
};

export default DetailsPage;
