import React from "react";

const HeaderIcon = ({ Icon, Active }) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-11 md:hover:bg-green-100 rounded-xl active:border-b-2 active:border-green-500 group text-green-400">
      <Icon
        className={`h-5 w-5 sm:h-7 group-hover:text-green-900 ${
          Active && "text-green-900 border-b-2 border-green-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
