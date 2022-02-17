import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components/';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart();
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {
                products.map((product)=>(
                    <ProductCard key={product.id} 
                      product={product}
                      className='bg-dark'
                      onChange={(event)=>onProductCountChange(event)}
                      value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className='text-white text-bold' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))
            }
        </div>
      <div className='shopping-cart'>
        {
         Object.values(shoppingCart).map((item)=>{
           return(
            <ProductCard 
              product={item}
              key={item.id}
              value={item.count}
              className='bg-dark'
              style={{width: '120px'}}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className='custom-buttons'
                style={{display: 'flex', justifyContent: 'center'}}
              />
            </ProductCard>
          )
         })
        }
      </div>
      <code>
        <pre>
          { JSON.stringify(shoppingCart, null, 6)}
        </pre>
      </code>
    </div>
  )
}
