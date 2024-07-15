import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./SingleCard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleBtn = (product) => {
    const isExist = cart.find((pd) => pd.id == product.id);
    if (!isExist) {
      setcart([...cart, product]);
    } else {
      alert("data already exist");
    }
  };
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setcart(newCart);
  };
  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd) => (
            <SingleCard product={pd} handleBtn={handleBtn}></SingleCard>
          ))}
        </div>
        <div className="cart-container">
          <h1>This is the cart section</h1>
          <div className="cart-title">
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
          <div>
            {cart.map((item, index) => (
              <div className="cart-info">
                <p>{index + 1}</p>
                <h5>{item.title.slice(0, 10)}</h5>
                <h5>{item.price}</h5>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
