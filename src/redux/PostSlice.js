import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingPosts: true,
  loadinSingle: true,
  loadingPostCat: true,
  loadingDelete: false,
  error: null,
  addpost: {},
  allPosts: [],
  singlePost: {},
  deletePost: {},
  postByCat: [],
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
    deletePostStart(state) {
      state.loadingDelete = true;
      state.error = null;
    },
    deletePostSuccess(state, action) {
      state.loadingDelete = false;
      state.error = null;
      state.deletePost = action.payload.deletePost;
    },
    deletePostFailure(state, action) {
      state.loadingDelete = false;
      state.error = action.payload.error;
      state.deletePost = null;
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
    singlePostStart(state) {
      state.loadinSingle = true;
      state.error = null;
    },
    singlePostSuccess: (state, action) => {
      state.loadinSingle = false;
      state.error = null;
      state.singlePost = action.payload.singlePost;
    },
    singlePostFailure(state, action) {
      state.loadinSingle = false;
      state.error = action.payload.error;
      state.singlePost = null;
    },
    postByCatStart(state) {
      state.loadingPostCat = true;
      state.error = null;
    },
    postByCatSuccess: (state, action) => {
      state.loadingPostCat = false;
      state.error = null;
      state.postByCat = action.payload.postByCat;
    },
    postByCatFailure(state, action) {
      state.loadingPostCat = false;
      state.error = action.payload.error;
      state.postByCat = null;
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
  singlePostStart,
  singlePostSuccess,
  singlePostFailure,
  postByCatStart,
  postByCatSuccess,
  postByCatFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
} = postSlice.actions;
export const postAction =
  (formData, token, toast, navigate) => async (dispatch, getState) => {
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
      window.location = "/dashboard/home";
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(postFailure({ error }));
    }
  };
export const deletePost =
  (id, token, toast, setIsOpen) => async (dispatch, getState) => {
    try {
      dispatch(deletePostStart());

      const response = await axios.delete(
        `https://teambabs.onrender.com/api/post/post/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deletePostSuccess({ deletePost: response.data }));
      if (response.status === "200") {
        setIsOpen(false);
      }
      window.location = "/dashboard/home";
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(deletePostFailure({ error }));
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
export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    dispatch(singlePostStart());
    const post = await axios.get(
      `https://teambabs.onrender.com/api/post/post/${id}`
    );

    dispatch(singlePostSuccess({ singlePost: post?.data.data }));
  } catch (error) {
    dispatch(singlePostFailure({ error }));
  }
};
export const fetchPostByCategory = (category) => async (dispatch) => {
  try {
    dispatch(postByCatStart());
    const post = await axios.get(
      `https://teambabs.onrender.com/api/post/category/${category}`
    );
    dispatch(postByCatSuccess({ postByCat: post?.data.data }));
  } catch (error) {
    dispatch(postByCatFailure({ error }));
  }
};
export default postSlice.reducer;
