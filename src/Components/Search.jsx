// import React, { useState } from "react";

// const Search = () => {
//   const [searchItem, setSearchItem] = useState();
//   const [allMatchedItem, setMatchedItem] = useState();
//   console.log(allMatchedItem);

//   const data = [
//     { name: "Rich" },
//     { name: "Manoj" },
//     { name: "Chandan" },
//     { name: "Debu" },
//     { name: "Kala" },
//   ];
//   const handelValue = (e) => {
//     searcheddata(e.target.value);
//     setSearchItem(e.target.value);
//   };

//   const searcheddata = (searchItem) => {
//     const matchedItem = data.filter((item) => {
//       return item.name.toLowerCase().includes(searchItem.toLowerCase());
//     });
//     setMatchedItem(matchedItem)
//   };

//   return (
//     <div>
//       <div className="w-full h-32 bg-gray-400 flex flex-row justify-center items-center">
//         <div className=" w-3/5 h-12">
//           <input
//             value={searchItem}
//             onChange={handelValue}
//             type="text"
//             className="outline-none h-full w-full rounded-lg px-8"
//           />
//         </div>
//       </div>

//       <div className="bg-gray-300 flex flex-col items-center justify-center w-full gap-3">
//         {searchItem && allMatchedItem?.map((item) => (
//         <span className="text-2xl">{item.name}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
