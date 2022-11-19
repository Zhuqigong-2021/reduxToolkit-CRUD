import { createSlice } from "@reduxjs/toolkit";
// import { UserData } from "../../fakeData";

const initialState = {
  value: []
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    changeName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addUser, changeName, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
