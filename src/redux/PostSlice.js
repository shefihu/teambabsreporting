import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingPosts: true,
  loadingDelete: false,
  error: null,
  addpost: {},
  allPosts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postStart(state) {
      state.loading = true;
      state.error = null;
    },
    postSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.addpost = action.payload.addpost;
    },
    postFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.addpost = null;
    },
    allPostsStart(state) {
      state.loadingPosts = true;
      state.error = null;
    },
    allPostsSuccess: (state, action) => {
      state.loadingPosts = false;
      state.error = null;
      state.allPosts = action.payload.allPosts;
    },
    allPostsFailure(state, action) {
      state.loadingPosts = false;
      state.error = action.payload.error;
      state.allPosts = null;
    },
  },
});
export const {
  postStart,
  postSuccess,
  postFailure,
  allPostsStart,
  allPostsSuccess,
  allPostsFailure,
} = postSlice.actions;
export const postAction =
  (formData, token, toast) => async (dispatch, getState) => {
    try {
      dispatch(postStart());

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
      dispatch(postSuccess({ addpost: response.data }));
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.data
      );
      dispatch(postFailure({ error }));
    }
  };
export const fetchAllPosts = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    dispatch(allPostsStart());
    const posts = await axios.get(
      "https://teambabs.onrender.com/api/post/posts"
    );

    dispatch(allPostsSuccess({ allPosts: posts?.data.data }));
  } catch (error) {
    dispatch(allPostsFailure({ error }));
  }
  setLoading(false);
};
export default postSlice.reducer;
