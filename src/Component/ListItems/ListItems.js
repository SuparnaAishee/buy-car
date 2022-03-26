import React from "react";

const ListItems = (props) => {
  const { name } = props.clickProduct;
  return (
    <div>
      {name ? (
        <p>
          <b>*</b> {name}
        </p>
      ) : (
        <div></div>
      )}
      
    </div>
  );
};

export default ListItems;
