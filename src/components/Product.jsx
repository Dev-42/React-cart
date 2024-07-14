import styles from "./product.module.css";
import { useState } from "react";

const Product = ({ id, name, price, quantity, updateQuantity }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleIncrement = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  const handleDecrement = () => {
    if (localQuantity > 0) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className={styles.container}>
      <h2 data-testid="product-name">{name}</h2>
      <h2 data-testid="product-price">{price}</h2>
      <button className={styles.btn} onClick={handleIncrement}>
        +
      </button>
      <h2 data-testid="product-quantity">{localQuantity}</h2>
      <button
        className={styles.btn}
        onClick={handleDecrement}
        disabled={localQuantity <= 0}
      >
        -
      </button>
    </div>
  );
};

export default Product;
