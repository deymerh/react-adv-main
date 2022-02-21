import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components/';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div>
          <ProductCard
            key={product.id} 
            product={product}
            className='bg-dark'
            initialValues={{
              count: 5,
              maxCount: 10
            }}
          >
             {
               ({count, isMaxCountReached, reset, increaseBy})=>(
                 <>
                  <ProductImage className="custom-image" />
                  <ProductTitle className='text-white text-bold' />
                  <ProductButtons className='custom-buttons' />
                  <span style={{color: 'white'}}>{count}</span><br />
                  {(
                    !isMaxCountReached && 
                    <>
                      <button onClick={()=>increaseBy(+2)}>+2</button>
                      <br />
                    </>
                  )}
                  <button onClick={()=>increaseBy(-2)}>-2</button>
                  <br />
                  <button onClick={reset}>Restaurar</button>
                 </>
               )
             }
          </ProductCard>
        </div>
    </div>
  )
}
