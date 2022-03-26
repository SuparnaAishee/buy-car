import React from 'react';

const RandomSelectedProduct = (props) => {

    return (
      <div>
        <p >
          <b>*</b>
           {props?.selected?.name} 
        </p>
      </div>
    );
};

export default RandomSelectedProduct;