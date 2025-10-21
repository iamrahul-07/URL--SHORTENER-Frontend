import { apiClient } from "../../../shared/services/api-client.js"
export const registerApiCall=async (formData)=>{
    try{
        const response=await apiClient.post('/register',formData);
        return response;
    }catch(err){
        console.log("Register Api Call Fails", err);
        console.log(("Message", err.response?.data||err.message));
        throw err;
    }
}


export const loginApiCall=async (formData)=>{
    try{
        const response=await apiClient.post('/login',formData);
        return response;
    }catch(err){
        console.log("Login Api Call Fails", err);
        throw err;
    }
}


export const getAllUrlsApi = async (email) => {
  try {
    const response = await apiClient.get(`/all-urls/${email}`);
    return response;
  } catch (err) {
    console.log("Error fetching URLs:", err);
    throw err;
  }
};
