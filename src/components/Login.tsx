import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ControlPointDuplicateTwoTone } from "@mui/icons-material";

type SessionState = {
  email: string;
  password: string;
};
type AcceptedProps = {
  updateToken: (newToken: string) => void;
};

export default class Login extends React.Component<
  AcceptedProps,
  SessionState
> {
  constructor(props: AcceptedProps) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(username, password);
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h2" align="center">
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </Box>
      </div>
    );
  }
}
