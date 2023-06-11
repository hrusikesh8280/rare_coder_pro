import { UPDATE_VALUE } from "./actionTypes";


export const updateValue = (value) => ({
    type: UPDATE_VALUE,
    payload: value,
  });