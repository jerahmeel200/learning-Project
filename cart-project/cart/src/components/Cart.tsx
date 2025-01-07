import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

type Product = {
  id: number;
  image: string;
  title: string;
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
    <div className="px-4 sm:px-8 md:px-20 py-10">
      <h2 className="text-gray-600 font-semibold text-lg sm:text-xl md:text-2xl mb-4">
        Your Cart
      </h2>
      <div>
        {cartItems.length > 0 ? (
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                className="border border-gray-300 rounded-md shadow-lg flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-6"
                key={item.id}
              >
                <img
                  className="w-20 sm:w-16 md:w-24 h-auto object-cover"
                  src={item.image}
                  alt={item.title}
                />

                <p className="text-sm sm:text-base font-medium text-gray-800 text-center">
                  {item.title}
                </p>

                <p className="text-sm sm:text-base text-gray-600 text-center">
                  ${item.price} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    className="bg-blue-600 text-white font-bold px-2 py-1 rounded disabled:bg-blue-300"
                    onClick={() => updateQuantity(item.id, false)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-sm sm:text-base">{item.quantity}</span>
                  <button
                    className="bg-blue-600 text-white font-bold px-2 py-1 rounded"
                    onClick={() => updateQuantity(item.id, true)}
                  >
                    +
                  </button>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <TrashIcon className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <h2 className="text-gray-800 font-semibold text-lg sm:text-xl mt-6">
          Total: $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h2>
      )}
    </div>
  );
};

export default Cart;
