export const loginStart=()=>({
    type:"LOGIN_START"
})
export const logout=()=>({
    type:"LOGOUT"

})
export const loginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
})
export const loginFailure=()=>({
    type:"LOGIN_FAILURE"

})