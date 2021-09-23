import {axiosInstance} from "../../config"
import {loginStart, loginFailure, loginSuccess} from "./AuthActions";

export const loginAuth= async(user, dispatch)=>{
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post("/auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}