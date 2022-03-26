import React from "react";

const RandomSelectedProduct = (props) => {
  const name = props?.selected?.name;
  return (
    <div>
      <p>
        {name ? <p> <b>*</b> {props?.selected?.name}</p> : <div></div>}

        {}
      </p>
    </div>
  );
};

export default RandomSelectedProduct;
