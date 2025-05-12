import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "Login",
    initialState: null,
    reducers: {
        addLogin: (state, action) => {
            return action.payload
        },
        removeLogin: (state, action) => {
            return null
        }
    }
});

export const { addLogin, removeLogin } = userSlice.actions;
export default userSlice.reducer;