import React, { useState } from "react";
import { products } from "../data";

const Sorting = () => {
  const [istrue, setIstrue] = useState(false);
  const [Data, setData] = useState(products);
  const [SortBy, setSortBy] = useState();

  function HandleTrue() {
    setIstrue((prev) => !prev);
  }

  function PriceHighLow() {
    const abc = [...Data].sort((a, b) => b.price - a.price);
    // console.log(abc);
    setSortBy("Price High - low");
    setData(abc);
    setIstrue(false);
  }

  function PriceLowHigh() {
    const abcd = [...Data].sort((a, b) => a.price - b.price);
    setSortBy("Price Low - High");
    setData(abcd);
    setIstrue(false);
  }

  function RatingHighlow() {
    const abcde = [...Data].sort((a, b) => b.rating - a.rating);
    setSortBy("Rating High - low");
    setData(abcde);
    setIstrue(false);
  }

  function RatinglowHigh() {
    const abcdef = [...Data].sort((a, b) => a.rating - b.rating);
    setData(abcdef);
    setSortBy("Rating Low - High");
    setIstrue(false);
  }

  return (
    <>
      <div className="bg-gray-400 h-full w-full px-10">
        <div className="relative outline inline-block w-48 px-2 cursor-pointer">
          <div onClick={HandleTrue}>
            <button>sort</button>
            <span> || {SortBy}</span>
          </div>
          <div
            className={`${
              istrue ? "flex flex-col" : "hidden"
            } absolute outline-red-600 cursor-pointer`}
          >
            <span onClick={PriceHighLow}>Price High - low</span>
            <span onClick={PriceLowHigh}>Price Low - High</span>
            <span onClick={RatingHighlow}>Rating High - low</span>
            <span onClick={RatinglowHigh}>Rating Low - High</span>
          </div>
        </div>

        <div className="py-10 px-20 flex flex-col gap-4 items-center">
          {Data.map((item) => (
            <div className="bg-gray-300 rounded-md flex py-5 justify-center px-5 w-72 flex-col gap-2">
              <span>{item.title}</span>
              <span className="text-sm text-gray-600">{item.description}</span>

              <div className="flex flex-row justify-between pt-10">
                <span>Price - {item.price} $</span>
                <span>Rating - {item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sorting;
