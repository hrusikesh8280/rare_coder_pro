import { UPDATE_VALUE } from "./actionTypes";



const initialState = {
  value: '',
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;