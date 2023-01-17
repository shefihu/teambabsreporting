import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
