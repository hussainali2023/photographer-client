import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h1 className=" text-7xl font-extrabold">
        This is Home Page and total Data: {services.length}
      </h1>
    </div>
  );
};

export default Home;
