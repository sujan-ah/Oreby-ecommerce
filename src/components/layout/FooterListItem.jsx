import React from "react";
import { Link } from "react-router-dom";

const FooterListItem = ({ itemname, href }) => {
  return (
    <div className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
      <Link to={href}></Link>
      {itemname}
    </div>
  );
};

export default FooterListItem;
