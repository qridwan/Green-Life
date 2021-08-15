import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex py-2 items-center space-x-2 hover:bg-green-800 hover:text-white cursor-pointer group">
      {src && (
        <Image
          src={src}
          alt={title}
          width="30"
          height="30"
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-green-600 hover:text-white" />}
      <p className="hidden sm:inline-flex font-medium ">{title}</p>
    </div>
  );
};

export default SidebarRow;
