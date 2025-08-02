import { useShoppingCartContext } from "./Context";
import { ProductType } from "./types";

export const ShoppingCart = () => {
  const onHandleClearBasket = () => handleClearBasket();

  const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

  let basketItemsObject = {};

  for (const item of shoppingCartItems) {
    if (basketItemsObject[item.id]) {
      basketItemsObject[item.id].qty += 1;
    } else basketItemsObject[item.id] = { ...item, qty: 1 };
  }

  const handleClearBasket = () => setShoppingCartItems([]);

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      {Object.values(basketItemsObject).map((product: ProductType) => {
        const { title, description, thumbnail, qty, id } = product;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <div>{description}</div>
            <div>Quantity:{qty}</div>
            <img src={thumbnail} />
          </div>
        );
      })}
      <button onClick={onHandleClearBasket}>clear basket</button>
    </div>
  );
};
