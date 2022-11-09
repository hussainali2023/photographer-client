import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <>
      <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id}>
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
                  <p className="leading-snug dark:text-gray-400">
                    {service.description.slice(0, 100) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={"/services"}>
          <button className=" bg-violet-500 py-2 px-7 rounded-md text-white font-semibold">
            See All
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
