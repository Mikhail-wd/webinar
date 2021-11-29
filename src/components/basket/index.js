import React from 'react';
import 'components/basket/style.css';



function Basket({store}) {
    
  return (
    <div className={'modal' + (store.state.basket.activeBasket===false ?   ' none':'' )}>
        
        <div className='Basket'>
            <div className='Basket_header'>
                <div className='Basket_name'><h1>Корзина </h1></div>
                <div className='Basket_close'><button onClick={() => store.selectDeactive(false,store.state.items)}>Закрыть</button></div>
            </div>
            <div className='Basket_list' >{store.state.sortedBasket.map((basket,index) =>
            
                <div key={index} className={'Basket_item' + (!basket.times_ordered ? ' none' : '')}>
                    <div className='Basket_title'> {++index}.{'   '+basket.title}</div>
                    <div className='Basket_price'> {basket.price} ₽ {basket.times_ordered} шт </div>    
                </div>
                )}
            </div>
            
            <div className='Basket_order'>Итого {store.state.counterOfMoney} ₽ {store.state.counterOfOrders}шт</div>
        </div>
        {console.log(store.state.counterOfMoney)}
        {console.log(store.state.counterOfOrders)}
    </div>
  );
}
;
export default Basket;