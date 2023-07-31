import { call, put, takeLatest } from "redux-saga/effects";
import routeListApi from "../../api/routeListApi";
import {
  fetchRouteList,
  fetchRouteListSuccess,
  fetchRouteListFailed,
} from "../routeList/routeListSlice";

function* fetchRouteListSaga(action) {
  try {
    const response = yield call(routeListApi.getRouteList, action.payload);

    yield put(fetchRouteListSuccess(response));
  } catch (e) {
    yield put(fetchRouteListFailed(e));
  }
}

export default function* routeListSaga() {
  yield takeLatest(fetchRouteList.type, fetchRouteListSaga);
}
