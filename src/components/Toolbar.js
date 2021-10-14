import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPlant from "./MyPlant";
import PlantWishlist from "./PlantWishlist";
import PlantGraveyard from "./PlantGraveyard";
import EditPlant from "./EditPlant";

export default class Test1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleDrawer: "open",
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ [anchor]: open });
  };

  list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <FilterVintageIcon />
          </ListItemIcon>
          <ListItemText primary="My Plants" />
        </ListItem>
        <ListItem button component={Link} to="/plantwishlist">
          <ListItemIcon>
            <SpaIcon />
          </ListItemIcon>
          <ListItemText primary="Plant Wishlist" />
        </ListItem>
        <ListItem button component={Link} to="/plantgraveyard">
          <ListItemIcon>
            <FaceRetouchingOffIcon />
          </ListItemIcon>
          <ListItemText primary="Plant Graveyard" />
        </ListItem>
      </List>
      {/* <List>
        {["My Plants", "Plant Wishlist", "Plant Graveyard"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <FilterVintageIcon /> : <SpaIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List> */}
    </Box>
  );

  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={this.toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />{" "}
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={this.state[anchor]}
                    onClose={this.toggleDrawer(anchor, false)}
                  >
                    {this.list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
              {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Button color="inherit">Sign Out</Button> */}
              <ListItem button component={Link} to="/login">
                <ListItemText
                  onClick={this.props.clearToken}
                  primary="Sign Out"
                />
              </ListItem>
            </Toolbar>
          </AppBar>
        </Box>
        <Switch>
          <Route exact path="/editplants">
            <EditPlant
              sessionToken={this.props.sessionToken}
              plantId={this.plantId}
            />
          </Route>
          <Route exact path="/">
            <MyPlant sessionToken={this.props.sessionToken} />
          </Route>
          <Route exact path="/plantwishlist">
            <PlantWishlist sessionToken={this.props.sessionToken} />
          </Route>

          <Route exact path="/plantgraveyard">
            <PlantGraveyard sessionToken={this.props.sessionToken} />
          </Route>
          {/* <Route exact path="/test" component={Test} />  */}
        </Switch>
      </div>
    );
  }
}
