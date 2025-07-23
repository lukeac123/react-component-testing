import { useState, useEffect, memo } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState<any>();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>No data</div>;

  const handleAddToBasket = (product) => {
    setItems((prev) => [...prev, product]);
  };

  const handleClearBasket = () => setItems([]);

  return (
    <div className="App">
      <div className="productsContainer">
        {Object.values(data.products).map((data: Product) => {
          return (
            <ProductCard
              key={data.id}
              product={data}
              handleAddToBasket={handleAddToBasket}
            />
          );
        })}
      </div>
      <ShoppingCart
        items={items}
        data={data.products}
        handleClearBasket={handleClearBasket}
      />
    </div>
  );
}

interface ShoppingCart {
  items: any[];
  data?: [];
  handleClearBasket?: () => void;
}

const ShoppingCart = memo(({ items, handleClearBasket }: ShoppingCart) => {
  const onHandleClearBasket = () => handleClearBasket();

  const basketItemsArray = [];

  for (const item of items) {
    if (basketItemsArray[item.id]) {
      basketItemsArray[item.id].qty += 1;
    } else basketItemsArray[item.id] = { ...item, qty: 1 };
  }

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      {basketItemsArray.map((item) => {
        return (
          <div key={item.title}>
            {item.title} {item.qty}
          </div>
        );
      })}
      <button onClick={onHandleClearBasket}>clear basket</button>
    </div>
  );
});

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  availabilityStatus: "In Stock" | "Low Stock";
}

interface ProductCard {
  product: Product;
  handleAddToBasket: (product: Product) => void;
}

const ProductCard = ({ product, handleAddToBasket }: ProductCard) => {
  const { title, description, thumbnail, category, availabilityStatus } =
    product;

  const [itemSelected, setItemSelected] = useState(false);

  const onHandleAddToBasket = () => {
    handleAddToBasket(product);
    setItemSelected((prev) => !prev);
  };

  return (
    <div className="productCard">
      <div className="productCardData">
        <h2>{title}</h2>
        <div>{description}</div>
        <div>{category}</div>
        <div>{availabilityStatus}</div>
        <button
          onClick={onHandleAddToBasket}
          className={itemSelected && "buttonItemSelected"}
        >
          Add to Cart
        </button>
      </div>
      <img src={thumbnail} />
    </div>
  );
};
