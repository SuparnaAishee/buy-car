import React from "react";

const ListItems = (props) => {
  const { name } = props.clickProduct;
  return (
    <div>
      <p>
        <b>*</b> {name}
      </p>
    </div>
  );
};

export default ListItems;
