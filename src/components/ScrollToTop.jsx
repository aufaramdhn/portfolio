import React, { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={`${visible ? "fixed" : "hidden"} bottom-5 right-3`}>
      <div className="z-50 p-2 text-2xl rounded-full cursor-pointer dark:bg-gray-700 bg-slate-300 hover:bg-slate-400 dark:text-white dark:hover:bg-gray-950">
        <RiArrowUpLine onClick={scrollToTop} />
      </div>
    </div>
  );
};
