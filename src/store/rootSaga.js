import { all } from "redux-saga/effects";
import routeSaga from "../reducers/routes/routeSaga";
import routeListSaga from "../reducers/routeList/routeListSaga";

export default function* rootSaga() {
  yield all([routeSaga(), routeListSaga()]);
}
