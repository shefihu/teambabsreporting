import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingQuiz: true,
  loadingDelete: false,
  error: null,
  addquiz: {},
  quizQuestions: [],
  deletequestion: {},
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
    deletequestionStart(state) {
      state.loadingDelete = true;
      state.error = null;
    },
    deletequestionSuccess(state, action) {
      state.loadingDelete = false;
      state.error = null;
      state.deletequestion = action.payload.deletequestion;
    },
    deletequestionFailure(state, action) {
      state.loadingDelete = false;
      state.error = action.payload.error;
      state.deletequestion = null;
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
  deletequestionStart,
  deletequestionSuccess,
  deletequestionFailure,
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
        "https://babsreporting-server.babsreporting.com/api/quiz/new",
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
      dispatch(quizSuccess({ addquiz: response.data }));
      toast.success(
        "Your Question was addd successfully, You will be redirected shortly"
      );
      setTimeout(() => {
        window.location = "/dashboard/quiz";
      }, 3000);
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
      `https://babsreporting-server.babsreporting.com/api/quiz/questions/${course}`
    );
    dispatch(questionSuccess({ quizQuestions: questions?.data.data }));
  } catch (error) {
    console.log(error);
    dispatch(questionFailure({ error }));
  }
};
export const deleteQuestion =
  (id, token, toast, setIsOpen) => async (dispatch, getState) => {
    try {
      dispatch(deletequestionStart());

      const response = await axios.delete(
        `https://babsreporting-server.babsreporting.com/api/quiz/question/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      dispatch(deletequestionSuccess({ deletequestion: response.data }));
      // if (response.status === "200") {
      //   setIsOpen(false);
      // }
      window.location = "/dashboard/quiz";
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(deletequestionFailure({ error }));
    }
  };
export default postSlice.reducer;
