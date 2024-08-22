import axios from "../Api/axios";
const USER_API="users"

export const signup=async(user)=>{
    await axios.post(USER_API + "/register",user)

}
export const signin=async(user)=>{
    await axios.post(USER_API + "/login",user)

}