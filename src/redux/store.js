import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import authReducer from "./authSlice";
import postReducer from "./PostSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
export default store;
