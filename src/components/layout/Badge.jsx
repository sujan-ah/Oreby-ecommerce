import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute top-0 left-0 mt-5 ml-7 inline-block bg-primary py-2 px-8 font-dm text-sm font-bold text-white">
      {title}
    </span>
  );
};

export default Badge;
