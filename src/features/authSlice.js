import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { signin, signup } from "../services/authservice"
export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await signup(user);
 
    return res.data
    }
    catch (error) {
    return rejectWithValue(error.message);
    }});

    export const login = createAsyncThunk(
        "auth/login",
        async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try{
        const res= await signin(user);
     
        return res.data
        }
        catch (error) {
        return rejectWithValue(error.message);
        }});
    
    
    export const authSlice = createSlice({
        name: "auth",
        initialState: {
        user:null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        status:"",
        isLoggedIn:false,
        },
        extraReducers: (builder) => {
            //get articles
            builder
            //insertion user
            .addCase(register.pending, (state, action) => {
            state.isLoading=true;
            state.status=null;
            })
            .addCase(register.fulfilled,(state, action) => {
            //state.user=action.payload.user;
            state.isLoading=false;
            state.status=null;
            state.isSuccess=true
            })
            .addCase(register.rejected,(state, action) => {
            state.isLoading=false;
            state.isError=true
            state.status=action.payload;
            state.user=null
            })

            .addCase(login.pending, (state, action) => {
                state.isLoading=true;
                state.status=null;
                })
                .addCase(login.fulfilled,(state, action) => {
                state.user=action.payload.user;
                state.isLoading=false;
                state.status=null;
                state.isSuccess=true
                state.isLoggedIn=true
                localStorage.setItem("token",action.payload.token)
                })
                .addCase(login.rejected,(state, action) => {
                state.isLoading=false;
                state.isError=true
                state.status=action.payload;
                state.user=null
                })

        }}
    )
    export default authSlice.reducer;