import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loadingError: false,
  route: null,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRouteSuccess(state, action) {
      state.route = action.payload;
      state.loading = false;
    },
    fetchRouteFailed(state) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

// Actions
export const routeActions = routeSlice.actions;

// Selectors
export const routeSelector = (state) => state.routes;

//Reducers
export default routeSlice.reducer;
