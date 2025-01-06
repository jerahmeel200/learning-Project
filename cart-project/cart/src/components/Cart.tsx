import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, increment: boolean) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  removeFromCart,
  updateQuantity,
}) => {
  console.log("cartItems", cartItems);
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <>
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity} = $
                {item.price * item.quantity}
              </li>
              <p>Quantity: {item.quantity}</p>

              <div style={{ marginRight: "10px" }}>
                <button
                  onClick={() => updateQuantity(item.id, false)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, true)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>remove</button>
            </>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {
        cartItems.length > 0 && (
          <h2>
            Total :$ 
            {cartItems.reduce((total, item)=> total + item.price * item.quantity, 0).toFixed(2)}
          </h2>

        )
      }
    </div>
  );
};

export default Cart;
