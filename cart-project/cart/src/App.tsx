import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  type CartItem = Product & {
    quantity: number;
  };

  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 15 },
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, value: string) => {
    const quantity = parseInt(value, 10);

    if (!isNaN(quantity)) {
      setQuantities({ ...quantities, [id]: quantity });
    }
  };

  const addToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setQuantities({ ...quantities, [product.id]: 1 });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: number, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
            }
          : item
      )
    );
  };

  console.log("addToCart", cartItems);

  return (
    <>
      <Header />
      <Routes>
  <Route
    path="/shop"
    element={
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Products
                product={product}
                handleQuantityChange={handleQuantityChange}
                addToCart={addToCart}
              />
            </li>
          ))}
        </ul>
      </div>
    }
  />
  <Route
    path="/cart"
    element={
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    }
  />
</Routes>

    </>
  );
}

export default App;
