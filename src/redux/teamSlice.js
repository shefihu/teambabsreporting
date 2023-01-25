import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  loading: false,
  loadingDelete: false,
  loadingAdmins: true,
  addTeam: {},
  error: null,
  deleteadmin: {},
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
    addteamStart(state) {
      state.loading = true;
      state.error = null;
    },
    addteamSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.addTeam = action.payload.addTeam;
    },
    addteamFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.addTeam = null;
    },
    deleteteamStart(state) {
      state.loadingDelete = true;
      state.error = null;
    },
    deleteteamSuccess(state, action) {
      state.loadingDelete = false;
      state.error = null;
      state.deleteadmin = action.payload.deleteadmin;
    },
    deleteteamFailure(state, action) {
      state.loadingDelete = false;
      state.error = action.payload.error;
      state.deleteadmin = null;
    },
  },
});
export const {
  teamStart,
  teamSuccess,
  teamFailure,
  addteamStart,
  addteamFailure,
  addteamSuccess,
  deleteteamStart,
  deleteteamSuccess,
  deleteteamFailure,
} = teamSlice.actions;
export const addAdmin =
  (email, name, password, token, toast, navigate) =>
  async (dispatch, getState) => {
    try {
      dispatch(addteamStart());

      const response = await axios.post(
        "https://teambabs-server-bolu1.koyeb.app/api/admin/signup",
        { email, name, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addteamSuccess({ addTeam: response.data }));
      window.location = "/dashboard/team";
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(addteamFailure({ error }));
    }
  };
export const fetchTeams = (token) => async (dispatch) => {
  try {
    dispatch(teamStart());
    const teams = await axios.get(
      "https://teambabs-server-bolu1.koyeb.app/api/admin/admins",
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
export const deleteAdmin =
  (id, token, toast, setIsOpen) => async (dispatch, getState) => {
    try {
      dispatch(deleteteamStart());

      const response = await axios.delete(
        `https://teambabs-server-bolu1.koyeb.app/api/admin/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deleteteamSuccess({ deleteadmin: response.data }));
      // if (response.status === "200") {
      //   setIsOpen(false);
      // }
      window.location = "/dashboard/team";
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response && error.response.data.message && error.message
          ? error.response.data.message
          : error.data
      );
      dispatch(deleteteamFailure({ error }));
    }
  };

export default teamSlice.reducer;
