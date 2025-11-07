import CartItem from "./CartItem";

export default function Cart({ cart, updateQuantity, clearCart }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet!</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}
