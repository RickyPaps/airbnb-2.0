import Image from "next/image";
import airbnb from "/images/Airbnb_Logo.png";
import {
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left Section */}
      <div className="relative flex items-center h-10 my-auto">
        <Image
          className="cursor-pointer"
          src={airbnb}
          layout="fill"
          alt=""
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle Section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center p-2 border-2 rounded-full space-x-2">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
