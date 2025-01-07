import React from "react";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

type ProductProps = {
  product: Product;
  addToCart: (product: Product) => void;
  handleQuantityChange: (id: number, value: string) => void;
};

const Products: React.FC<ProductProps> = ({
  product,
  addToCart,
  handleQuantityChange,
}) => {

const truncate = (text: string , maxLength: number)=>{
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

 

  return (
      <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          className="object-contain h-full w-full"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mt-4 text-center">
        <p className="font-semibold text-sm text-gray-800">{truncate(product.title, 30) }</p>
        <p className="text-gray-500 text-sm mt-2">${product.price.toFixed(2)}</p>
      </div>
      <div className="mt-4 flex  items-center gap-2 justify-between">
        <input
          className="border border-gray-300 rounded-md px-2 py-2 w-full max-w-24 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          min="1"
          placeholder="Quantity"
          onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
