import Image from "next/image";
import React from "react";
import Leaf from "../assets/icons/leaf.svg";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session, loading] = useSession();

  return (
    <nav className="sticky top-0 z-50 flex p-2 lg:px-5 shadow-lg">
      {/* left Side */}
      <div className="flex items-center py-3 mx-5">
        <Image
          src={Leaf}
          alt="Leaf"
          height="50px"
          width="50px"
          layout="fixed"
          className="sm:h-4"
        />
        <div className="ml-4 flex items-center justify-center border border-green-500 rounded px-2 py-1 bg-green-100 bg-opacity-25 shadow-md">
          <SearchIcon className="h-5 w-5 text-green-500 " />
          <input
            type="text"
            className="hidden md:inline-flex focus:outline-none md:m-1 text-sm bg-transparent text-green-900"
            placeholder="Search GreenLife..."
          />
        </div>
      </div>

      {/* Middle Icons */}
      <div className="flex justify-center flex-grow">
        <div className="flex items-center space-x-4 ">
          <HeaderIcon Active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden sm:inline-flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          alt="User"
          height="40"
          width="40"
        />
        <p className=" whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </nav>
  );
};

export default Header;
