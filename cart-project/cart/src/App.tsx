import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import productImage from "./assets/image.jpg";

import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
  };

  type CartItem = Product & {
    quantity: number;
  };

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const parsedData = await response.json();
        setData(parsedData);
      } catch (error) {
        console.log("error detching products", error);
      }
    };

    fetchProduct();
  }, []);

  console.log("data", data);

  const handleQuantityChange = (id: number, value: string) => {
    const quantity = parseInt(value, 10);

    if (!isNaN(quantity)) {
      setQuantities({ ...quantities, [id]: quantity });
    }
  };

  const addToCart = (data: Product) => {
    const quantity = quantities[data.id] || 1;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === data.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...data, quantity }];
    });
    setQuantities({ ...quantities, [data.id]: 1 });
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
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="max-w-[1700px] mx-auto">
      <Header totalQuantity={totalQuantity}/>
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[40px] py-[30px]">
                {data.map((product) => (
                  <Products
                    key={product.id} // Add a unique key for React
                    product={product}
                    handleQuantityChange={handleQuantityChange}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </>
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
    </div>
  );
}

export default App;
