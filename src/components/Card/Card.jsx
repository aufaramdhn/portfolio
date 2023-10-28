import React from "react";

export const Card = (props) => {
  const { children, className, dataAos } = props;
  return (
    <div
      data-aos={dataAos}
      className={`transition-all duration-300 shadow-sm rounded-xl hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
