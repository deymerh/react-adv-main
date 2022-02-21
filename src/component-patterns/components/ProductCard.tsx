import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { 
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
  ProductCardHandlers
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  // children?: React.ReactElement | React.ReactElement[];
  children: (args:ProductCardHandlers)=>JSX.Element;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: OnChangeArgs)=>void;
}

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  initialValues,
  onChange}:Props) => {
   const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({
     onChange, product, value, initialValues
  });
  return (
    <Provider value={{counter, increaseBy, product, maxCount}}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset
            })}
        </div>
    </Provider>
  )
}
