import React, { useEffect, useState } from 'react';
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
                <h3>Order summary</h3>
                <p>selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;