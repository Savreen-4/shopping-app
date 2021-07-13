export default function validateInfo(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="Username is required";
    }

    if(!values.email){
        errors.email="Email is required";
    }else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email="Enter address in invalid";
    }
    if(!values.password){
        errors.password="Password is required";
    }else if(values.password.length<6){
        errors.password="Password needs to be 6 characters or more";
    }
    // if(!values.password2){
    //     errors.password2="Confirm-Password is required";
    // }else if (values.password2!==values.password){
    //     errors.password2="Password do not match"
    // }
    return errors;
}