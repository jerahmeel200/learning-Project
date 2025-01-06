import React from "react";

type Product = {
  id: number;
  name: string;
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
  console.log("product", product)
  console.log("addToCart", addToCart)
  console.log("handleQuantityChange", handleQuantityChange)
  return (
    <div>
      helll0jjnnkgktgtnggnktgk
      <li key={product.id}>
        {product.name} - ${product.price}{" "}
        <input
          type="number"
          onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </li>
    </div>
  );
};

export default Products;
