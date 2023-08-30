import React from "react";
import Profile from "/logo/profile.svg";

export const Home = () => {
  return (
    <div className="h=screen font-poppins">
      <div className="flex items-center justify-around h-screen w-full">
        <div className="">
          <h1 className="text-4xl pb-2">Hello Im Aufa Ramadhan</h1>
          <p className="text-2xl">Im Software Engineering</p>
        </div>
        <img src={Profile} className="w-1/4" />
      </div>
    </div>
  );
};
