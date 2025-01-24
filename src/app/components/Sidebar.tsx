"use client";

import {
  collection,
  onSnapshot,
  orderBy,
  where,
  query,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { db } from "../../../firebase";

type Room = {
  id: string;
  name: string;
  createdAt: Timestamp;
};

const Sidebar = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const roomCollectionRef = collection(db, "rooms");
      const q = query(
        roomCollectionRef,
        where("userId", "==", "wufFXF8qq3aWDedsfDe1Z2DOiBW2").orderBy(
          "createdAt"
        )
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newRooms: Room[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt,
        }));
        setRooms(newRooms);
        console.log(newRooms);
      });
    };
    fetchRooms();
  }, []);

  return (
    <div className="bg-custom-blue h-full overflow-y-auto px-5 flex flex-col">
      {/* flex-grow　余白を引き延ばす */}
      <div className="flex-grow ">
        <div className="flex flex-wrap justify-evenly items-center border mt-2 rounded-md hover:bg-blue-800 duration-150">
          <span className="text-white p-4 text:2xl ">+</span>
          <h1 className="text-white text-xl font-bold p-4 flex">New Chat</h1>
        </div>
        <ul>
          {rooms.map((room) => (
            <li
              key={room.id}
              className="flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150"
            >
              <span>{room.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-xl flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150">
        <IoIosLogOut />
        <span>ログアウト</span>
      </div>
    </div>
  );
};

export default Sidebar;
