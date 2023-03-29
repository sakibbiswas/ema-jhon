
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { name, price, img, seller, quantity, ratings
    } = props.product;
    const AddHandeltocart = props.AddHandeltocart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>price:${price}</p>
                <h6>Menufacturer:{seller}</h6>
                <p>Rating:{ratings}star</p>
            </div>
            <button onClick={() => AddHandeltocart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;