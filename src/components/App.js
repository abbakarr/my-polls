import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/App.css"

import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import Dashboard from "./Dashboard";
import Login from './Login';
import PollPage from './PollPage';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import ErrorPage from "./ErrorPage";
import NavigationBar from "./NavigationBar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div>
        {props.loading === true ? null : (
          <Routes>
          <Route path="/navigation" element={<NavigationBar />}/> 
            <Route path="/login" element={<Login />}/> 
            <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard/>} path="/" exact/>  
                <Route path="/questions/:id" element={<PollPage />} />
                <Route element={<NewPoll/>} path="/add"/>
                <Route element={<Leaderboard/>} path="/leaderboard"/>        
                <Route element={<ErrorPage/>} path="/*"/>
            </Route>
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ dispatch, authedUser, users, questions }) => ({
  dispatch,
  users,
  questions,
  authedUser,
  loading: users === null,
});

export default connect(mapStateToProps)(App);