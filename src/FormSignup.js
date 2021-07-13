import React from 'react'
import { Link, Router,Route } from 'react-router-dom'
import './App.css'
import useForm from './useForm'
import validate from './validateInfo'
import Products from './Products'
const FormSignup = () => {
    const{handleChange,values,handleSubmit,errors}=useForm(validate);
    return (
        <div>
           
            <form  onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                <div>
                   <label>
                        Name
                    </label>
                    <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    style={{fontWeight:'bold'}}
                    />
                     {errors.username && <p>{errors.username}</p>}

                    <div/>
    
                    <div>
                    <label>
                    email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="from-input"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    style={{fontWeight:'bold'}}
                    />
                      {errors.email && <p>{errors.email}</p>}

                    </div>

                    <div>
                    <label>
                        password
                    </label>
                    <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your Password"
                    value={values.password}
                    onChange={handleChange}
                    style={{fontWeight:'bold'}}
                    />
                 {errors.password && <p>{errors.password}</p>}

                    </div>

                    
{/*                    
                  
                    <input
                    id='password2'
                    type="password"
                    name="password2"
                    className="form-input"
                    placeholder="Enter your Confirm-Password"
                    value={values.password2}
                    onChange={handleChange}
                    /><br/>
                     <label htmlfro="password2" className="from-label">
                        confirm password
                    </label>
                 {errors.password2 && <p>{errors.password2}</p>} */}

                </div>
                
                
                <Link  to={"./Homepage"}>
                       <button style={{width:90, margin:10, background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF" }}>login</button>
                </Link> 
               
                {/* <span className="form-input-login">Already have an account ? login
                <a href="#">here</a>
                </span> */}
                
                 {/* <div>
                    <Link  to={"./Homepage"}>
                       <button style={{ marginRight:10, background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF" }}>login</button>
                    </Link>
                  </div> */}

            </form>
            {/* <Router>
            <Route path = "Home" component={Home}/>
            </Router> */}
            
        </div>
    )
}

export default FormSignup