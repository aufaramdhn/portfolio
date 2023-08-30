import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 shadow sticky top-0">
      <div className="flex justify-between items-center py-5 px-12 font-poppins">
        <h1 className="text-white">LOGO</h1>
        <ul className="text-white flex gap-10 cursor-pointer">
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Skills</li>
          <li href="#">Project</li>
          <li href="#">Contact</li>
        </ul>
        <h1 className="text-white">LOGO</h1>
      </div>
    </nav>
  );
};
