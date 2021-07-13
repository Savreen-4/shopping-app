import React from 'react'
// import './Card.css';
const CardDetails = (props) => {
    const {title,image, price} = props;
    
    const addItemInCart = () =>{
        let array = [];
        let cart = localStorage.getItem("cart");
        if(cart === null){
            let obj = {};
            obj['name'] = props;
            array.push(obj);
            localStorage.setItem("cart", JSON.stringify(array));
        }
        else{
            cart =JSON.parse(localStorage.getItem("cart"));
            let obj = {};
            obj['name'] = props;
            cart.push(obj);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    return (
        <div className="card">
       <div>
       <img src={image} alt="image" style={{width:"200px",height:"200px" ,marginTop:"5px"}}/>
       </div>
           <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
           <p>{title}</p>
           <span>${price} </span>
           </div>
           <div>
               <button className="cart-button" type="submit">View</button>
               <button onClick={addItemInCart} className="cart-button" type="submit">Add To Cart</button>
           </div>
        </div>
    )
}

export default CardDetails;