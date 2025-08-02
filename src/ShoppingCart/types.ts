export interface ShoppingCartContextTypes {
  shoppingCartItems?: ProductType[] | [];
  setShoppingCartItems?: (product) => void;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  availabilityStatus: "In Stock" | "Low Stock";
  qty?: number;
}

export interface ProductCardType {
  product: ProductType;
  // shoppingCartItems: ProductType[];
  setShoppingCartItems: (product) => void;
  // handleAddToBasket?: (product) => void;
}
