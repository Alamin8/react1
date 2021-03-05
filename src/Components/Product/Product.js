import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, name,seller,price,stock}=props.product
    return (
        <div className='product'>
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small>Only {stock} left stack avilable -order soon</small></p>
                <h3>$ {price}</h3>
                <button onClick={()=>props.handleProductAdd(props.product)} className='cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;