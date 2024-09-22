import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="bg-gray-500 h-full p-4 flex flex-col">
      <h1 className="text-2xl text-white font-semibold px-4">Room 1</h1>
      <div className="flex-grow overflow-y-auto mb-4">
        <div className="text-right">
          <div className="bg-blue-500 inline-block rounded px-4 py-2">
            <p className="text-white font-medium">Hello</p>
          </div>
        </div>
        <div className="text-left">
          <div className="bg-green-500 inline-block rounded px-4 py-2">
            <p className="text-white font-medium">How are you?</p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
        ></input>
        <button className="absolute inset-y-0 right-3 flex items-center">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chat;
