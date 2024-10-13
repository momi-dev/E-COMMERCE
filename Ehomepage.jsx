import { useContext } from "react";
import { Estore } from "./store/E-coomerce-store";
import { MdShoppingCart } from "react-icons/md";

const Ehomepage = () => {
  const { addToCart } = useContext(Estore);
  const { handlingcart } = useContext(Estore);

  const products = [
    { id: 1, title: "Y20 unit", price: 7.0, imageURL: "https://tse3.mm.bing.net/th?id=OIP.vWcOdHRYBsJjOI1k7FN3TAHaHa&pid=Api&P=0&h=220" },
    { id: 2, title: "A5s unit", price: 8.0, imageURL: "https://tse4.mm.bing.net/th?id=OIP.59Ce3F_zyBJrKIJThX8b5wHaHa&pid=Api&P=0&h=220" },
    { id: 3, title: "X650 unit", price: 9.0, imageURL: "https://tse1.mm.bing.net/th?id=OIP.cMQYcvtBN81pCLD6TUv3NwHaHa&pid=Api&P=0&h=220" },
    { id: 4, title: "iphone x", price: 7.6, imageURL:"https://tse2.mm.bing.net/th?id=OIP.A-YY-reaiHC2kVtkkAsJJQHaHa&pid=Api&P=0&h=220" },
    { id: 5, title: "iphone xs", price: 8.7, imageURL: "https://tse1.mm.bing.net/th?id=OIP.pQJQN7xg3GxF0AJLSGC8-gHaHa&pid=Api&P=0&h=220" },
    { id: 6, title: "iphone xs max", price: 10.0, imageURL: "https://tse1.mm.bing.net/th?id=OIP.H6svH248nwUotXUUUZn9QAHaHa&pid=Api&P=0&h=220" },
    // ... other products
  ];

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 homepage">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <div className="card h-100">
            <img src={product.imageURL} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: {product.price.toFixed(2)}$</p>
              <button
                type="button"
                className="btn btn-warning"
                /*onClick={() => addToCart(product)}*/
                onClick={()=>{addToCart(product);
                  handlingcart();}
                }
               
              >
                Add to cart <MdShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ehomepage;
