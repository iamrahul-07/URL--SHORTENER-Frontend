import {useForm} from 'react-hook-form'
import { registerSchema } from '../Validation/Register-schema';
import {zodResolver} from "@hookform/resolvers/zod";
import { registerApiCall } from '../api/user-api';
import { useNavigate } from 'react-router-dom';

export const useRegister=()=>{
    const navigate=useNavigate();
    const {register, handleSubmit,reset, formState:{errors}}=useForm({
        resolver : zodResolver(registerSchema),
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });
    const doSubmit=async (formData)=>{
        try{
            const response=await registerApiCall(formData);
            if(response.data.id){
                alert("Register Successfully");
                navigate('/login');
            }else{
                alert("Register Fails");
            }
        }catch(err){
            alert("Register Fails");
        }
        
    }
    return {register, handleSubmit, doSubmit, errors, reset};
}