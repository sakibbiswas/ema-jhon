import React from 'react';
import "./Reviewitems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Reviewitems = ({ product, handelRemovecart }) => {
    const { _id, img, quantity, name, price } = product;
    console.log(product);
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-detail">
                <p className='title'> {name}</p>
                <p>Price<span className='orenge'>${price}</span></p>
                <p>Order-quantity:<span className='orenge'>${quantity}</span> </p>
            </div>
            <button onClick={() => handelRemovecart(_id)} className='btn-delete'>
                <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default Reviewitems;