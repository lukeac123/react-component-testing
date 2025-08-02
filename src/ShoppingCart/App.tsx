import { useState, useEffect } from "react";
import { ShoppingCartContext } from "./Context";
import { ProductsGrid } from "./ProductsGrid";
import { ShoppingCart } from "./ShoppingCart";
import { ProductType } from "./types";
import "./App.css";

export default function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState<ProductType[]>([]);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          console.warn(`Response is not valid ${response.status}`);
        }
        const data = await response.json();
        setProductsData(data);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <>...Loading</>;
  if (error) return <>{error}</>;

  return (
    <div className="App">
      <ShoppingCartContext.Provider
        value={{ shoppingCartItems, setShoppingCartItems }}
      >
        <ProductsGrid productsData={productsData} />
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    </div>
  );
}
