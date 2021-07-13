import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import CartIcon from './svg/shopping-cart-solid.svg'

const Homepage = (props) =>{

    const [products , setProducts ] = useState([]);
    const [search,setSearch] = useState('');
    const [filterSearch,setFilterSearch] = useState([]);
    const [addCart,setaddCart]= useState([]);
    
    
    useEffect(  () => {
        getProducts();
        setaddCart(JSON.parse(localStorage.getItem('cartdata')) || [])
        // localStorage.setItem("data", JSON.stringify(products));
    } , [addCart]);

    // const handle = () => {
    //     localStorage.setItem("data", JSON.stringify(products));
    // }

    useEffect(()=>{
        setFilterSearch(
            products.filter(user=>{
            return user.title.toLowerCase().includes(search.toLowerCase())
          })
        )
      },[search,products])

    const getProducts = async () =>{
        let products = await fetch("https://fakestoreapi.com/products");
        products = await products.json();
        setProducts(products);
        console.log(products);
 
    }

const addToCart=(values)=>{
    values["qty"]=1;
addCart.push(values);
localStorage.setItem("cartdata",JSON.stringify(addCart));

}

    return(
        <div>
            
            <div>
            <Link to="/cart">
            <img src={CartIcon} alt="" width="20" /> {addCart.length}
            </Link>
    
            </div>
                  <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)}/>  
                 
           <h3>Products page</h3>

           {
               products.length > 0 ? 
               
               filterSearch.map((value,index)=>{
                
                    return(
                        <div key={index} style={{ display:"inline-flex" , overflow:"hidden"  }} >
                            
                            <div style={{ width : "250px" , height : "340px", backgroundColor : "#FFF", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>

                                <img src={ value.image } style={ { display: "block" , margin:"0 auto", width:"200px",height:"200px" } } />
                                
                                <div>
                                    <h5 >
                                        { value.title }
                                        <small style={{textAlign:'right',float:"right"}}>${value.price}</small>
                                        
                                    </h5>
                                </div>

                                <div style={{textAlign:"center" ,  paddingTop:10 }}>
                                <Link  to={"./Products"}>
                                    <button style={{ marginRight:10, background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF" }}>View Product</button>
                                </Link>
                                  
                                    <button style={{ background : "green" , border:"0px", padding : 10,borderRadius : 5, boxShadow:"0px 0px 2px #000", color:"#FFF" }} onClick={()=>addToCart(value)}>Add To Cart </button>
                                    {/* <button style={{ background : "green" , border:"0px", padding : 10,borderRadius : 5, boxShadow:"0px 0px 2px #000", color:"#FFF" }} onClick={()=>setProducts(value.title)}>Cart </button> */}
                                    {/* </Link> */}
                                   
                                </div>
                               
                            </div>

                        </div>

                    )

               }) 
               
               : <p>No Products found</p>
           } 

        </div>
    );
}

export default Homepage