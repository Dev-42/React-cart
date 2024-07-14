import Product from "./components/Product";
import { useState } from "react";
import "./App.css";

const initialData = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 3,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const updateQuantity = (id, newQuantity) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        Total: {total}
      </h1>
    </div>
  );
}

export default App;
