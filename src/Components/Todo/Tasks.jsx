import React, { useState } from "react";

const Tasks = ({ item, HandleDelete, HandleUpdate }) => {
  const [checkedvalue, setCheckedvalue] = useState(false);
  const [isedittrue, setIsedittrue] = useState(false);
  const [edittaskvalue, setEdittaskvalue] = useState(item.task);

  function Checked() {
    setCheckedvalue((prev) => !prev);
  }

  function HandleEdit() {
    setIsedittrue((prev) => !prev);
    // setEdittaskvalue(item.task);
  }

  return (
    <div key={item.id}>
      <div className="bg-gray-300 py-0  mx-2 flex flex-row justify-between items-center">
        <div className="w-8/12">
          {isedittrue ? (
            <div className=" bg-gray-100 ">
              <input
                type="text"
                className="w-full  py-2 px-3 text-gray-500 outline-none"
                value={edittaskvalue}
                onChange={(e) => setEdittaskvalue(e.target.value)}
              />
            </div>
          ) : (
            <div className=" py-2 px-3 line-clamp-1 ">
              <span className={checkedvalue && "text-white"}>{item.task}</span>
            </div>
          )}
        </div>

        <div className="w-4/12 flex flex-row  px-1 gap-2 items-center ">
          <input type="checkbox" onChange={Checked} />

          <button
            className="text-sm sm:text-base"
            onClick={() => HandleDelete(item.id)}
          >
            Delete
          </button>

          <div>
            {isedittrue ? (
              <button
                className="text-sm sm:text-base"
                onClick={() => {
                  HandleUpdate(item.id, edittaskvalue);
                  HandleEdit();
                }}
              >
                Update
              </button>
            ) : (
              <button className="text-sm sm:text-base" onClick={HandleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
