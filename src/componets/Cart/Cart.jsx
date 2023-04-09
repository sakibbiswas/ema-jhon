import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Cart = ({ cart, handelClearcart, children }) => {
    // const cart = props.cart option 1
    // const {cart}=props option 2
    let Total = 0;
    let totalshipping = 0;
    let quantity = 0;
    for (let product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1
        // }
        // shortcut
        // product.quantity = product.quantity||1
        // console.log(product.price);
        Total = Total + product.price * product.quantity;
        totalshipping = totalshipping + product.shipping
        quantity = quantity + product.quantity;
    }
    const tax = Total * 7 / 100;
    const garndTotal = Total + totalshipping + tax.toFixed(2);
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <div className='cart-items'>
                <p>Selected items:{quantity}</p>
                <p>Total Price:${Total}</p>
                <p>Total Shipping Charge:${totalshipping}</p>
                <p>Tex:${tax.toFixed(2)}</p>
                <h6>Grand Total:${garndTotal}</h6>
                <button onClick={handelClearcart} className='btn-clear'> <span>Clear cart</span> <FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon></button>
                {children}

            </div>

        </div>
    );
};

export default Cart;