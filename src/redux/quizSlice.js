import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingQuiz: true,
  error: null,
  addquiz: {},
  quizQuestions: [],
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
    questionStart(state) {
      state.loadingQuiz = true;
      state.error = null;
    },
    questionSuccess(state, action) {
      state.loadingQuiz = false;
      state.error = null;
      state.quizQuestions = action.payload.quizQuestions;
    },
    questionFailure(state, action) {
      state.loadingQuiz = false;
      state.error = action.payload.error;
      state.quizQuestions = null;
    },
  },
});
export const {
  quizStart,
  quizSuccess,
  quizFailure,
  questionStart,
  questionSuccess,
  questionFailure,
} = postSlice.actions;
export const Add =
  (
    subject,
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    answer,
    token,
    toast
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch(quizStart());

      const response = await axios.post(
        "https://teambabs-server-bolu1.koyeb.app/api/quiz/new",
        {
          subject,
          question,
          optionOne,
          optionTwo,
          optionThree,
          optionFour,
          answer,
        },

        {
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
export const fetchQuestions = (course) => async (dispatch) => {
  try {
    dispatch(questionStart());
    const questions = await axios.get(
      `https://teambabs-server-bolu1.koyeb.app/api/quiz/questions/${course}`
    );
    console.log(questions);
    dispatch(questionSuccess({ quizQuestions: questions?.data.data }));
  } catch (error) {
    console.log(error);
    dispatch(questionFailure({ error }));
  }
};
export default postSlice.reducer;
