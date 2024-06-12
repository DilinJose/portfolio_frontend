import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        loginData:[],
    },
    redusers:{
        setLogin:(state, action) => {
            state.loginData = action.payload;
        },
    },
});

export const { setLogin } = LoginSlice.actions;
export default LoginSlice.reducer;