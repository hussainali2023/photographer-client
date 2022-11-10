import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";
import Service from "../AllServices/Services";
import Gallery from "../Gallery/Gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Home = () => {
  DynamicTitle("Photo-Review");
  const services = useLoaderData();
  // console.log(services);
  return (
    <>
      <div>
        <PhotoProvider>
          <PhotoView src="https://img.freepik.com/free-photo/young-asian-man-with-camera-isolated-white-background-photographer-concept_231208-3767.jpg?w=2000">
            <img
              className=""
              src="https://img.freepik.com/free-photo/young-asian-man-with-camera-isolated-white-background-photographer-concept_231208-3767.jpg?w=2000"
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <h1 className=" text-violet-500 text-2xl ml-6 font-bold">
        Photographer Services:
      </h1>
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
      <div className="mt-8">
        <Gallery></Gallery>
      </div>
    </>
  );
};

export default Home;
