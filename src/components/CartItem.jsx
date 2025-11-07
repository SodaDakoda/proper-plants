export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="cart-item">
      <span className="emoji">{item.image}</span>
      <p>{item.name}</p>
      <div className="controls">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}
