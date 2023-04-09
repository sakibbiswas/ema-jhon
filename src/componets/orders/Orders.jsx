import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitems from '../Revewitems/Reviewitems';
import "./Ordders.css"
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savecart = useLoaderData()
    const [cart, setcart] = useState(savecart)

    const handelRemovecart = (id) => {
        console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setcart(remaining);
        removeFromDb(id)

    }
    // console.log(cart);

    return (

        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <Reviewitems

                        key={product.id}
                        product={product}
                        handelRemovecart={handelRemovecart}
                    >


                    </Reviewitems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Orders;