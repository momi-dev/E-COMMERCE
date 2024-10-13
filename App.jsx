import Header from './header';
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from 'react-router-dom';
import { useState, useRef } from "react";
import { Estore } from './store/E-coomerce-store';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [cart, setCart] = useState([]); 
  const [count, setCount] = useState(0); 
  const currvalue = useRef();

  const handlingcart=()=>{
    setCount(count+1);

  }


  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setBalance((prevBalance) => prevBalance + product.price);
  };

  return (
    <Estore.Provider value={{
      cart, // Pass the cart state
      balance, // Pass the balance state
      addToCart,
      handlingcart,
      count,
     
    }}>
      <div className='background'>
        <Header />
        <Outlet />
      </div>
    </Estore.Provider>
  );
}

export default App;
