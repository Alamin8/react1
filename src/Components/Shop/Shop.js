import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from './fakeData'
import'./Shop.css'
import Cart from '../Cart/Cart.js'
const Shop = () => {
    const first10=fakeData.slice(0,80)
    const [products, setProducts]=useState(first10)
    const [cart, setCart]=useState([])

    const handleProductAdd=(product)=>{
        console.log('clicked', product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd=><Product handleProductAdd={handleProductAdd} product={pd}>{}</Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;