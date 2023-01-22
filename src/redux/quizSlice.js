import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  error: null,
  addquiz: {},
};
const postSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    quizStart(state) {
      state.loading = true;
      state.error = null;
    },
    quizSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.addquiz = action.payload.addquiz;
    },
    quizFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.addquiz = null;
    },
  },
});
export const { quizStart, quizSuccess, quizFailure } = postSlice.actions;
export const postAction =
  (formData, token, toast, navigate) => async (dispatch, getState) => {
    try {
      dispatch(quizStart());

      const response = await axios.post(
        "https://teambabs.onrender.com/api/post/new",
        formData,
        {
          "Content-Type": "multipart/form-data",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(quizSuccess({ addpost: response.data }));
      window.location = "/dashboard/home";
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(quizFailure({ error }));
    }
  };

export default postSlice.reducer;
