import React from "react";

const Images = ({ imgsrc, className }) => {
  return (
    <div>
      <img className={className} src={imgsrc} />
    </div>
  );
};

export default Images;
