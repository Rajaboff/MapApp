import { call, put, takeEvery } from "redux-saga/effects";
import applications from "../applications.json";
import {
  FETCH_APPLICATION,
  SET_APPLICATION,
} from "./types";

const getApplications = (): any =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        applications.map((item: any) => {
            const [coordinateFromX, coordinateFromY] = item.from;
            const [coordinateToX, coordinateToY] = item.to;
    
            return {
              ...item,
              from: {
                coordinateX: coordinateFromX.toString(),
                coordinateY: coordinateFromY.toString(),
              },
              to: {
                coordinateX: coordinateToX.toString(),
                coordinateY: coordinateToY.toString(),
              },
            };
          }),
      );
    }, 3000);
  });

export function* mySaga(): any {
  yield takeEvery(FETCH_APPLICATION, fetchApplications);
}

export function* fetchApplications(): any {
  try {
    const applications = yield call(getApplications as any);
    yield put({
      type: SET_APPLICATION,
      payload: applications
    });
  } catch (e) {}
}

export default mySaga;
