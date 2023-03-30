import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';


import "./Shop.css"
const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])

    const AddHandeltocart = (product) => {
        // const newcart = [...cart, product]
        let newcart = [];
        const exsists = cart.find(pd => pd.id === product.id)
        if (!exsists) {
            product.quantity = 1;
            newcart = [...cart, product]
        }
        else {
            exsists.quantity = exsists.quantity + 1
            const remainnig = cart.filter(pd => pd.id !== product.id)
            newcart = [...remainnig, exsists]
        }
        setcart(newcart)
        addToDb(product.id)

    }
    useEffect(() => {
        // fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
        // .then(data => console.log(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savecart = []
        // step 1:get id
        for (const id in storedCart) {
            // get the products by using id
            const addedproduct = products.find(product => product.id === id)
            // setp 3 get quantity of product
            if (addedproduct) {
                const quantity = storedCart[id]
                addedproduct.quantity = quantity;
                // step 4 add the added product to the save cart
                savecart.push(addedproduct)
            }
        }
        setcart(savecart)
    }, [products])
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