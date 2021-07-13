import React from 'react'
import NewForm from './NewForm'
function About (){
    return(
        <div style={{ display:"inline-flex" , overflow:"hidden"  }}>
            <div style={{ width : "250px" , height : "340px", backgroundColor : "#00CCCC", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>
            <NewForm/>
            </div>
        </div>
    )
}
export default About