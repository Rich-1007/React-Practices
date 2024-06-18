import React, { useState } from "react";
import Tasks from "./Tasks";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState();

  function AddTask() {
    setTodo([...todo, { task: inputText, id: Math.random() * 100 }]);
    setInputText("");
  }

  function HandleDelete(id) {
    const newTodo = todo.filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function HandleUpdate(id, edittaskvalue) {
    // console.log(id);

    const updatedtodo = todo.filter((item) =>
      item.id == id ? (item.task = edittaskvalue) : item
    );

    setTodo(updatedtodo);
  }

  function deleteAllTask() {
    setTodo([]);
  }

  return (
    <>
      <div className="bg-gray-500 px-20 py-20 h-screen w-screen">
        <span className="text-white text-2xl flex justify-center py-5 font-semibold items-center">
          ToDo - List
        </span>

        <div className="w-full flex justify-center pb-6">
          <input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Enter your Task"
            className="pl-6 h-10 w-1/3 rounded-l-md outline-none hover:bg-gray-200 transition-all duration-100"
          />
          <button
            onClick={AddTask}
            className="pl-6 h-10 w-1/3 rounded-r-md bg-white hover:bg-gray-200 transition-all duration-100"
          >
            Add Task
          </button>
        </div>

        {todo.length > 0 && (
          <div className="bg-gray-400 rounded-lg ">
            <div className="px-4 py-8 flex flex-col gap-2 ">
              {todo.map((item) => (
                <Tasks
                  item={item}
                  HandleDelete={HandleDelete}
                  HandleUpdate={HandleUpdate}
                />
              ))}

              <div className="w-full flex justify-end pt-10">
                <button
                  onClick={deleteAllTask}
                  className="bg-gray-800 shadow-2xl text-white p-2 rounded-md hover:bg-gray-900"
                >
                  Delete All Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
