import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { ProductContextProps, Product } from '../interfaces/interfaces';

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style}:Props) => {
   const {counter, increaseBy} = useProduct();
  return (
    <Provider value={{counter, increaseBy, product}}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children}
        </div>
    </Provider>
  )
}
