import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-custom-blue h-full overflow-y-auto px-5 flex flex-col">
      {/* flex-grow　余白を引き延ばす */}
      <div className="flex-grow ">
        <div className="flex flex-wrap justify-evenly items-center border mt-2 rounded-md hover:bg-blue-800 duration-150">
          <span className="text-white p-4 text:2xl ">+</span>
          <h1 className="text-white text-xl font-bold p-4 flex">New Chat</h1>
        </div>
        <ul>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">
            Room1
          </li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">
            Room2
          </li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">
            Room3
          </li>
          <li className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150">
            Room4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
