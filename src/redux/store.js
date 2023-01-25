import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import authReducer from "./authSlice";
import teamReducer from "./teamSlice";
import postReducer from "./PostSlice";
import quizReducer from "./quizSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    team: teamReducer,
    quiz: quizReducer,
  },
});
export default store;
