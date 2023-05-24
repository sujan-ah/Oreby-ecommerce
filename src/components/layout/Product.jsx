import React from "react";
import Images from "./Images";
import Badge from "./Badge";

const Product = ({ src, badge }) => {
  return (
    <div className="relative">
      <Images imgsrc={src} />
      {badge && <Badge title="New" />}
    </div>
  );
};

export default Product;
