import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function updateQuantity(id, amount) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <main className="app">
      <h1>🌱 Proper Plants 🌱</h1>
      <div className="content">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </div>
    </main>
  );
}
