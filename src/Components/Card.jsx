import React from "react";

export const Card = (props) => {
  const { children, className, Aos } = props;
  return (
    <div
      data-aos={Aos}
      className={`transition-all duration-300 shadow-sm rounded-xl hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
