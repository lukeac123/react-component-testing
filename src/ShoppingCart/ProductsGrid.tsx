import { useShoppingCartContext } from "./Context";
import { ProductCard } from "./ProductCard";
import { ProductType } from "./types";

export const ProductsGrid = ({ productsData }) => {
  const { setShoppingCartItems } = useShoppingCartContext();

  return (
    <div className="productsContainer">
      {productsData &&
        Object.values(productsData.products).map((data: ProductType) => {
          return (
            <ProductCard
              key={data.id}
              product={data}
              setShoppingCartItems={setShoppingCartItems}
            />
          );
        })}
    </div>
  );
};
