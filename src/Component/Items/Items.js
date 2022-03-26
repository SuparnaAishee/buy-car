import React, { useState } from "react";
import ListItems from "../CartProduct/ListItems";
import Item from "../Item/Item";
import RandomSelectedProduct from "../RandomSelectedProduct/RandomSelectedProduct";
import "./Items.css";

const Items = (props) => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleAddToCart = (product) => {
    setSelectedItem([]);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const clearData = () => {
    setCart([]);
    setSelectedItem([]);
  };

  const selectOne = (cart) => {
    const random = Math.floor(Math.random() * cart.length) + 1;
    const selectedOne = cart[random - 1];

    setSelectedItem(selectedOne);
    setCart([]);
  };

  const products = props.data;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Get Your Car</h1>
      <div className="full-container">
        <div className="product-container">
          {products.map((pd) => (
            <Item
              product={pd}
              key={pd.productNo}
              handleAddToCart={handleAddToCart}
            ></Item>
          ))}
        </div>
        <div className="cart-container">
          <h4>Selected Cars</h4>
          {cart.map((singleProduct) => (
            <ListItems
              clickProduct={singleProduct}
              key={singleProduct.productNo}
            ></ListItems>
          ))}
          {
            <RandomSelectedProduct
              selected={selectedItem}
            ></RandomSelectedProduct>
          }
          <button className="btn1" onClick={() => selectOne(cart)}>
            Choose 1 for me
          </button>{" "}
          <br /> <br />
          <button className="btn2" onClick={clearData}>
            Choose Again
          </button>
        </div>
      </div>

      <div className="bonus-part">
        <h5>How react works?</h5>
        <p>
          Ans: React is flexible,effecient,open source java script library
          .React works in declarative code.One of the biggest advantages of
          using React is that you can infuse HTML code with JavaScript. Users
          can create a representation of a DOM node by declaring the Element
          function in React. The code below contains a combination of HTML and
          JavaScript.
        </p>

        <h5>How use state work</h5>
        <p>
          Ans: State’ is the representation or a snapshot of the app at any one
          time. In a declarative UI, developers aren’t in charge the UI when
          something happens. They don’t have to worry about hproductNoing or
          showing divs, as you would with a code-heavy imperative UI. We only
          have to worry about receiving a specific app ‘state or, a specific
          screen displaying specific information at any one time and rendering
          it in the UI.
        </p>
      </div>
    </div>
  );
};

export default Items;
