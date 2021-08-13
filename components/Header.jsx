import Image from "next/image";
import React from "react";
import Leaf from "../assets/icons/leaf.svg";
import { SearchIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <nav className="shadow-lg">
      <div className="flex items-center py-3 mx-5">
        <Image
          src={Leaf}
          alt="Leaf"
          height="50px"
          width="50px"
          layout="fixed"
          className=""
        />
        <div className="ml-4 flex items-center justify-center border border-green-500 rounded px-2 py-1 bg-green-100 bg-opacity-25 shadow-md">
          <SearchIcon className="h-5 w-5 text-green-500 " />
          <input
            type="text"
            className="focus:outline-none md:m-1 text-sm bg-transparent text-green-900"
            placeholder="Search GreenLife..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
