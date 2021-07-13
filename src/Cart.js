import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import './App.css'
function Cart (){

    const [products , setProducts ] = useState([]);
    const[counter,setCounter] = useState(1);
    

     useEffect(  () => {
        // getProducts();
        // localStorage.getItem("data", JSON.parse(products));
        let cart = JSON.parse(localStorage.getItem("cartdata"));
        setProducts(cart);
        console.log(cart);
    } , [products]);

  
    const removeFromCart = (id)=>{
     let data = JSON.parse(localStorage.getItem("cartdata"))
     data.splice(id,1);
        localStorage.setItem("cartdata", JSON.stringify(data));
    }

    // const handleClick1 = (qty) =>{
    //     let add =JSON.parse(localStorage.getItem("cartdata"))
    //     add.push(qty,+1);
    //     localStorage.setItem("cartdata",JSON.stringify(add));
            
       
        // setCounter(counter + 1)
           
        // localStorage.setItem("newcart",JSON.stringify(counter))
        // let add = JSON.parse(localStorage.getItem("cartdata"))
        
        // localStorage.setItem("cartdata",JSON.stringify(add) )
     
    // }

    const addQty = (item, index) => {
        let product = JSON.parse(localStorage.getItem("cartdata"));
        item["qty"] = item.qty + 1;
        item["price"] = item.qty * item.price;
        product.splice(index, 1, item);
        localStorage.setItem("cartdata", JSON.stringify(product));
        console.log(product);
      };
    
      const removeQty = (item, index) => {
        item["qty"] = item.qty - 1;
        products.splice(index, 1, item);
        localStorage.setItem("cartdata", JSON.stringify(products));
      };

    const handleClick2 =()=>{
       
            // setCounter(counter-1)
            // if(counter > 0){
            //     setCounter(prevState => ({counter: prevState.counter-1}))
            //  }
            if(counter === 0){
                setCounter({
                    counter:0
                });
              }else {  
                setCounter(counter-1);
              }
        
    }

    return(
        <>
        <div>
            
  
{
   
    products.map((value,index)=>{
        return(
            <div key={index} style={{ display:"inline-flex" , overflow:"hidden"  }} >
                            
                   <div style={{ width : "250px" , height : "340px", backgroundColor : "#FFF", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>

                                <img src={ value.image } style={ { display: "block" , margin:"0 auto", width:"200px",height:"200px" } } ></img>
                                
                                <div>
                                    <h5 >
                                        { value.title }
                                        <small style={{textAlign:'right',float:"right"}}>${value.price}</small>
                                        
                                    </h5>
                                </div>

                      {/* Quantity:<input type="number" 
                      min="1"
                      /> */}
                      <span>
     
        <button onClick={()=>addQty(value,index)}>+</button>
        {value.qty}
        <button  onClick={()=>removeQty(value,index)}>-</button>
        Price:{value.price}=
           {counter*value.price}
                      </span><br/>
                <button onClick={()=>removeFromCart(index)} style={{marginTop:20}}>delete</button>
            </div>
            </div>
        )
    })
   
}

        </div>
        <Link  to={"./Checkout"}>
<button style={{ background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF",width:170,marginTop:70}} >Proceed</button>
</Link>
</>
    )
}
export default Cart