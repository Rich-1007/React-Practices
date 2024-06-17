import React, { useState } from "react";

const Hamberger = () => {
  const [isTrue, setIstrue] = useState(false);

  function Clicked() {
    setIstrue((prev) => !prev);
  }
  return (
    <>
      <div className="h-screen w-screen bg-gray-800">
        <div className="bg-gray-500 h-12 w-full relative">
          <div
            onClick={Clicked}
            className="sm:hidden cursor-pointer text-white inline-block justify-end pl-3 pt-2 text-xl font-bold"
          >
            |||
          </div>
          <div className="hidden sm:flex flex-row justify-between px-6 cursor-pointer items-center">
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
            <span>Blog</span>
          </div>

          <div
            className={
              isTrue
                ? "sm:hidden absolute top-full h-44 gap-4 bg-gray-200 flex flex-col justify-center items-center w-full"
                : "hidden"
            }
          >
            <span>Home</span>
            <span>About</span>
            <span>Contact Us</span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamberger;
