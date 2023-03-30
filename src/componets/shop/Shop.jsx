import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../products/Product';


import "./Shop.css"
const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])

    const AddHandeltocart = (product) => {
        const newcart = [...cart, product]
        setcart(newcart)
    }
    useEffect(() => {
        // fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddHandeltocart={AddHandeltocart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;