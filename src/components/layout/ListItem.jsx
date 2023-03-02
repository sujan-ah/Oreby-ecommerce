import React from "react";

const ListItem = ({ itemname, className }) => {
  return <div className={className}>{itemname}</div>;
};

export default ListItem;
