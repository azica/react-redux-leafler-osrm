import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loadingError: false,
  routeList: [],
};

const routeListSlice = createSlice({
  name: "routeList",
  initialState,
  reducers: {
    fetchRouteList(state, action) {
      state.loading = false;
      state.loadingError = false;
    },
    fetchRouteListSuccess(state, action) {
      state.routeList = action.payload;
      state.loadingError = false;
    },
    fetchRouteListFailed(state, action) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

// Actions
export const { fetchRouteList, fetchRouteListSuccess, fetchRouteListFailed } =
  routeListSlice.actions;

//Selectors
export const routeListSelector = (state) => state.routeList;

//Reducers
export default routeListSlice.reducer;
