import React, { useState } from 'react';
import './style.css';
import Basket from './components/basket/';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {

  return (
    
    <div className='App'>
        
      {console.log(store.getState().counterOfMoney)}
      {!store.state.basket.activeBasket==false && <Basket store={store}/>}
      <div className='App__head'>
        <h1>Магазин</h1>
      </div>
      <div className='Controls'>
        <div className='Controls__order'>
          В корзине:
        </div>
        
        <div className='Controls__order Controls__text'> {store.state.counterOfOrders ? store.state.counterOfOrders+' товаров / '+store.state.counterOfMoney+' ₽' : 'пусто'}.</div>
        <div className='Controls__order'>
          <button onClick={() => store.selectActive(true)}> Перейти </button>
        </div>       
      </div>
      <div className='App__center'>
        <div className='List'>{store.state.items.map(item =>
          <div
            key={item.code}
            className='List__item'
          >
            <div className='Item'>
              <div className='Item__number'>{item.code}</div>
              <div className='Item__title'>{item.title}</div>
              <div className='item__near__button' >{item.price+'  '}₽</div>
              <div className='button__near__item'>
                <button onClick={() => store.selectItem(item.code, item.price)}>
                  Добавить
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      
    </div>
    
  );
}

export default App;