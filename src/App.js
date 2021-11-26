import React, { useEffect } from "react";
import LoginScreen from "./Login/login";
import { Router } from "@reach/router";
import NavBarComponet from "./nav/Navbar/Navbar";
import Home from "./Components/Component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreator from "./redux/action";

function App(props) {
  useEffect(() => {
    const userCredential = {
      userName: "admin",
      pswd: "admin",
    };
    localStorage.setItem("USER_CREDENTIAL", JSON.stringify(userCredential));
  }, []);
  // Empty array in the useEffect resembels the component Did mount

  return (
    <React.Fragment>
      <NavBarComponet loginFlag={props.reducer.loginFlag} />
      <Router>
        <LoginScreen path="/" action={props.actions} />
        <Home path="/home" />
      </Router>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({ reducer: state.rootReducer });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
