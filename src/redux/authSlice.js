import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  error: null,
  user: Cookies.get("userdetails")
    ? JSON.parse(Cookies.get("userdetails"))
    : null,
  token: Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      Cookies.set();
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.user = null;
    },
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.user = null;
    },
  },
});
export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} = authSlice.actions;
export const loginAction =
  (email, password, toast, router) => async (dispatch) => {
    try {
      dispatch(loginStart());

      const response = await axios.post(
        "https://babsreporting-server.babsreporting.com/api/admin/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
      dispatch(loginSuccess({ user: response.data }));
      Cookies.set("userdetails", JSON.stringify(response.data.data), {
        expires: 2,
      });
      Cookies.set("token", JSON.stringify(response.data.data.token), {
        expires: 2,
      });
      window.location = "/dashboard/home";
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      dispatch(loginFailure({ error }));
    }
  };

export default authSlice.reducer;
