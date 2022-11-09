import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div>
        {user?.uid ? (
          <div className=" mb-4 md:mb-10">
            <form id="feedbackForm" action="" method="" className="">
              <div className="mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                  placeholder=" "
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  className="border-0 px-3 py-3 rounded text-sm shadow w-3/4
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                  placeholder=" "
                  readOnly
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="feedback"
                  id="feedback"
                  className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-3/4"
                  placeholder=""
                  required
                ></textarea>
              </div>
              <div className="mt-2 flex justify-center">
                <button
                  id="feedbackBtn"
                  className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className=" mb-4 md:mb-10">
            <h1 className=" text-center text-2xl font-semibold">
              {" "}
              Please Login To Add a Review
            </h1>
            <div className=" flex justify-center mt-3">
              <Link to={"/login"}>
                <button className=" px-6 py-2 bg-violet-400 text-white font-semibold rounded-md">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Leroy Jenkins</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
            Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
            dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
            finibus.
          </p>
          <p>
            Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
            mauris cursus venenatis. Maecenas gravida urna vitae accumsan
            feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
