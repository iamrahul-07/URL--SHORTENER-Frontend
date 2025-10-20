import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";
import { email } from 'zod';
import { loginApiCall } from '../api/user-api';
import { loginSchema } from '../Validation/Login-schema';
import { useNavigate } from 'react-router-dom';

export const useLogin=()=>{
    const navigate=useNavigate();
    const {register, handleSubmit,reset, formState:{errors}}=useForm({
        resolver : zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    });
    const doSubmit=async (formData)=>{
        try{
            const response=await loginApiCall(formData);
            if(response.data.id){
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("userId", response.data.id);
                alert("Login Successfully");
                navigate('/dashboard');
            }else{
                alert(response.data.message);
            }
        }catch(err){
            alert("Login Fails");
        }
        
    }
    return {register, handleSubmit, doSubmit, errors, reset};
}