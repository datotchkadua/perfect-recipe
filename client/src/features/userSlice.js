import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isSearchModalOpen: false,
  isBurgerOpen: false,
};
// const getUserFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("user")) || null;
// };

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    toggleModal: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
    toggleBurger: (state) => {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
  },
  selectors: {
    selectUsername: (state) => state?.user?.name,
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectIsSearchModalOpen: (state) => state.isSearchModalOpen,
    selectIsBurgerOpen: (state) => state.isBurgerOpen,
  },
});

export const { login, logout, toggleModal, toggleBurger } = userSlice.actions;
export const {
  selectUsername,
  selectIsAuthenticated,
  selectIsSearchModalOpen,
  selectIsBurgerOpen,
} = userSlice.selectors;

export default userSlice.reducer;
