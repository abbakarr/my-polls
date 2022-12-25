import { combineReducers } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
