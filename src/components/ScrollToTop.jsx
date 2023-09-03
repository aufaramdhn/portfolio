import React, { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={`${visible ? "fixed" : "hidden"} bottom-5 right-3`}>
      <div className="text-2xl z-50 p-2 rounded-full dark:bg-gray-700 bg-slate-300 hover:bg-slate-400 cursor-pointer dark:text-white dark:hover:bg-gray-950">
        <RiArrowUpLine onClick={scrollToTop} />
      </div>
    </div>
  );
};
