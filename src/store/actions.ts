import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { IApplication, ICoordinate } from "interfaces/application.interface";
import { CHANGE_FROM_COORDINATE, CHANGE_TO_COORDINATE, FETCH_APPLICATION, HIDE_LOADER, SELECT_APPLICATION, SET_APPLICATION, SHOW_LOADER } from "./types";

export const selectApplicationAction = (payload: IApplication): PayloadAction<IApplication> => ({
    type: SELECT_APPLICATION,
    payload
});

export const fetchApllicationsAction = (): any => ({
    type: FETCH_APPLICATION,
});

export const setApllicationsAction = (payload: IApplication[]): any => ({
    type: SET_APPLICATION,
    payload
});

export const showLoader = (): any => ({
    type: SHOW_LOADER
});

export const hideLoader = (): any => ({
    type: HIDE_LOADER
});

export const changeFromCoordinateAction = (payload: ICoordinate | null): any => ({
    type: CHANGE_FROM_COORDINATE,
    payload
});

export const changeToCoordinateAction = (payload: ICoordinate | null): any => ({
    type: CHANGE_TO_COORDINATE,
    payload
});