import Image from "next/image";
import React from "react";

const StoryCard = ({ story }) => {
  const { name, src, profile } = story;
  return (
      <>
    <div className="relative hidden lg:inline-flex h-64 w-44">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 left-10 m-2"
        src={profile}
        alt="profile"
        height={40}
        width={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="filter brightness-75 object-cover lg:rounded-3xl"
        src={src}
        alt="src"
        layout="fill"
      />
      
    </div>
    <div className="lg:hidden rounded-full  ring-[6px] ring-green-500 h-[50px] w-[50px]">
       <Image
        className="rounded-full"
        src={profile}
        alt="profile"
        height={50}
        width={50}
        layout="fixed"
        objectFit="cover"
      />
        </div>
    </>
   
  );
};

export default StoryCard;
