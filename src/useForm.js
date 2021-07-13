import {useState} from 'react'

const useForm = validate =>{
    const [errors,setErrors] = useState({})
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''

    });
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setValues({...values,[name]:value});
        };
     const handleSubmit=(e)=>{
         e.preventDefault();
         setErrors(validate(values));
         //console.log(values);
         console.log(values);
        
     };
    return{
        handleChange,
        values,
        handleSubmit,
        errors,
    }
};
export default useForm;
