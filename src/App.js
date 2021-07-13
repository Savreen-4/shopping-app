import React from 'react';
import './App.css'
import Nav from './Nav'
import Homepage from './Homepage';
import About from './About';
import Form from './Form';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Products from './Products';
import NewForm from './NewForm'
import Cart from './Cart';
import ProductItem from './ProductItem';
import Checkout from "./Checkout"
function App() {
  return (
     <Router>
    <div className="App">
     <Nav/>
     {/* <About/> */}
     {/* <Route/>
     */}
     <Route path="/About" component={About} />
     <Route path = "/homepage" component={Homepage} />
     <Route path = "/Form" component = {Form} />
     <Route path = "/Products" component = {Products}/>
     <Route path = "/Cart" component = {Cart}/> 
     <Route path ="/pro" component={ProductItem}/>
     <Route path ="/checkout" component={Checkout}/>
    
    </div>
    {/* <div>
    <Link  to={"./Homepage"}>
                       <button>Products</button>
                    </Link>
    </div> */}

     </Router>
  );
}

export default App;