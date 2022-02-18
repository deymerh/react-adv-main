import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

  const onProductCountChange = ({count, product}:{count: number, product: Product})=>{

    setShoppingCart(oldShoppingCart=>{
      if (count === 0) {
        const toDelete = {...oldShoppingCart};
        delete toDelete[product.id];
        return toDelete;
      }
      return {
        ...oldShoppingCart,
        [product.id]:{...product, count}
      }
    })
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}
