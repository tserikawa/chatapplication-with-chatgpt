import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Char from "./components/Char";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-full flex" style={{ width: "1280px" }}>
        <div className="w-1/5 h-full border-r">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full border-r">
          <Char />
        </div>
      </div>
    </div>
  );
}
