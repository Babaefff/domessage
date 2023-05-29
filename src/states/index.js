import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  selectedChat: null,
  chats: [],
  notifications: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state) => {
      state.user = JSON.parse(localStorage.getItem("userInfo"));
    },
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setNotifications: (state, action) => {
      if (action.payload.add) {
        state.notifications = [action.payload.add, ...state.notifications];
      }
      if (action.payload.remove) {
        state.notifications = action.payload.remove;
      }
    },
  },
});

export const { setUser, setSelectedChat, setChats, setNotifications } =
  authSlice.actions;
export default authSlice.reducer;
