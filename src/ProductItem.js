import React,{useState, useEffect} from 'react';
import CardDetails from './cardDetails';
const ProductItem = () => {

    const [ProductItem, setProductItem] = useState([]);
    const [search, setSearch] = useState('');
    const [productFiltered, setProductFiltered] = useState([]);


    useEffect(() => {
        getProducts()
    },[])

    useEffect(() => {
        setProductFiltered(ProductItem.filter((items => items.title.toLowerCase().includes(search.toLowerCase()))))
    },[search, ProductItem])


    const getProducts = async() =>{
        let products = await fetch("https://fakestoreapi.com/products")
        products = await products.json();
        setProductItem(products);
        console.log(products)
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }
    
return(<div>
     <div>
            <h1>Product Page</h1>
            {/* {search} */}
           <div style={{ height:"40px",display:"flex", justifyContent:"center", flexDirection:"row" }}>
           <input className="search-type" type="text"  placeholder="search" onChange={handleChange}></input>
           {/* <button style={{marginLeft:"60px", border:"none", outline:"none"}} type="submit"><img style={{width:"30px", height:"30px"}} src={Cart}/></button> */}
           </div>
            
            <div style={{ display: "flex", flexDirection:"row", width:"100%", height:"auto", flexWrap:"wrap",padding:"40px"}}>
            { productFiltered.length > 0 ?
               productFiltered.map((value,idx) => (<CardDetails key={idx} {...value}/>))
               :
               <p>Product not found</p>
            } 
       </div>
        </div>
</div>)

}
export default ProductItem;