import {email, z} from "zod";
export const registerSchema=z.object({
    email:z.string().min(1,"Email is Required").email('Invalid Email Format'),
    password:z.string().min(8,"Password must be >= 8").max(25,"Password must be <=25"),
    name:z.string().min(2,"Name must be >= 2").max(25, "Maximum character allowed i 25").trim()
})