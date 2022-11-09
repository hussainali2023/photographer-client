import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../AllServices/Services";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <>
      <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
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
