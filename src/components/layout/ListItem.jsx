import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ itemname, className, href }) => {
  return (
    <div className={className}>
      <Link to={href}>{itemname}</Link>
    </div>
  );
};

export default ListItem;
