import { useContext } from "react";
import { Estore } from "./store/E-coomerce-store";

const Cartlist = () => {
  const { cart = [], balance = 0 } = useContext(Estore); // Access cart and balance from the Estore context

  return (
    <div className="row g-0 text-center cartlist-handle">
      <div className="col-sm-6 col-md-8">
        <h1>Here is your cart list</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.imageURL} alt={item.title} width="200" />
                <h5>{item.title}</h5>
                <p>Price: {item.price.toFixed(2)}$</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-6 col-md-4 cartlist2">
        <h1>Your Balance</h1>
        <h4>The balance is: {balance.toFixed(2)}$</h4>
      </div>
    </div>
  );
};

export default Cartlist;
