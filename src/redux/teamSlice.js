import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingAdmins: true,

  error: null,

  admins: [],
};
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    teamStart(state) {
      state.loadingAdmins = true;
      state.error = null;
    },
    teamSuccess(state, action) {
      state.loadingAdmins = false;
      state.error = null;
      state.admins = action.payload.admins;
    },
    teamFailure(state, action) {
      state.loadingAdmins = false;
      state.error = action.payload.error;
      state.admins = null;
    },
  },
});
export const { teamStart, teamSuccess, teamFailure } = teamSlice.actions;
export const fetchTeams = (token) => async (dispatch) => {
  try {
    dispatch(teamStart());
    const teams = await axios.get(
      "https://teambabs.onrender.com/api/admin/admins",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(teamSuccess({ admins: teams?.data.data }));
  } catch (error) {
    console.log(error);
    dispatch(teamFailure({ error }));
  }
};

export default teamSlice.reducer;
