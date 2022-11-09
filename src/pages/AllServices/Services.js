import React from "react";

const Service = ({ service }) => {
  //   console.log(service);
  const { photo, serviceName, price, description } = service;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={photo}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {serviceName}
            </h3>
          </a>
          <p>Price: ${price}</p>
          <p className="leading-snug dark:text-gray-400">
            {description.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
