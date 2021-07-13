
import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Products = (props) =>{
    
    const [products , setProducts ] = useState([]);
    // const [search,setSearch] = useState('');
    // const [filterSearch,setFilterSearch] = useState([]);


    useEffect(  () => {
        getProducts();
        
    } , [])
    // useEffect(()=>{
    //     setFilterSearch(
    //         products.filter(user=>{ user.title.toLowerCase().includes(search.toLowerCase())
    //       })
    //     )
    //   },[search,products])

    const getProducts = async () =>{
        let products = await fetch("https://fakestoreapi.com/products");
        products = await products.json();
        setProducts(products);
        console.log(products);
        localStorage.setItem('data', products);

    }

    return(
        <div>
           <h3>Products page</h3>

           {
               products.length > 0 ? 
               
               products.map((value,index)=>{
                
                    return(
                        <div style={{ display:"inline-flex" , overflow:"hidden"  }} >
                            
                            <div style={{ width : "100%" , height : "100%", backgroundColor : "#FFF", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>
                                <img src={ value.image } style={ { display: "block" , margin:"0 auto", width:"200px",height:"200px" } } />
                                
                                <div col="5"> 
                                    <h1 >
                                       { value.id } 
                                        <small style={{textAlign:'right',float:"right"}}>${value.price}</small>
                                        <br/>
                                       
                                         <h6>{value.description}</h6>
                                        <h6>{value.category}</h6>
                                      
                                    </h1>
                                </div>

                                <div style={{textAlign:"center" ,  paddingTop:10 }}>
                                    <button style={{ marginRight:10, background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF" }}>View Product</button>
                                    <button style={{ background : "green" , border:"0px", padding : 10,borderRadius : 5, boxShadow:"0px 0px 2px #000", color:"#FFF" }}>Add To Cart </button>
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

export default Products