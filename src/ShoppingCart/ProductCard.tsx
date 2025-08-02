import { memo } from "react";
import { ProductCardType } from "./types";
import { useShoppingCartContext } from "./Context";

export const ProductCard = memo(
  ({ product, setShoppingCartItems }: ProductCardType) => {
    const { title, description, thumbnail, category, availabilityStatus } =
      product;

    const handleAddToBasket = (product) =>
      setShoppingCartItems((prev) => [...prev, product]);

    console.log("productCard");

    return (
      <div className="productCard">
        <div className="productCardData">
          <h2>{title}</h2>
          <div>{description}</div>
          <div>{category}</div>
          <div>{availabilityStatus}</div>
          <button onClick={() => handleAddToBasket(product)}>
            Add to Cart
          </button>
        </div>
        <img src={thumbnail} />
      </div>
    );
  }
);
