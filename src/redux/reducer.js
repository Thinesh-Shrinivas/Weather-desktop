import { combineReducers } from "redux";

const initialState = {
  loginFlag: sessionStorage.getItem("LOGIN_FLAG") === null ? false : true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FLAG":
      return Object.assign({}, state, { loginFlag: action.flag });
    default:
      return state;
  }
};

export default combineReducers({ rootReducer });
