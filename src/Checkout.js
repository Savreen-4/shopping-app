import React, { useEffect, useState } from 'react'

function Checkout() {
    const [products , setProducts ] = useState([]);

    useEffect(() => {
        getCartItems();
    }, []);

    const getCartItems = () => {
        setProducts(JSON.parse(localStorage.getItem('cartdata')));
    }

    return (
        <div>
            <h1>Proceed Pay</h1>
            {products.map(value => {
                return(
                    <div key={value.id}>
                        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <img src={value.image} style={{width: '200px', height: '250px'}} alt={value.id}></img>
                            <h2 style={{marginLeft: '100px'}}>x{value.qty}</h2>
                            <h2 style={{marginLeft: '100px'}}>${value.price}</h2>
                        </div>
                    </div>
                )
            })} 
            <br></br>
            <br></br>
            <button style={{padding: '6px', width: '10%', fontSize: '24px'}}>Pay</button>
        </div>
    )
}

export default Checkout
