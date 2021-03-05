import React from 'react';

const cart = (props) => {
    const cart=props.cart

    // findout total: way-1
    const total=cart.reduce((total, pd)=>total+pd.price, 0) // 0 means initial value
    // findout <total:way-2>  
    // let total=0
    // for(let i=0; i<cart.length; i++){
    //     const product=cart[i]
    //     total=total+product.price
    // }  

    // Calculation
    let ShippigCharge=0;
    if(total===0){
        ShippigCharge=0
    }else if(total<=35){
        ShippigCharge=10
    }else if(total <=100){
        ShippigCharge=20
    }else{
        ShippigCharge=35
    }
    const formetCalculation=(num)=>{
        const formet=num.toFixed(2)
        return Number(formet)
    }
    const TaxVat=formetCalculation(total/10)
    const grandTotal=total+ShippigCharge+TaxVat;
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price:${formetCalculation(total)}</p>
            <p>Shipping cost: ${ShippigCharge}</p>
            <p>Tax + Vat: ${TaxVat}</p>
            <p>Total Price: ${formetCalculation(grandTotal)}</p>
        </div>
    );
};

export default cart;