import {email, z} from "zod";
export const loginSchema=z.object({
    email:z.string().min(1,"Email is Required").email('Invalid Email Format'),
    password:z.string().min(8,"Password must be >= 8").max(25,"Password must be <=25"),
})