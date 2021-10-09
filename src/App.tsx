import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
// import Test from "./components/Test"
import MyPlant from "./components/MyPlant";
import PlantWishlist from "./components/PlantWishlist";
import PlantGraveyard from "./components/PlantGraveyard";
import Login from "./components/Login";
import Register from "./components/Register";
import ButtonAppBar from "./components/Toolbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";

type SessionState = {
  sessionToken: string | null;
  email: string | undefined;
};
class App extends React.Component<{}, SessionState> {
  constructor(props: SessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      email: "",
    };
  }
  componentDidUpdate() {
    console.log("Updated");
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("sessionToken", `Bearer ${newToken}`);
    this.setState({ sessionToken: `Bearer ${newToken}` });

    console.log("token", newToken);
    console.log("User Login");
  };
  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  protectedviews = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <>
        {/* <SideBar sessionToken={this.state.sessionToken} /> */}
        <ButtonAppBar
          clearToken={this.clearToken}
          sessionToken={this.state.sessionToken}
        />
        {/* <MyPlant sessionToken={this.state.sessionToken} /> */}
      </>
    ) : (
      <Login updateToken={this.updateToken} />
    );
  };

  render() {
    return (
      <div>{this.protectedviews()}</div>
      // <React.Fragment>
      //   <Router>
      //     {/* <SideBar /> */}
      //     <ButtonAppBar clearToken={this.clearToken} />

      //   </Router>
      // </React.Fragment>
    );
  }
}
export default App;
