import { call, put, takeLatest } from "redux-saga/effects";
import routeApi from "../../api/routeApi";
import { routeActions } from "../routes/routeSlice";

function* fetchRoute(action) {
  try {
    const response = yield call(routeApi.getRoute, action.payload);
    yield put(routeActions.fetchRouteSuccess(response));
  } catch (e) {
    yield put(routeActions.fetchRouteFailed(e));
  }
}

export default function* routeSaga() {
  yield takeLatest(routeActions.fetchRoute.type, fetchRoute);
}
