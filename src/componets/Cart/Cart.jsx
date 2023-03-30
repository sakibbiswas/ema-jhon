import React from 'react';
import "./Cart.css"
const Cart = ({ cart }) => {
    // const cart = props.cart option 1
    // const {cart}=props option 2
    let Total = 0;
    let totalshipping = 0;
    for (let product of cart) {
        // console.log(product.price);
        Total = Total + product.price;
        totalshipping = totalshipping + product.shipping
    }
    const tax = Total * 7 / 100;
    const garndTotal = Total + totalshipping + tax.toFixed(2);
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <div className='cart-items'>
                <p>Selected items:{cart.length}</p>
                <p>Total Price:${Total}</p>
                <p>Total Shipping Charge:${totalshipping}</p>
                <p>Tex:${tax.toFixed(2)}</p>
                <h6>Grand Total:${garndTotal}</h6>
            </div>

        </div>
    );
};

export default Cart;