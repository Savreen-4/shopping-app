import React from 'react';
import {Link, Router,Route} from 'react-router-dom';
import Products from './Products'
import CartIcon from './svg/shopping-cart-solid.svg'

    function Nav() {
        
        return(
            <nav>
                {/* <Router>
                <Route path = "/Products" component = {Products} />
                </Router> */}
                <ul className="nav-links">
                    
                    <h1 style={{color:'#FF6666'}}>Start Shopping</h1>
                    <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    <Link  to={"./About"}>
                        <li>
                            login
                        </li>
                    </Link>
                    
                    {/* <Link to={"./Homepage"}> */}
                        {/* <li>Homepage</li> */}
                    {/* </Link> */}

                    {/* <Link to={"./Form"}> */}
                        {/* <li>Form</li> */}
                    {/* </Link> */}
                    {/* <Link to={"./Products"}> */}
                        {/* <li>Products</li> */}
                    {/* </Link> */}
                    <div className="nav-cart">
                        {/* <span>{cart.length}</span> */}
                        {/* <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link> */}
                    </div>
                </ul>
            </nav>
        );

    }
      

export default Nav;