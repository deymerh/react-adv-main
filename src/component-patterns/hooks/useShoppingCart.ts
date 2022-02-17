import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

  const onProductCountChange = ({count, product}:{count: number, product: Product})=>{

    console.log({count});

    setShoppingCart(oldShoppingCart=>{
      
      const productInCart:ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0};

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return{
          ...oldShoppingCart,
          [product.id]:productInCart
        }
      }
      const {[product.id]:toDelete, ...rest} = oldShoppingCart;
      console.log({productInCart});
      return rest;
      // if (count === 0) {
      //   const toDelete = {...oldShoppingCart};
      //   delete toDelete[product.id];
      //   return toDelete;
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]:{...product, count}
      // }
    })
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}
