import { combineReducers } from "redux";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { CHANGE_FROM_COORDINATE, CHANGE_TO_COORDINATE, HIDE_LOADER, SELECT_APPLICATION, SET_APPLICATION, SHOW_LOADER } from "./types";
import { IApplication, IApplicationState } from "interfaces/application.interface";

const initialState: IApplicationState = {
  application: null,
  applications: [],
  loader: false,
};

const applicationReducer = (
  state = initialState,
  action: PayloadAction<IApplication[]>
): any => {
  switch (action.type) {
    case SELECT_APPLICATION:
      return {
        ...state,
        application: action.payload,
      };
    case SET_APPLICATION:
        return {
            ...state,
            applications: action.payload,
            application: action.payload[action.payload.length - 1]
        };
    case SHOW_LOADER:
        return {
            ...state,
            loader: true
        };
    case HIDE_LOADER:
        return {
            ...state,
            loader: false
        };
    case CHANGE_FROM_COORDINATE:
        return {
            ...state,
            application: {...state.application, from: action.payload}
        };
    case CHANGE_TO_COORDINATE:
        return {
            ...state,
            application: {...state.application, to: action.payload}
        };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  application: applicationReducer,
});
