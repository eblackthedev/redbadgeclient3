import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Card, InputBase } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { palette } from "@mui/system";
import { blue } from "@mui/material/colors";
// import useStyles from "../useStyles";

// import { makeStyles } from "@mui/styles";
// import { withStyles } from "@material-ui/core/styles";

/* Hook (For my CSS) */ /*Callback Function */
// const useStyles = (theme) => ({
// container: {
/* useStyles goes here */
// backgroundColor: "blue" /*(Example how to use) */,
// },
// cardGrid: {
//   padding: "20px 0",
// },
// card: {
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
// },
// cardMedia: {
//   paddingTop: "56.25%", // 16:9
// },
// cardContent: {
//   flexGrow: 1,
// },
// });

export default class MyPlant extends React.Component {
  //constructor
  //super
  //this.state object
  //inside constructor we need state vars

  constructor(props) {
    super(props);

    this.state = {
      plants: [],
    };
  }

  //   MyPlant = (this.props) => {

  fetchPlants = () => {
    fetch("http://localhost:4000/plant/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((plantData) => {
        this.setState({ plants: plantData });
        console.log(plantData);
      });
  };

  componentWillMount() {
    console.log("Ran before component mounted");
  }

  componentDidMount() {
    console.log(this.props.sessionToken);
    this.fetchPlants();
    // const url = "http://localhost:4000/plant/all";
    // const response = await fetch(url);
    // const plant = await response.json();
    console.log("props", this.props);
    console.log("plant State", this.state.plants);
    // console.log(this.state.plant);
    // console.log("Ran after component mounted");
  }

  render() {
    return (
      <>
        <CssBaseline />

        {/*Semantic HTML <main> (Learning Something New)*/}
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom /* Adds Padding To The Bottom*/
              >
                My Plants
              </Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth label="Search My Plants" id="fullWidth" />
                <Typography
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  paddingTop="30px"
                  className="prompt"
                >
                  My List
                </Typography>
                <Grid container spacing={2} justify="center">
                  {/* Grid Used For Responsive Design*/}
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </main>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardMedia
                  image="http://source.unsplash.com/random"
                  // plantName="Plant Name"
                  // plantType="Plant Type"
                />
                {/* return plat.map((plant, index) => { */}
                {this.state.plants.map((plant) => (
                  <div>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {plant.plantName}
                      </Typography>
                      <Typography gutterBottom variant="h5">
                        {plant.plantType}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </div>
                ))}
                {/* }) */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
