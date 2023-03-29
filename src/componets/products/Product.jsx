import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, price, img, seller, quantity, ratings
    } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>price:${price}</p>
                <h6>Menufacturer:{seller}</h6>
                <p>Rating:{ratings}star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;