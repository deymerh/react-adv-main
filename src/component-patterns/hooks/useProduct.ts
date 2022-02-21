import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface UseProductArgs{
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: OnChangeArgs)=>void;
}
export const useProduct = ({onChange, product, value = 0, initialValues}:UseProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef<boolean>(false);

  const increaseBy = (valueIncreaseBy:number) => {
    let newValue = Math.max((counter + valueIncreaseBy), 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({count: newValue, product});
  }

  const reset = ()=>{
    setCounter(initialValues?.count || value);
  }
  
  useEffect(() => {
    console.log('LLegue aqui: ');  
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
  }
}
