import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", id: 0, loggedin: false}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;

        }
    }

})

export const { login } = userSlice.actions;

export default userSlice.reducer;