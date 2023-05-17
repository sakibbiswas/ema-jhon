import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';


import "./Shop.css"
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const [products, setproducts] = useState([])
    const [currentpage, setcurrentpage] = useState(0)
    const [itemsperPage, setitemsperpage] = useState(10)
    const [cart, setcart] = useState([])
    const { totalProducts } = useLoaderData();

    // const itemsperPage = 10;    //TODO make it dynamic
    const totalpages = Math.ceil(totalProducts / itemsperPage)
    console.log(totalProducts);

    // const pageNumber = []
    // for (let i = 1; i <= totalpages; i++) {
    //     pageNumber.push(i)
    // }
    // shortcut
    const totalNumber = [...Array(totalpages).keys()];


    /* ***************ChatGpt qustion- how does the pagination work give example and logic************
    1 Done > determine the total number of items
    2 ToDo : decide on the number of items per page
    3: Calculate the total number of pages
    */

    const AddHandeltocart = (product) => {
        // const newcart = [...cart, product]
        let newcart = [];
        const exsists = cart.find(pd => pd._id === product._id)
        if (!exsists) {
            product.quantity = 1;
            newcart = [...cart, product]
        }
        else {
            exsists.quantity = exsists.quantity + 1
            const remainnig = cart.filter(pd => pd._id !== product._id)
            newcart = [...remainnig, exsists]
        }
        setcart(newcart)
        addToDb(product._id)

    }
    useEffect(() => {
        // fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        fetch('http://localhost:5000/products')
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
            const addedproduct = products.find(product => product._id === id)
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

    const options = [5, 10, 20]
    function hadelselectchange(event) {
        setitemsperpage(parseInt(event.target.value))
        setcurrentpage(0)


    }
    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            AddHandeltocart={AddHandeltocart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link className='order-link' to="/orders"><button className='orderbtn'>Review order</button></Link>
                    </Cart>
                </div>
            </div>

            {/* pagination */}
            <div className="pagination">
                <p>currenpage : {currentpage} an items per page {itemsperPage}</p>
                {
                    totalNumber.map(number => <button
                        key={number}
                        className={currentpage === number ? 'selected' : ''}
                        onClick={() => setcurrentpage(number)}
                    >{number}
                    </button>)
                }
                <select value={itemsperPage} onChange={hadelselectchange}>
                    {
                        options.map(option => <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>)
                    }
                </select>

            </div>
        </>
    );
};

export default Shop;