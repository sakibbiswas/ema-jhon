import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitems from '../Revewitems/Reviewitems';

const Orders = () => {
    const cart = useLoaderData()
    console.log(cart);

    return (

        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product => <Reviewitems

                        key={product.id} product={product}></Reviewitems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Orders;